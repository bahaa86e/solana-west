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
  /** Villa architecture — hubs & ORA-facing articles retain an elevation anchor */
  developer: {
    src: solanaWestCanonicalFiles.villaStandaloneExterior,
    alt: solanaWestAlt.villaExterior,
  },
  /** Trust / storytelling — greenery & circulation vs repeating villa elevations */
  trustAnchor: {
    src: solanaWestCanonicalFiles.lifestyleOutdoorCalm,
    alt: solanaWestAlt.lifestyleOutdoorCalm,
  },
  /** Project overview rail — daylight composition alternative to hero 01 */
  projectOverview: {
    src: solanaWestCanonicalFiles.heroDaylightSecondary,
    alt: solanaWestAlt.heroDaylight,
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
  /** Cinematic geography mood — replaces brochure map in primary location UI */
  locationAtmosphere: {
    src: solanaWestCanonicalFiles.heroSunsetCinematic,
    mobileSrc: solanaWestCanonicalFiles.heroSunsetMobile,
    alt: solanaWestAlt.locationStrategic,
  },
  locationMap: {
    src: solanaWestCanonicalFiles.mapConnectivity,
    alt: solanaWestAlt.connectivityMap,
  },
  investment: {
    src: solanaWestCanonicalFiles.investmentPositioning,
    alt: solanaWestAlt.investment,
  },
  /** Long-form payment block — single architectural breath */
  paymentRibbon: {
    src: solanaWestCanonicalFiles.amenityEditorialBeat,
    alt: solanaWestAlt.amenityEditorialArchitecture,
  },
  /** Property typology grid — estate scale without another façade close-up */
  propertyTypesRibbon: {
    src: solanaWestCanonicalFiles.aerialView,
    alt: solanaWestAlt.aerial,
  },
} as const;

/** Default OG / Twitter preview — campaign 1200×630 (`seo/og-social-preview.webp`) */
export const solanaWestOgImagePath = solanaWestCanonicalFiles.ogSocialPreview;
