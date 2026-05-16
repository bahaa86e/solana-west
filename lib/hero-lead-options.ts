/** Hero enquiry unit typologies — validated on `form_surface=hero_enquiry` only. */

export const HERO_LEAD_UNIT_OPTIONS = [
  "Apartment",
  "Villa",
  "Townhouse",
  "Twin House",
  "Penthouse",
  "Duplex",
] as const;

export type HeroLeadUnitOption = (typeof HERO_LEAD_UNIT_OPTIONS)[number];

export const HERO_LEAD_PROJECT_OPTIONS = [
  "Solana West New Zayed",
  "Solana East New Cairo",
  "ZED West",
  "ZED East",
  "Silversands North Coast",
] as const;

export type HeroLeadProjectOption = (typeof HERO_LEAD_PROJECT_OPTIONS)[number];

export const HERO_ENQUIRY_FORM_SURFACE = "hero_enquiry" as const;

export function isValidHeroLeadUnit(value: string): value is HeroLeadUnitOption {
  return (HERO_LEAD_UNIT_OPTIONS as readonly string[]).includes(value);
}

export function isValidHeroLeadProject(value: string): value is HeroLeadProjectOption {
  return (HERO_LEAD_PROJECT_OPTIONS as readonly string[]).includes(value);
}
