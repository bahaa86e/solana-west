import type { LeadInterestOption } from "@/lib/lead-interest-options";

/** Readable Arabic labels — option `value` stays English-canonical for server validation */
export const leadInterestArabicDisplay: Record<LeadInterestOption, string> = {
  Apartments: "شقق",
  Townhouses: "تاون هاوس",
  "Twin Houses": "توين هاوس",
  "Standalone Villas": "فيلات مستقلة",
};
