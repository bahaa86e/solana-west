/**
 * Focal bias for `LuxuryFillImage` — only `object-position` / centering tokens
 * (paired with `object-cover` or `object-contain` from the component).
 */
export const luxuryImageCrops = {
  editorialCenter: "object-[center_46%]",
  editorialHigh: "object-[center_42%]",
  editorialWideLow: "object-[center_58%]",
  greenerySubject: "object-[center_52%]",
  cardThumb: "object-[center_48%]",
  mapCalm: "object-center",
  interiorWarm: "object-[center_45%]",
  /** Dusk / golden-hour plates — bias sky & horizon legibility */
  horizonGolden: "object-[center_38%] max-lg:object-[center_44%]",
} as const;

export type LuxuryImageCrop = keyof typeof luxuryImageCrops;
