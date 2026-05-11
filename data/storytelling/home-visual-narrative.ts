import { solanaWestAlt, solanaWestCanonicalFiles } from "@/data/media/solana-west";

/**
 * Homepage full-bleed cinematic beats — editorial pacing, not a gallery.
 * Images: canonical registry paths; alts align with image SEO rules.
 */
export const HOME_VISUAL_BEATS = {
  aerial: {
    mood: "aerial" as const,
    image: {
      src: solanaWestCanonicalFiles.aerialView,
      alt: solanaWestAlt.aerial,
    },
    kicker: "Scale",
    caption: "Land holds the argument. Architecture answers in quiet lines.",
  },
  architecture: {
    mood: "architecture" as const,
    image: {
      src: solanaWestCanonicalFiles.heroDaylightSecondary,
      alt: solanaWestAlt.heroDaylight,
    },
    kicker: "Composition",
    caption: "Avenues and façades written as one continuous ground plane.",
  },
  lifestyle: {
    mood: "lifestyle" as const,
    image: {
      src: solanaWestCanonicalFiles.livingInterior,
      alt: solanaWestAlt.livingInterior,
    },
    kicker: "Interior calm",
    caption: "Light first. Proportion second. Ornament only where it earns its place.",
  },
  sunset: {
    mood: "sunset" as const,
    image: {
      src: solanaWestCanonicalFiles.ctaEmotional,
      alt: solanaWestAlt.ctaLifestyle,
    },
    kicker: "Golden hour",
    caption: "Water holds the sky. The plan keeps leisure inside the walk.",
  },
  /** Greenscape circulation — graded extract from current sales sheet hero (`lifestyleOutdoorCalm` registry path). */
  estateCirculation: {
    mood: "lifestyle" as const,
    image: {
      src: solanaWestCanonicalFiles.lifestyleOutdoorCalm,
      alt: solanaWestAlt.lifestyleOutdoorCalm,
    },
    kicker: "Circulation",
    caption: "Paths first. Cars at the edge. The estate sets its own pace.",
  },
  /** Façade × landscape detail — editorial beat (distinct from daylight hero plates). */
  facadeDetail: {
    mood: "architecture" as const,
    image: {
      src: solanaWestCanonicalFiles.amenityEditorialBeat,
      alt: solanaWestAlt.amenityEditorialArchitecture,
    },
    kicker: "Grain",
    caption: "Stone meets planting at human scale—quiet craft, not billboard gloss.",
  },
} as const;

export type HomeVisualBeat = (typeof HOME_VISUAL_BEATS)[keyof typeof HOME_VISUAL_BEATS];
