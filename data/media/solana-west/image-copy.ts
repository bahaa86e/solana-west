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
  villaExterior: `Solana West Villas exterior in New Zayed by ${DEV}.`,
  amenityPool: `Clubhouse and pool amenity at ${SHORT} ${NZ} by ${DEV}.`,
  amenityGreenery: `Park and landscaping within ${SHORT} compound, ${NZ}.`,
  lifestyleOutdoorCalm: `Walkable greenery and outdoor lifestyle at ${SHORT} ${NZ} by ${DEV}.`,
  amenityEditorialArchitecture:
    `Contemporary residential architecture and landscaped avenues at ${SHORT} ${NZ}, ${WEST} — ${DEV}.`,
  masterplan: `${PROJECT} master plan overview in ${NZ} by ${DEV}.`,
  connectivityMap: `${SHORT} location map for ${NZ}, ${WEST} by ${DEV}.`,
  /** Full-bleed location narrative — cinematic mood, not cartography */
  locationStrategic: `${SHORT} location near Dabaa Corridor, Sphinx Airport, and ${WEST} by ${DEV}.`,
  livingInterior: `Interior living room design at ${SHORT} ${NZ} by ${DEV}.`,
  aerial: `Bird's-eye view of ${SHORT} master plan and low-density greenery in ${NZ} by ${DEV}.`,
  investment:
    `${SHORT} ${NZ} investment view with West Cairo growth and ORA architecture by ${DEV}.`,
  ctaLifestyle: `Resort-inspired amenity atmosphere at ${SHORT} by ${DEV}.`,
  ogDefault: `Luxury residential community ${SHORT} ${NZ} — ${DEV}.`,
  ogLuxuryWide: `${PROJECT} — New Zayed luxury homes, master plan, and greenery by ${DEV}.`,
} as const;

export const solanaWestCinematicCaptions = {
  heroPrivateRealm: `A private residential atmosphere surrounded by greenery in ${NZ}.`,
  heroContemporary: `Contemporary luxury villas designed for premium living in ${WEST}.`,
  resortLifestyle: `Resort-inspired lifestyle experiences at ${SHORT} by ${DEV}.`,
  investorGrid: `Low-density master planning for luxury real estate buyers in ${NZ}.`,
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
