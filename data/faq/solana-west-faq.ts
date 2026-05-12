import { SOLANA_WEST_FAQ_EXPANDED_ITEMS } from "@/data/faq/solana-west-faq-expanded";

/**
 * Canonical Solana West FAQ — hub previews index the first six entries (prices, payment, delivery, location, typology, ORA).
 * Full 100-item expansion + JSON-LD: see `SOLANA_WEST_FAQ_EXPANDED_ITEMS` and `/faq`.
 */

export const SOLANA_WEST_FAQ_SHARED_INTRO =
  "Clear answers for serious buyers. Use these facts to orient your search, then confirm prices, availability, and payment terms against the latest sales documents before reserving.";

const expanded = SOLANA_WEST_FAQ_EXPANDED_ITEMS;

function solanaWestFaqPairAt(index: 0 | 1 | 2 | 3 | 4 | 5): { readonly question: string; readonly answer: string } {
  const item = expanded[index];
  if (!item) {
    throw new Error("Solana West FAQ expanded data missing first six canonical entries.");
  }
  return { question: item.question, answer: item.answer };
}

export const solanaWestFaqCanonical = [
  solanaWestFaqPairAt(0),
  solanaWestFaqPairAt(1),
  solanaWestFaqPairAt(2),
  solanaWestFaqPairAt(3),
  solanaWestFaqPairAt(4),
  solanaWestFaqPairAt(5),
] as const satisfies ReadonlyArray<{ readonly question: string; readonly answer: string }>;

export type SolanaWestFaqItem = (typeof solanaWestFaqCanonical)[number];
