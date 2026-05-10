import { siteConfig } from "@/data/site";

/**
 * Editorial footer authority — visible entity copy for crawl + AI surfaces (facts only).
 * Mirrors project context / compliance: nothing binding until developer confirmation at booking.
 */
export const footerAuthority = {
  kicker: "West Cairo · New Zayed",
  /** Sitewide H2 — complements nav without recycling bare brand string */
  headline: `${siteConfig.name} · ORA-led compound companion`,
  subheading: `${siteConfig.developer} · Chairman ${siteConfig.founder}`,
  deck:
    `${siteConfig.shortName} is a low-density compound on Mehwar El Dabaa, New Zayed, by ${siteConfig.developer}, with villas, townhouses, twin houses, and apartments. ` +
    "Reference from 9.8M EGP, 5% down, installments up to 10 years, delivery from 2027 orients buyers only—your signed issuance governs at booking.",
} as const;

export const footerLegalDisclaimer =
  "All pricing, allocations, timelines, and commercial structures are illustrative until confirmed by the developer at issuance. This site supports informed inquiries and does not replace formal documentation.";
