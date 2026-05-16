import { siteConfig } from "@/data/site";

/**
 * Editorial footer authority — visible entity copy for crawl + AI surfaces (facts only).
 * Mirrors project context / compliance: nothing final until developer confirmation at booking.
 */
export const footerAuthority = {
  kicker: "West Cairo · New Zayed",
  /** Sitewide H2 — complements nav without recycling bare brand string */
  headline: `${siteConfig.name} by ${siteConfig.developer}`,
  subheading: `${siteConfig.developer} · Chairman ${siteConfig.founder}`,
  deck:
    `${siteConfig.shortName} is a low-density compound on Mehwar El Dabaa, New Zayed, by ${siteConfig.developer}, with villas, townhouses, twin houses, and apartments. ` +
    "Prices start from 9.8M EGP at project level, with 5% down, installments up to 10 years, and delivery from 2027. Confirm final details before reserving.",
} as const;

export const footerLegalDisclaimer =
  "Independent real estate marketing and informational platform. Prices, availability, delivery dates, and payment plans can change by phase and unit. This site supports informed enquiries and does not replace official sales documents.";
