/**
 * Art-direction layer — luxury sequencing, emotional hierarchy, and QC notes.
 * Does not replace pipeline/registry; curates *which* canonical assets anchor the story.
 */

import { solanaWestCanonicalFiles } from "@/data/media/solana-west";

/** Curated homepage hero order (primary marketing sequence). */
export const curatedHomepageHeroSequence = [
  {
    role: "primary" as const,
    path: solanaWestCanonicalFiles.heroDaylightCinematic,
    beat: "Arrival — wide daylight cinematic avenue; primary LCP + default OG.",
  },
  {
    role: "alternate-warmth" as const,
    path: solanaWestCanonicalFiles.heroDaylightSecondary,
    beat: "Optional swap if 01 reads flat — same chromatic family, greener mid-ground.",
  },
  {
    role: "water" as const,
    path: solanaWestCanonicalFiles.amenityPoolClub,
    beat: "Resort water / warmth chapter — use in secondary rails, not as first paint.",
  },
] as const;

export const curatedMobileHero = {
  src: solanaWestCanonicalFiles.heroDaylightMobile,
  narrative:
    "Portrait-safe 828w variant — tighter subject gravity; wired in LuxuryFillImage `mobileSrc`.",
} as const;

export const curatedOgImage = {
  path: solanaWestCanonicalFiles.ogSocialPreview,
  note: "Keeps parity with primary hero until a dedicated 1200×630 SEO frame exists under /seo/.",
} as const;

export const curatedCtaVisual = {
  path: solanaWestCanonicalFiles.ctaEmotional,
  note: "Pool warmth for conversion surfaces — matches Gulf luxury resort grammar.",
} as const;

/** Amenities triad: water → landscape → architecture (no duplicate hero frame). */
export const curatedAmenitiesTriad = [
  solanaWestCanonicalFiles.amenityPoolClub,
  solanaWestCanonicalFiles.amenityGreenery,
  solanaWestCanonicalFiles.amenityEditorialBeat,
] as const;

/** Sunset / night folders — populate with graded plates; pipeline routes filenames with cues. */
export const curatedAtmosphereTargets = {
  sunsetFolder: "/images/projects/solana-west/hero/sunset/",
  nightFolder: "/images/projects/solana-west/hero/night/",
  note: "Prioritize golden-hour greenery, long shadows on avenues, warm pool reflections.",
} as const;

/** Lifestyle-human: placement map (no new assets required — strategy for future drops). */
export const lifestyleHumanPlacement = {
  primarySections: ["trust → adjacent lifestyle rail", "amenities epilogue", "final CTA mood board"],
  guardrails: [
    "Silhouette / distance / movement — avoid stock grinning portraits.",
    "Dusk or backlit only — match ORA calm, not American stock grins.",
  ],
} as const;

export const investmentVisualStack = [
  solanaWestCanonicalFiles.investmentPositioning,
  solanaWestCanonicalFiles.aerialView,
  solanaWestCanonicalFiles.masterplanFull,
] as const;

/** Pre-migration loose hero filenames — resolved; raw sources archived under `public/raw-assets/solana-west-consumed-*`. */
export const removalCandidatesLooseHeroRoot = [] as const;
