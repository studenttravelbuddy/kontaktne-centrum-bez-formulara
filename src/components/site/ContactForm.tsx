import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Paperclip } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { submitContactInquiry } from "@/lib/contact.functions";
import {
  ALLOWED_FILE_TYPES,
  CARD_TYPES,
  MAX_FILE_SIZE,
  TOPICS,
  TOPIC_GROUPS,
  getTopic,
  looksLikeCardNumber,
  type CardType,
} from "@/lib/inquiry-routing";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = () => reject(new Error("Súbor sa nepodarilo načítať."));
    reader.readAsDataURL(file);
  });
}

interface Props {
  topicId: string;
  onTopicChange: (topicId: string) => void;
}

export function ContactForm({ topicId, onTopicChange }: Props) {
  const submit = useServerFn(submitContactInquiry);

  const [fullName, setFullName] = useState("");
  const [isOrganization, setIsOrganization] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [organizationAddress, setOrganizationAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardType, setCardType] = useState<CardType | "">("");
  const [cardNumber, setCardNumber] = useState("");
  const [message, setMessage] = useState("");
  const [interestConfirmed, setInterestConfirmed] = useState(false);
  const [consent, setConsent] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const topic = useMemo(() => getTopic(topicId), [topicId]);
  const fields = topic?.fields;
  const needsCardType = (topic?.cardTypes.length ?? 0) > 0;
  const orgRequired = fields?.organizationName === "required";

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!topic || !fields) {
      toast.error("Vyberte prosím oblasť dopytu.");
      return;
    }
    if (needsCardType && !cardType) {
      toast.error("Vyberte prosím typ preukazu.");
      return;
    }
    if (fields.cardNumber === "required" && !cardNumber.trim()) {
      toast.error("Zadajte prosím číslo preukazu.");
      return;
    }
    if (fields.message === "required" && !message.trim()) {
      toast.error("Vyplňte prosím ďalšie informácie.");
      return;
    }
    if (fields.attachment === "required" && !file) {
      toast.error(`Priložte prosím: ${fields.attachmentLabel ?? "prílohu"}.`);
      return;
    }
    if ((orgRequired || isOrganization) && !organizationName.trim()) {
      toast.error("Zadajte prosím názov organizácie.");
      return;
    }
    if (fields.organizationAddress === "required" && !organizationAddress.trim()) {
      toast.error("Zadajte prosím adresu organizácie.");
      return;
    }
    if (fields.interestConfirmation && !interestConfirmed) {
      toast.error("Potvrďte prosím záujem o vydávanie preukazov.");
      return;
    }
    if (!consent) {
      toast.error("Bez súhlasu so spracovaním osobných údajov dopyt odoslať nevieme.");
      return;
    }
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        toast.error("Príloha môže mať najviac 5 MB.");
        return;
      }
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error("Povolené formáty prílohy sú jpg, png a pdf.");
        return;
      }
    }

    setSending(true);
    try {
      const attachment = file
        ? { name: file.name, type: file.type, size: file.size, data: await fileToBase64(file) }
        : undefined;

      await submit({
        data: {
          fullName: fullName.trim(),
          isOrganization: isOrganization || orgRequired,
          organizationName: organizationName.trim() || undefined,
          organizationAddress: organizationAddress.trim() || undefined,
          website: website.trim() || undefined,
          email: email.trim(),
          phone: phone.trim(),
          topicId: topic.id,
          cardType: needsCardType ? cardType : undefined,
          cardNumber: cardNumber.trim() || undefined,
          message: message.trim() || undefined,
          consent: true,
          attachment,
        },
      });
      setDone(true);
    } catch (error) {
      console.error(error);
      toast.error("Dopyt sa nepodarilo odoslať. Skúste to prosím znova.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <section id="formular" className="bg-brand-teal-light">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
           <CheckCircle2 className="mx-auto h-16 w-16 text-brand-teal-deep" aria-hidden="true" />
           <h2 className="mt-4 text-4xl md:text-5xl">Ďakujeme, ozveme sa Vám čo najskôr.</h2>
          <p className="mt-3 text-brand-gray">
            Váš dopyt sme prijali a posunuli kolegyniam, ktoré danú oblasť riešia. Odpoveď Vám
            pošleme na {email}.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="formular" className="bg-brand-teal-light">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-black tracking-wider text-brand-pink uppercase">Napíšte nám</p>
        <h2 className="text-balance-tight mt-3 text-4xl sm:text-5xl">Kontaktný formulár</h2>
        <p className="mt-4 text-muted-foreground">
          Vyplňte formulár a Váš dopyt automaticky doručíme kolegyniam, ktoré danú oblasť riešia.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-8" noValidate>
          <fieldset className="rounded-2xl bg-card p-6">
            <legend className="px-2 font-display text-xl font-black">Vaše údaje</legend>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Meno a priezvisko *</Label>
                <Input
                  id="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <span className="text-sm font-medium">Zastupujem firmu alebo organizáciu *</span>
                <div className="mt-2 flex gap-4">
                  {[
                    { label: "Áno", value: true },
                    { label: "Nie", value: false },
                  ].map((option) => (
                    <label key={option.label} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="isOrganization"
                        checked={isOrganization === option.value}
                        onChange={() => setIsOrganization(option.value)}
                        className="accent-[var(--brand-teal-deep)]"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              {(isOrganization || orgRequired) && (
                <div>
                  <Label htmlFor="organizationName">Názov organizácie *</Label>
                  <Input
                    id="organizationName"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    className="mt-1"
                  />
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="email">E-mailová adresa *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefónne číslo *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded-2xl bg-card p-6">
            <legend className="px-2 font-display text-xl font-black">Čoho sa dopyt týka</legend>
            <div className="space-y-4">
              <div>
                <Label htmlFor="topic">Oblasť dopytu *</Label>
                <select
                  id="topic"
                  required
                  value={topicId}
                  onChange={(e) => {
                    onTopicChange(e.target.value);
                    setCardType("");
                    setFile(null);
                  }}
                   className="mt-1 h-12 w-full border-2 border-brand-teal bg-background px-3 text-sm"
                >
                  <option value="">— vyberte oblasť —</option>
                  {TOPIC_GROUPS.map((group) => (
                    <optgroup key={group} label={group}>
                      {TOPICS.filter((t) => t.group === group).map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {needsCardType && (
                <div>
                  <Label htmlFor="cardType">Typ preukazu *</Label>
                  <select
                    id="cardType"
                    required
                    value={cardType}
                    onChange={(e) => setCardType(e.target.value as CardType)}
                     className="mt-1 h-12 w-full border-2 border-brand-teal bg-background px-3 text-sm"
                  >
                    <option value="">— vyberte typ preukazu —</option>
                    {CARD_TYPES.filter((c) => topic?.cardTypes.includes(c.id)).map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {fields && fields.cardNumber !== "hidden" && (
                <div>
                  <Label htmlFor="cardNumber">
                    Číslo preukazu {fields.cardNumber === "required" ? "*" : "(nepovinné)"}
                  </Label>
                  <Input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="napr. S421..."
                    className="mt-1"
                  />
                  {cardNumber.trim() !== "" && !looksLikeCardNumber(cardNumber) && (
                    <p className="mt-1 text-xs text-brand-orange-dark">
                      Číslo preukazu zvyčajne začína S421, T421 alebo E421 — skontrolujte ho
                      prosím. Formulár viete odoslať aj tak.
                    </p>
                  )}
                </div>
              )}

              {fields?.organizationAddress === "required" && (
                <div>
                  <Label htmlFor="organizationAddress">Adresa organizácie *</Label>
                  <Input
                    id="organizationAddress"
                    value={organizationAddress}
                    onChange={(e) => setOrganizationAddress(e.target.value)}
                    className="mt-1"
                  />
                </div>
              )}

              {fields?.website === "optional" && (
                <div>
                  <Label htmlFor="website">Webstránka (nepovinné)</Label>
                  <Input
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="mt-1"
                  />
                </div>
              )}

              {fields && fields.message !== "hidden" && (
                <div>
                  <Label htmlFor="message">
                    Ďalšie informácie {fields.message === "required" ? "*" : "(nepovinné)"}
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1"
                  />
                </div>
              )}

              {fields && fields.attachment !== "hidden" && (
                <div>
                  <Label htmlFor="attachment">
                    {fields.attachmentLabel ?? "Príloha"}{" "}
                    {fields.attachment === "required" ? "*" : "(nepovinné)"}
                  </Label>
                  <div className="mt-1 flex items-center gap-3">
                    <Paperclip className="h-4 w-4 text-brand-gray" aria-hidden="true" />
                    <Input
                      id="attachment"
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    />
                  </div>
                  <p className="mt-1 text-xs text-brand-gray">
                    Povolené formáty: jpg, png, pdf. Maximálna veľkosť 5 MB.
                  </p>
                </div>
              )}

              {fields?.interestConfirmation && (
                <label className="flex items-start gap-3 text-sm">
                  <Checkbox
                    checked={interestConfirmed}
                    onCheckedChange={(v) => setInterestConfirmed(v === true)}
                  />
                  <span>Potvrdzujem záujem o vydávanie preukazov na našej škole. *</span>
                </label>
              )}
            </div>
          </fieldset>

          <label className="flex items-start gap-3 text-sm">
            <Checkbox checked={consent} onCheckedChange={(v) => setConsent(v === true)} />
            <span>
              Súhlasím so spracovaním osobných údajov na účel vybavenia môjho dopytu. *
            </span>
          </label>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-yellow px-7 font-bold text-foreground transition-colors hover:bg-brand-teal disabled:opacity-60 md:w-auto"
          >
            {sending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
            Poslať dopyt
          </button>
        </form>
      </div>
    </section>
  );
}
