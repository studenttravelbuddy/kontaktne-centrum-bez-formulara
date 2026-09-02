import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { getCardTypeLabel, getTopic, resolveRecipients, type CardType } from "./inquiry-routing";

export interface InquiryInput {
  fullName: string;
  isOrganization: boolean;
  organizationName?: string;
  organizationAddress?: string;
  website?: string;
  email: string;
  phone: string;
  topicId: string;
  cardType?: string;
  cardNumber?: string;
  message?: string;
  consent: true;
  attachment?: { name: string; type: string; size: number; data: string };
}

const SENDER = "CKM SYTS formulár <onboarding@resend.dev>";

function buildEmailBody(input: InquiryInput, topicLabel: string): string {
  const rows: [string, string | undefined][] = [
    ["Meno a priezvisko", input.fullName],
    ["E-mail", input.email],
    ["Telefón", input.phone],
    ["Zastupuje organizáciu", input.isOrganization ? "Áno" : "Nie"],
    ["Názov organizácie", input.organizationName],
    ["Adresa organizácie", input.organizationAddress],
    ["Webstránka", input.website],
    ["Oblasť dopytu", topicLabel],
    ["Typ preukazu", getCardTypeLabel(input.cardType)],
    ["Číslo preukazu", input.cardNumber],
    ["Ďalšie informácie", input.message],
  ];

  return rows
    .filter(([, value]) => value && value.length > 0)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

export async function submitInquiry(input: InquiryInput) {
  const topic = getTopic(input.topicId);
  if (!topic) {
    throw new Error("Neznáma oblasť dopytu.");
  }

  const cardType = topic.cardTypes.length ? (input.cardType as CardType | undefined) : undefined;
  const recipients = resolveRecipients(topic.id, cardType);
  const attachmentPaths: string[] = [];

  const { data: inserted, error: insertError } = await supabaseAdmin
    .from("contact_inquiries")
    .insert({
      full_name: input.fullName,
      is_organization: input.isOrganization,
      organization_name: input.organizationName ?? null,
      organization_address: input.organizationAddress ?? null,
      website: input.website ?? null,
      email: input.email,
      phone: input.phone,
      topic_id: topic.id,
      topic_label: topic.label,
      card_type: cardType ?? null,
      card_number: input.cardNumber ?? null,
      message: input.message ?? null,
      recipients,
    })
    .select("id")
    .single();

  if (insertError || !inserted) {
    console.error("Inquiry insert failed", insertError);
    throw new Error("Dopyt sa nepodarilo uložiť. Skúste to prosím znova.");
  }

  if (input.attachment) {
    const bytes = Uint8Array.from(atob(input.attachment.data), (c) => c.charCodeAt(0));
    const safeName = input.attachment.name.replace(/[^\w.\-]+/g, "_").slice(-80);
    const path = `${inserted.id}/${safeName}`;
    const { error: uploadError } = await supabaseAdmin.storage
      .from("inquiry-attachments")
      .upload(path, bytes, { contentType: input.attachment.type, upsert: true });

    if (uploadError) {
      console.error("Attachment upload failed", uploadError);
    } else {
      attachmentPaths.push(path);
      await supabaseAdmin
        .from("contact_inquiries")
        .update({ attachment_paths: attachmentPaths })
        .eq("id", inserted.id);
    }
  }

  const resendKey = process.env["RESEND_API_KEY"];
  if (!resendKey) {
    await supabaseAdmin
      .from("contact_inquiries")
      .update({ email_status: "skipped", email_error: "RESEND_API_KEY nie je nastavený" })
      .eq("id", inserted.id);
    return { id: inserted.id, emailSent: false };
  }

  try {
    const payload: Record<string, unknown> = {
      from: SENDER,
      to: recipients,
      reply_to: input.email,
      subject: `Nový dopyt z webu: ${topic.label}`,
      text: buildEmailBody(input, topic.label),
    };

    if (input.attachment) {
      payload["attachments"] = [
        { filename: input.attachment.name, content: input.attachment.data },
      ];
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend error", res.status, detail);
      await supabaseAdmin
        .from("contact_inquiries")
        .update({ email_status: "failed", email_error: `${res.status}: ${detail}`.slice(0, 500) })
        .eq("id", inserted.id);
      return { id: inserted.id, emailSent: false };
    }

    await supabaseAdmin
      .from("contact_inquiries")
      .update({ email_status: "sent" })
      .eq("id", inserted.id);
    return { id: inserted.id, emailSent: true };
  } catch (error) {
    console.error("Email send failed", error);
    await supabaseAdmin
      .from("contact_inquiries")
      .update({ email_status: "failed", email_error: String(error).slice(0, 500) })
      .eq("id", inserted.id);
    return { id: inserted.id, emailSent: false };
  }
}
