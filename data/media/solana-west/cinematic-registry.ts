/**
 * Public root for Solana West cinematic tree.
 * Art direction: `docs/LUXURY-IMAGE-CAMPAIGN-DIRECTIVE.md`
 * Enhancement bounds (preserve project truth): `docs/IMAGE-ENHANCEMENT-RULES.md`
 */
export const SOLANA_WEST_IMAGE_BASE = "/images/projects/solana-west" as const;

/** Developer attribution suffix for ALT consistency (schema + SEO rules) */
export const ORA_DEVELOPERS_ATTRIBUTION = "by ORA Developers Egypt" as const;

/**
 * Canonical slot filenames (01 series) — keep aligned with pipeline output when ingesting legacy names.
 * After `npm run media:pipeline`, adjust numbering if your batch increments differ.
 */
export const solanaWestCanonicalFiles = {
  /** Primary wide hero — browser / OG default (variants sit beside: *-desktop.webp / *-mobile.webp) */
  heroDaylightCinematic: `${SOLANA_WEST_IMAGE_BASE}/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01.webp`,
  heroDaylightDesktop: `${SOLANA_WEST_IMAGE_BASE}/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01-desktop.webp`,
  heroDaylightMobile: `${SOLANA_WEST_IMAGE_BASE}/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01-mobile.webp`,
  /** Dusk band — warmer sky continuity, restrained artificial glow only where photo supports it */
  heroSunsetCinematic: `${SOLANA_WEST_IMAGE_BASE}/hero/sunset/solana-west-new-zayed-hero-sunset-cinematic-01.webp`,
  heroSunsetMobile: `${SOLANA_WEST_IMAGE_BASE}/hero/sunset/solana-west-new-zayed-hero-sunset-cinematic-01-mobile.webp`,
  /** Blue-hour / night identity — lantern pools, façade graze light, no carnival RGB */
  heroNightCinematic: `${SOLANA_WEST_IMAGE_BASE}/hero/night/solana-west-new-zayed-hero-night-cinematic-01.webp`,
  heroNightMobile: `${SOLANA_WEST_IMAGE_BASE}/hero/night/solana-west-new-zayed-hero-night-cinematic-01-mobile.webp`,
  /** Primary 1200×630 social / SERP share (short Ops filename; byte match also written under legacy slug by premium script) */
  seoOgLuxuryWide: `${SOLANA_WEST_IMAGE_BASE}/seo/og-social-preview.webp`,
  /** Duplicate legacy slug — populated by `solana-west-premium-campaign.mjs` for external bookmarks */
  seoOgLuxuryWideLegacyFilename: `${SOLANA_WEST_IMAGE_BASE}/seo/solana-west-new-zayed-og-luxury-share-1200x630-01.webp`,
  /** Blog / editorial thumbs — restrained contrast for small tiles */
  blogEditorialFeatured: `${SOLANA_WEST_IMAGE_BASE}/blog/solana-west-new-zayed-blog-editorial-hero-01.webp`,
  villaStandaloneExterior: `${SOLANA_WEST_IMAGE_BASE}/villas/standalone/solana-west-new-zayed-standalone-villa-exterior-01.webp`,
  /** Classifier routed pool renders here (clubhouse+pool filenames often land in pools/) */
  amenityPoolClub: `${SOLANA_WEST_IMAGE_BASE}/amenities/pools/solana-west-new-zayed-resort-pool-01.webp`,
  amenityGreenery: `${SOLANA_WEST_IMAGE_BASE}/amenities/greenery/solana-west-new-zayed-park-landscape-01.webp`,
  /** Editorial architecture beat — avoids repeating hero daylight in the amenities triad */
  amenityEditorialBeat: `${SOLANA_WEST_IMAGE_BASE}/featured/solana-west-new-zayed-editorial-visual-03.webp`,
  heroDaylightSecondary: `${SOLANA_WEST_IMAGE_BASE}/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-02.webp`,
  masterplanFull: `${SOLANA_WEST_IMAGE_BASE}/masterplan/full/solana-west-new-zayed-masterplan-full-01.webp`,
  mapConnectivity: `${SOLANA_WEST_IMAGE_BASE}/maps/connectivity/solana-west-new-zayed-connectivity-map-01.webp`,
  livingInterior: `${SOLANA_WEST_IMAGE_BASE}/interiors/living-room/solana-west-new-zayed-living-room-interior-01.webp`,
  /** Open Graph / Twitter default when route does not override — 1200×630 campaign crop */
  ogSocialPreview: `${SOLANA_WEST_IMAGE_BASE}/seo/og-social-preview.webp`,
  /** Evening-graded pool plate for conversion surfaces (tonal-only derivative of resort pool). */
  ctaEmotional: `${SOLANA_WEST_IMAGE_BASE}/cta/solana-west-new-zayed-cta-pool-evening-atmosphere-01.webp`,
  /** Investor-grade skyline / scale — graded hero-wide plate in `investment/` slot */
  investmentPositioning: `${SOLANA_WEST_IMAGE_BASE}/investment/solana-west-new-zayed-investment-positioning-01.webp`,
  /** Masterplan board used as bird’s-eye scale anchor (no geometry change). */
  aerialView: `${SOLANA_WEST_IMAGE_BASE}/aerial/solana-west-new-zayed-masterplan-aerial-01.webp`,
  /** Outdoor circulation / estate pace — sales desk plates only (no staged talent). */
  lifestyleOutdoorCalm: `${SOLANA_WEST_IMAGE_BASE}/lifestyle-human/solana-west-new-zayed-outdoor-circulation-calm-01.webp`,
} as const;

/**
 * Legacy slot names — aliased to post-migration canonical files (same public URLs no longer exist).
 * Use for bookmarks, external links audits, and regressions; do not add new consumers.
 */
export const solanaWestLegacyPaths = {
  heroLandscape: solanaWestCanonicalFiles.heroDaylightCinematic,
  villaLegacy: solanaWestCanonicalFiles.villaStandaloneExterior,
  clubhousePool: solanaWestCanonicalFiles.amenityPoolClub,
  parkView: solanaWestCanonicalFiles.amenityGreenery,
  c06Landscape: solanaWestCanonicalFiles.heroDaylightSecondary,
  masterplanSf: solanaWestCanonicalFiles.masterplanFull,
  locationMap: solanaWestCanonicalFiles.mapConnectivity,
  interiorBType: solanaWestCanonicalFiles.livingInterior,
} as const;
