/**
 * Solana West media module — canonical paths, ALT copy, and `next/image` slots.
 *
 * Import from `@/data/media/solana-west` (preferred). Legacy paths under `@/data/solana-west-*` were removed;
 * use this barrel for all new code.
 */

export {
  ORA_DEVELOPERS_ATTRIBUTION,
  SOLANA_WEST_IMAGE_BASE,
  solanaWestCanonicalFiles,
  solanaWestLegacyPaths,
} from "./cinematic-registry";

export {
  buildAltLine,
  solanaWestAlt,
  solanaWestCinematicCaptions,
} from "./image-copy";

export { solanaWestMedia, solanaWestOgImagePath } from "./slots";
