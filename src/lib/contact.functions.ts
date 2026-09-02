import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { submitInquiry, type InquiryInput } from "./contact.server";

const attachmentSchema = z.object({
  name: z.string().min(1).max(255),
  type: z.string().min(1).max(120),
  size: z
    .number()
    .int()
    .positive()
    .max(5 * 1024 * 1024),
  data: z.string().min(1),
});

const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(160),
  isOrganization: z.boolean(),
  organizationName: z.string().trim().max(200).optional(),
  organizationAddress: z.string().trim().max(300).optional(),
  website: z.string().trim().max(300).optional(),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(6).max(40),
  topicId: z.string().min(1).max(60),
  cardType: z.string().max(40).optional(),
  cardNumber: z.string().trim().max(60).optional(),
  message: z.string().trim().max(5000).optional(),
  consent: z.literal(true),
  attachment: attachmentSchema.optional(),
});

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => submitInquiry(data as InquiryInput));
