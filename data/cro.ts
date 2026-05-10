import { siteConfig } from "@/data/site";

/** Factual commercial anchors — mirrors project context; issuance supersedes summaries. */
export const croCommercialFacts = {
  startingFrom: "From 9.8M EGP",
  downPayment: "5% down",
  installments: "Up to 10 years",
  delivery: "Delivery from 2027",
} as const;

export const croCommercialSummaryLine =
  `${croCommercialFacts.startingFrom} · ${croCommercialFacts.downPayment} · ${croCommercialFacts.installments} · ${croCommercialFacts.delivery}.`;

/**
 * Reference chips — investor scan line; chips are factual, not promotional.
 * Used in final conversion panel and lead forms.
 */
export const croReferenceChipLabels = [
  croCommercialFacts.startingFrom,
  `${croCommercialFacts.downPayment} · at booking`,
  `${croCommercialFacts.installments} · issuance schedule`,
  croCommercialFacts.delivery,
] as const;

/** Positioning — one line; use rail / sticky context. */
export const croPrivateDeskTagline = "Private acquisition desk · ORA";

/**
 * Concierge CTA system: primary = acquisition desk (WhatsApp), secondary = diligence (prices, form).
 */
export const croMessaging = {
  headerDesktopWhatsapp: "Acquisition desk",
  headerMobileWhatsapp: "Acquisition desk · WhatsApp",

  railEyebrow: "Advisory",
  railWhatsAppLabel: "Speak with the advisory desk",
  railWhatsAppSubline: "Structured pricing & availability guidance · issuance-aligned",

  stickyWhatsAppLine: "Acquisition desk",
  stickyWhatsAppSubline: "WhatsApp",
  stickyCallLabel: "Call",
  stickyEnquiryLabel: "Enquire",

  heroPrimaryCta: "Private acquisition desk",
  heroSecondaryCtaLong: "Pricing & availability guidance",
  heroSecondaryCtaShort: "Guidance",
  heroAnnotationTitle: "Collateral reference",

  paymentSectionCue:
    "Down payment, milestones, and interest mechanics exist only in your issuance file—we walk the line items with you so counsel or treasury can sign off.",
  paymentSectionCta: "Speak with the advisory desk",
  paymentSectionCtaSub:
    "Request your schedule excerpt—structured for treasury review, not a generic flyer.",
  internalPaymentPlanLink: "Payment-plan page",

  finalPanelDeskAssurance:
    "Authorised desk responses—formatted for acquisition teams, families, and GCC treasury review—not broadcast marketing.",

  leadFormEyebrow: "Advisory enquiry",
  leadFormSubtitle:
    `${croCommercialSummaryLine} Share typology interest, hold horizon, and preferred channel—we route context to the advisory desk.`,
  leadFormSubmitIdle: "Request pricing & availability guidance",
  leadFormSubmitPending: "Sending…",
  leadFormRoutingNote:
    "Enquiries route to authorised desk review. Fastest structured commercial context is usually WhatsApp—the private acquisition desk.",
  leadFormWhatsappSecondary: "Private acquisition desk",

  footerWhatsAppLabel: "Private acquisition desk",
} as const;

export const croAria = {
  whatsappPrivateDesk: `WhatsApp — ${siteConfig.shortName} private acquisition desk`,
} as const;

export const croInvestorAssurance = [
  {
    eyebrow: "Developer",
    title: siteConfig.developer,
    detail:
      "ORA-led servicing and phased sales—institutional counterparty posture for issuance-driven reservations.",
  },
  {
    eyebrow: "Leadership",
    title: siteConfig.founder,
    detail:
      "Chairman-led portfolio governance; milestones and counterparties sit with an established developer, not ad-hoc promotion.",
  },
  {
    eyebrow: "Horizon",
    title: "Handover from 2027",
    detail:
      "Low-density master plan—verify cluster delivery and amenity rollout against your underwriting before you anchor rent or exit assumptions.",
  },
] as const;
