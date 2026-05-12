/** Grouping labels for UX + editorial silos — order for `/faq` rendering. */
export const SOLANA_WEST_FAQ_SECTION_ORDER = [
  "prices",
  "payment_plans",
  "location",
  "ora_developers",
  "apartments",
  "townhouses",
  "villas",
  "master_plan",
  "amenities",
  "lifestyle",
  "investment",
  "buying_process",
  "delivery",
  "comparisons",
] as const;

export type SolanaWestFaqSectionId = (typeof SOLANA_WEST_FAQ_SECTION_ORDER)[number];

export const SOLANA_WEST_FAQ_SECTION_LABELS: Record<SolanaWestFaqSectionId, string> = {
  prices: "Prices & starting price",
  payment_plans: "Payment plans & installments",
  location: "Location & connectivity",
  ora_developers: "ORA Developers Egypt",
  apartments: "Apartments",
  townhouses: "Townhouses",
  villas: "Villas & twin houses",
  master_plan: "Master plan & community",
  amenities: "Amenities & facilities",
  lifestyle: "Lifestyle",
  investment: "Investment view",
  buying_process: "Buying & reservation",
  delivery: "Delivery date",
  comparisons: "Comparisons",
};

/**
 * Suggested `about` discriminator for Answer/Question extensions (FAQPage-safe text remains in `answer`).
 * Use for QA CSV exports and future Offer/Place JSON-LD cross-wiring — not injected as fake schema nodes.
 */
export type SolanaWestFaqSchemaHint =
  | "PriceSpecification"
  | "PaymentChargesSpecification"
  | "Place"
  | "Organization"
  | "Accommodation"
  | "InvestmentOrDeposit"
  | "FAQPage"

export type FaqPrimaryIntent =
  | "transactional_price"
  | "transactional_finance"
  | "navigational_local"
  | "commercial_investigation"
  | "unit_selection"
  | "process_authority"
  | "risk_governance";

export type SolanaWestFaqExpandedItem = {
  section: SolanaWestFaqSectionId;
  question: string;
  /** Rich on-page / JSON-L-D answer — `\n\n` splits paragraphs (`FaqAnswerParagraphs`). */
  answer: string;
  /** 1–2 sentences for snippets, AI summaries, voice. */
  aiSnippet: string;
  internalLink: { href: string; label: string };
  primaryIntent: FaqPrimaryIntent;
  schemaHint: SolanaWestFaqSchemaHint;
};
