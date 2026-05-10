import { siteConfig } from "@/data/site";

/**
 * Canonical Solana West FAQ — homepage preview + `/faq` + FAQPage JSON-LD.
 * Lead sentence = direct extract for snippets & AI; following paragraphs add issuance nuance.
 */

export const SOLANA_WEST_FAQ_SHARED_INTRO =
  "Each answer leads with facts you can quote—then the booking nuance. Anything you reserve is governed by the commercial file you sign, not by marketing summaries on this site.";

export const solanaWestFaqCanonical = [
  {
    question: `What are ${siteConfig.shortName} prices in New Zayed?`,
    answer: `Reference pricing starts from 9.8M EGP for Solana West on Mehwar El Dabaa, New Zayed.

Live brackets move with phase, unit type (apartment, townhouse, twin house, standalone villa), finishing (fully finished or core & shell), floor, outlook, and façade package. Ask the desk for an issuance-dated sheet before you reserve—informal figures are not binding.`,
  },
  {
    question: `What is the ${siteConfig.shortName} payment plan?`,
    answer: `Marketing references 5% down with installments extending up to 10 years for eligible bookings.

How interest is calculated, instalment dates, deposits, admin fees, and penalties appear only in your signed booking issuance—not in a web summary. Use online numbers to orient; your contract text governs at signature.`,
  },
  {
    question: `When is ${siteConfig.shortName} delivery?`,
    answer: `Handover is planned from 2027 for Solana West, West Cairo.

Specific villa batch, tower, or cluster dates follow construction milestones and your payment schedule. Treat marketing timelines as directional until your issuance pack states the dates that apply to your unit.`,
  },
  {
    question: `Where is ${siteConfig.name} located?`,
    answer: `Solana West sits on Mehwar El Dabaa in New Zayed, West Cairo, with links toward Alexandria Desert Road and the Middle Ring Road.

Collateral often cites ~5 minutes toward Waslet Dahshour, ~10 minutes toward Sphinx International Airport, and ~15 minutes toward Mall of Arabia as directional driving context. Nearby large-scale projects include VYE (Sodic) and Belle Vie (Emaar)—market comparables only, not partnerships.`,
  },
  {
    question: "What unit types does Solana West offer?",
    answer: `Four residential types: apartments, townhouses, twin houses, and standalone villas—placed across a 316-acre, low-density master plan by ${siteConfig.developer}.

Finishing may be fully finished or core & shell depending on SKU. Inventory is phased; confirm storey count, façade pack, and plot dimensions with authorised sales before you allocate capital.`,
  },
  {
    question: `Who develops ${siteConfig.name}?`,
    answer: `${siteConfig.developer}, chaired by ${siteConfig.founder}, is the development counterparty for ${siteConfig.name}.

Reservations, staged payments, delivery notices, and after-sales escalation route through authorised ORA channels. Third parties quoting the compound are independent unless ORA accredits them—verify credentials before paying brokerage fees.`,
  },
] as const satisfies ReadonlyArray<{ readonly question: string; readonly answer: string }>;

export type SolanaWestFaqItem = (typeof solanaWestFaqCanonical)[number];
