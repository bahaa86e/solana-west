import { siteConfig } from "@/data/site";

/**
 * Editorial footer authority — visible entity copy for crawl + AI surfaces (facts only).
 * Mirrors project context / compliance: nothing binding until developer confirmation at booking.
 */
export const footerAuthority = {
  kicker: "West Cairo · New Zayed",
  headline: siteConfig.name,
  subheading: `${siteConfig.developer} · Chairman ${siteConfig.founder}`,
  deck:
    `${siteConfig.shortName} is a low-density compound along Mehwar El Dabaa in New Zayed by ${siteConfig.developer}, offering villas, townhouses, twin houses, and apartments. ` +
    "Reference framing—starting from 9.8M EGP, 5% down payment, installments up to 10 years, delivery from 2027—is for buyer orientation only; issuance terms apply at booking.",
} as const;

export const footerLegalDisclaimer =
  "All pricing, allocations, timelines, and commercial structures are illustrative until confirmed by the developer at issuance. This site supports informed inquiries and does not replace formal documentation.";
