/**
 * ALT + editorial caption system for Solana West cinematic assets.
 * Formula: [Project] + [scene] + [geography] + [Developer] (see workspace SEO rules).
 */

import { siteConfig } from "@/data/site";

const PROJECT = siteConfig.name;
const SHORT = siteConfig.shortName;
const DEV = siteConfig.developer;
const WEST = "West Cairo";
const NZ = "New Zayed";

export const solanaWestAlt = {
  heroDaylight:
    `Cinematic landscaped avenues at ${SHORT} ${NZ} ${WEST} by ${DEV}.`,
  heroSunset: `Dusk-lit master-planned avenue and architecture at ${SHORT} ${NZ} ${WEST} by ${DEV}.`,
  heroNight: `Night blue-hour façade and landscaped lighting at ${SHORT} ${NZ} by ${DEV}.`,
  villaExterior: `Luxury villa exterior architecture at ${SHORT} ${NZ}, ${WEST}.`,
  amenityPool: `Clubhouse and pool amenity at ${SHORT} ${NZ} by ${DEV}.`,
  amenityGreenery: `Park and landscaping within ${SHORT} compound, ${NZ}.`,
  lifestyleOutdoorCalm: `Walkable greenery and landscaped circulation at ${SHORT} ${NZ} by ${DEV}.`,
  amenityEditorialArchitecture:
    `Contemporary residential architecture and landscaped avenues at ${SHORT} ${NZ}, ${WEST} — ${DEV}.`,
  masterplan: `${PROJECT} master plan overview — ${NZ} master-planned community by ${DEV}.`,
  connectivityMap: `${SHORT} location map — ${NZ}, ${WEST} connectivity context by ${DEV}.`,
  livingInterior: `Interior living room design at ${SHORT} ${NZ} by ${DEV}.`,
  aerial: `Bird’s-eye master plan scale and low-density planning context for ${SHORT} ${NZ}, ${WEST} — ${DEV}.`,
  investment:
    `West Cairo growth context and architectural scale — ${SHORT} ${NZ} positioning for informed investors, ${DEV}.`,
  ctaLifestyle: `Resort-inspired amenity atmosphere at ${SHORT} by ${DEV}.`,
  ogDefault: `Luxury residential community ${SHORT} ${NZ} — ${DEV}.`,
  ogLuxuryWide: `${PROJECT} New Zayed — architectural master plan and greenery, investor preview image — ${DEV}.`,
} as const;

export const solanaWestCinematicCaptions = {
  heroPrivateRealm: `A private residential atmosphere surrounded by greenery in ${NZ}.`,
  heroContemporary: `Contemporary luxury villas designed for premium living in ${WEST}.`,
  resortLifestyle: `Resort-inspired lifestyle experiences at ${SHORT} by ${DEV}.`,
  investorGrid: `Low-density master planning calibrated for investor-grade diligence in ${NZ}.`,
  connectivityEditorial: `Arterial access to ${WEST} anchors — Alexandria Desert Road and the Middle Ring Road.`,
} as const;

export function buildAltLine(opts: {
  scene: string;
  geography?: string;
  withDeveloper?: boolean;
}): string {
  const geo = opts.geography ?? `${NZ}, ${WEST}`;
  const dev = opts.withDeveloper === false ? "" : ` by ${DEV}.`;
  return `${PROJECT} ${opts.scene} in ${geo}${dev}`.replace(/\s+/g, " ").trim();
}
