/**
 * Verifies canonical paths (see `data/media/solana-west/cinematic-registry.ts`) exist after pipeline run.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicRoot = path.join(root, "public");

const requiredPaths = [
  "/images/projects/solana-west/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01.webp",
  "/images/projects/solana-west/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01-desktop.webp",
  "/images/projects/solana-west/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01-mobile.webp",
  "/images/projects/solana-west/villas/standalone/solana-west-new-zayed-standalone-villa-exterior-01.webp",
  "/images/projects/solana-west/amenities/pools/solana-west-new-zayed-resort-pool-01.webp",
  "/images/projects/solana-west/amenities/greenery/solana-west-new-zayed-park-landscape-01.webp",
  "/images/projects/solana-west/featured/solana-west-new-zayed-editorial-visual-03.webp",
  "/images/projects/solana-west/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-02.webp",
  "/images/projects/solana-west/masterplan/full/solana-west-new-zayed-masterplan-full-01.webp",
  "/images/projects/solana-west/aerial/solana-west-new-zayed-masterplan-aerial-01.webp",
  "/images/projects/solana-west/maps/connectivity/solana-west-new-zayed-connectivity-map-01.webp",
  "/images/projects/solana-west/interiors/living-room/solana-west-new-zayed-living-room-interior-01.webp",
  "/images/projects/solana-west/featured/solana-west-new-zayed-editorial-visual-02.webp",
  "/images/projects/solana-west/cta/solana-west-new-zayed-cta-pool-evening-atmosphere-01.webp",
  "/images/projects/solana-west/seo/og-social-preview.webp",
  "/images/projects/solana-west/seo/solana-west-new-zayed-og-luxury-share-1200x630-01.webp",
  "/images/projects/solana-west/blog/solana-west-new-zayed-blog-editorial-hero-01.webp",
  "/images/projects/solana-west/lifestyle-human/solana-west-new-zayed-outdoor-circulation-calm-01.webp",
  "/images/projects/solana-west/investment/solana-west-new-zayed-investment-positioning-01.webp",
];

/** Derived atmosphere plates — regenerate via `solana-west-premium-campaign.mjs` if missing */
const optionalPaths = [
  "/images/projects/solana-west/hero/sunset/solana-west-new-zayed-hero-sunset-cinematic-01.webp",
  "/images/projects/solana-west/hero/sunset/solana-west-new-zayed-hero-sunset-cinematic-01-mobile.webp",
  "/images/projects/solana-west/hero/night/solana-west-new-zayed-hero-night-cinematic-01.webp",
  "/images/projects/solana-west/hero/night/solana-west-new-zayed-hero-night-cinematic-01-mobile.webp",
];

let missing = [];
for (const p of requiredPaths) {
  const disk = path.join(publicRoot, p.replace(/^\//, ""));
  if (!fs.existsSync(disk)) missing.push(p);
}

if (missing.length) {
  console.error("Missing canonical assets:\n" + missing.join("\n"));
  process.exit(1);
}

let optionalMissing = [];
for (const p of optionalPaths) {
  const disk = path.join(publicRoot, p.replace(/^\//, ""));
  if (!fs.existsSync(disk)) optionalMissing.push(p);
}

if (optionalMissing.length) {
  console.warn(
    "Optional campaign assets not yet on disk (non-fatal):\n" + optionalMissing.join("\n"),
  );
}
console.log("OK: all " + requiredPaths.length + " required registry paths exist.");
process.exit(0);
