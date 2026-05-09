import { siteConfig } from "@/data/site";

/** Factual commercial anchors — mirrors project context / compliance copy. */
export const croCommercialFacts = {
  startingFrom: "From 9.8M EGP",
  downPayment: "5% down",
  installments: "Up to 10 years",
  delivery: "Delivery from 2027",
} as const;

export const croCommercialSummaryLine =
  `${croCommercialFacts.startingFrom} · ${croCommercialFacts.downPayment} · ${croCommercialFacts.installments} · ${croCommercialFacts.delivery}.`;

/** Short cues for rails, chips, and form scaffolding. */
export const croMessaging = {
  railWhatsAppLabel: "WhatsApp — pricing & payment plan",
  stickyWhatsAppLine: "Plan & prices",
  leadFormSubtitle: croCommercialSummaryLine,
  leadFormSubmitIdle: "Send enquiry",
  leadFormSubmitPending: "Sending…",
  paymentSectionCta: "Message us for the payment breakdown",
  internalPaymentPlanLink: "Open full payment-plan page",
} as const;

/** Footer / trust strip — authority without performance claims. */
export const croInvestorAssurance = [
  {
    eyebrow: "Developer",
    title: siteConfig.developer,
    detail: "ORA-led master planning and issuance discipline.",
  },
  {
    eyebrow: "Leadership",
    title: siteConfig.founder,
    detail: "Chairman reference for portfolio governance.",
  },
  {
    eyebrow: "Horizon",
    title: "Handover from 2027",
    detail: "316-acre low-density plan — phased amenity rollout.",
  },
] as const;
