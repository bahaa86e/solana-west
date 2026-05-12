import { siteConfig } from "@/data/site";

/** Factual commercial anchors — final details are confirmed before reservation. */
export const croCommercialFacts = {
  startingFrom: "From 9.8M EGP",
  downPayment: "5% down",
  installments: "Up to 10 years",
  delivery: "Delivery from 2027",
} as const;

export const croCommercialSummaryLine =
  `${croCommercialFacts.startingFrom} · ${croCommercialFacts.downPayment} · ${croCommercialFacts.installments} · ${croCommercialFacts.delivery}.`;

/**
 * Commercial chips — investor scan line; chips are factual, not promotional.
 * Used in final conversion panel and lead forms.
 */
export const croCommercialChipLabels = [
  croCommercialFacts.startingFrom,
  `${croCommercialFacts.downPayment} · at booking`,
  `${croCommercialFacts.installments} · current sales schedule`,
  croCommercialFacts.delivery,
] as const;

/** Positioning — one line; use rail / sticky context. */
export const croPrivateDeskTagline = "Solana West sales team · ORA";

/**
 * Concierge CTA system: primary = sales contact (WhatsApp), secondary = prices or form.
 */
export const croMessaging = {
  headerDesktopWhatsapp: "Request prices",
  headerMobileWhatsapp: "Prices on WhatsApp",

  railEyebrow: "Buyer support",
  railWhatsAppLabel: "Ask for prices and availability",
  railWhatsAppSubline: "Current options, payment plan, and next steps",

  stickyWhatsAppLine: "Request prices",
  stickyWhatsAppSubline: "WhatsApp",
  stickyCallLabel: "Call",
  stickyEnquiryLabel: "Enquire",

  heroPrimaryCta: "Request prices on WhatsApp",
  heroSecondaryCtaLong: "Pricing & availability",
  heroSecondaryCtaShort: "Pricing",
  heroAnnotationTitle: "Key buyer facts",

  paymentSectionCue:
    "Review the down payment, delivery timing, and unit availability before choosing a unit.",
  paymentSectionCta: "Request payment details",
  paymentSectionCtaSub:
    "Ask for the latest schedule for your preferred unit type.",
  internalPaymentPlanLink: "Payment plan page",

  finalPanelDeskAssurance:
    "Clear responses for buyers comparing price, payment, availability, and next steps.",

  leadFormEyebrow: "Buyer enquiry",
  leadFormSubtitle:
    `${croCommercialSummaryLine} Share your preferred unit type, budget range, and contact channel so the reply can be useful.`,
  leadFormSubmitIdle: "Request pricing & availability",
  leadFormSubmitPending: "Sending…",
  leadFormRoutingNote:
    "WhatsApp is usually the fastest way to receive current price and payment context.",
  leadFormWhatsappSecondary: "Ask on WhatsApp",

  footerWhatsAppLabel: "Request prices on WhatsApp",
} as const;

export const croAria = {
  whatsappPrivateDesk: `WhatsApp — ${siteConfig.shortName} sales team`,
} as const;

export const croInvestorAssurance = [
  {
    eyebrow: "Developer",
    title: siteConfig.developer,
    detail:
      "Developer behind Solana West New Zayed, with project information confirmed through sales documentation.",
  },
  {
    eyebrow: "Leadership",
    title: siteConfig.founder,
    detail:
      "Chairman of ORA Developers Egypt, adding recognition for buyers reviewing developer background.",
  },
  {
    eyebrow: "Horizon",
    title: "Delivery from 2027",
    detail:
      "Confirm the exact phase, cluster, and handover timing for your chosen unit before reserving.",
  },
] as const;
