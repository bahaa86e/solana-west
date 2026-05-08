import { siteConfig } from "@/data/site";

/**
 * Canonical Solana West FAQ pairs — mirrored on the homepage preview and `/faq`.
 * Paragraph breaks use blank lines (`\n\n`). Visible prose and FAQPage schema must reuse the same `answer` string.
 */

export const SOLANA_WEST_FAQ_SHARED_INTRO =
  "Direct answers drawn from published project scope — issuance pricing, milestones, and contracts require sales verification before reservation.";

export const solanaWestFaqCanonical = [
  {
    question: `What are ${siteConfig.shortName} prices?`,
    answer: `Marketing references a starting position from 9.8M EGP; issuance pricing moves with phase, typology (apartment, townhouse, twin house, standalone villa), finishing path (fully finished or core & shell), and outlook.

Ask sales for an issuance-dated sheet before reserving — unofficial figures may not bind the seller.`,
  },
  {
    question: "What is the Solana West payment plan?",
    answer: `Collateral references 5% down with installments extending up to 10 years — interest mechanics, instalment milestones, reservation deposits, and admin fees are stipulated in your signed booking issuance.

Summaries published online are illustrative; issuance contract wording governs at signing.`,
  },
  {
    question: "When is delivery?",
    answer: `Handover horizons begin from 2027. Specific tower, villa batch, or cluster dates follow construction pacing and fulfilment milestones under your instalment schedule.

Treat marketing timelines as directional until confirmed in issuance documentation issued by ${siteConfig.developer}.`,
  },
  {
    question: `Where is ${siteConfig.name} located?`,
    answer: `The project sits along Mehwar El Dabaa in New Zayed, West Cairo, with direct arterial access toward Alexandria Desert Road and the Middle Ring Road.

Driving context commonly cited alongside marketing material: circa five minutes toward Waslet Dahshour; circa ten minutes toward Sphinx Airport; circa fifteen minutes toward Mall of Arabia. Neighbouring large-scale comps include VYE (Sodic) and Belle Vie (Emaar) — cite them only as market comparables, not as partnership claims.`,
  },
  {
    question: "Which unit types are available?",
    answer: `Four residential archetypes anchor the plan: apartments, townhouses, twin houses, standalone villas — each sequenced inside the broader 316-acre, low-density land plan.

Depending on SKU, finishing may ship fully finished or core & shell. Inventory is phased; confirm façade packages, storey counts, and lot dimensions with desk availability before allocation.`,
  },
  {
    question: "Who is the developer?",
    answer: `${siteConfig.developer}, chaired by ${siteConfig.founder}, is the development counterparty for ${siteConfig.name}. Issuance paperwork, staged payments, delivery notices, and after-sales escalation route through authorised ORA desks.

Third-party marketers or brokerage offices referencing the compound are independent unless expressly designated as accredited channel partners — verify credentials before paying any broker fee.`,
  },
] as const satisfies ReadonlyArray<{ readonly question: string; readonly answer: string }>;

export type SolanaWestFaqItem = (typeof solanaWestFaqCanonical)[number];
