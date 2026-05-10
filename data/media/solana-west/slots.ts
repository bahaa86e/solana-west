/**
 * Public asset slots for Solana West — consumed with `next/image`.
 * Paths: `./cinematic-registry` · ALT strings: `./image-copy`.
 */

import { solanaWestAlt } from "./image-copy";
import { solanaWestCanonicalFiles } from "./cinematic-registry";

export const solanaWestMedia = {
  hero: {
    src: solanaWestCanonicalFiles.heroDaylightCinematic,
    alt: solanaWestAlt.heroDaylight,
  },
  developer: {
    src: solanaWestCanonicalFiles.villaStandaloneExterior,
    alt: solanaWestAlt.villaExterior,
  },
  amenities: [
    {
      src: solanaWestCanonicalFiles.amenityPoolClub,
      alt: solanaWestAlt.amenityPool,
    },
    {
      src: solanaWestCanonicalFiles.amenityGreenery,
      alt: solanaWestAlt.amenityGreenery,
    },
    {
      src: solanaWestCanonicalFiles.amenityEditorialBeat,
      alt: solanaWestAlt.amenityEditorialArchitecture,
    },
  ],
  masterplan: {
    src: solanaWestCanonicalFiles.masterplanFull,
    alt: solanaWestAlt.masterplan,
  },
  locationMap: {
    src: solanaWestCanonicalFiles.mapConnectivity,
    alt: solanaWestAlt.connectivityMap,
  },
  investment: {
    src: solanaWestCanonicalFiles.investmentPositioning,
    alt: solanaWestAlt.investment,
  },
} as const;

/** Default OG / Twitter preview — campaign 1200×630 (`seo/og-social-preview.webp`) */
export const solanaWestOgImagePath = solanaWestCanonicalFiles.ogSocialPreview;
