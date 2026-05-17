import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";

/** Resend lead delivery — override per deployment via env when needed. */
export const leadDeliveryConfig = {
  primaryEmail: process.env.LEAD_PRIMARY_EMAIL?.trim() || "bahaa86e@gmail.com",
  ccEmail: process.env.LEAD_CC_EMAIL?.trim() || "donia99e@gmail.com",
  fromEmail:
    process.env.RESEND_FROM_EMAIL?.trim() || "Solana West Leads <onboarding@resend.dev>",
  /** Shown in enquiry emails — override per microsite later without form changes */
  projectName: process.env.LEAD_PROJECT_NAME?.trim() || siteConfig.shortName,
  domain: process.env.LEAD_DOMAIN?.trim() || getSiteUrl().hostname.replace(/^www\./, ""),
} as const;
