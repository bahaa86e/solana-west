import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";

/** Production FormSubmit transport — override per deployment via env when needed. */
export const leadDeliveryConfig = {
  formsubmitEndpoint:
    process.env.LEAD_FORMSUBMIT_URL?.trim() || "https://formsubmit.co/bahaa86e@gmail.com",
  ccEmail: process.env.LEAD_FORMSUBMIT_CC?.trim() || "donia99e@gmail.com",
  primaryEmail: process.env.LEAD_FORMSUBMIT_TO?.trim() || "bahaa86e@gmail.com",
  /** Shown in enquiry emails — override per microsite later without form changes */
  projectName: process.env.LEAD_PROJECT_NAME?.trim() || siteConfig.shortName,
  domain: process.env.LEAD_DOMAIN?.trim() || getSiteUrl().hostname.replace(/^www\./, ""),
} as const;
