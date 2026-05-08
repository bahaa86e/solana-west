/** Canonical “Interested In” values — mirrored in webhook + server validation only. */

export const LEAD_INTEREST_OPTIONS = [
  "Apartments",
  "Townhouses",
  "Twin Houses",
  "Standalone Villas",
] as const;

export type LeadInterestOption = (typeof LEAD_INTEREST_OPTIONS)[number];

export function isValidLeadInterest(value: string): value is LeadInterestOption {
  return (LEAD_INTEREST_OPTIONS as readonly string[]).includes(value);
}
