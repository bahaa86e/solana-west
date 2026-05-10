/**
 * Premium campaign — derives graded WebPs from canonical daylight hero `…hero-daylight-cinematic-01.webp`.
 * Same plate — grading, sharpening, extracts, OG crop only (no invented geometry).
 *
 * Run after:
 *   node scripts/solana-west-bootstrap-master-source.mjs
 *   npm run media:pipeline:prod
 *
 * Override source:
 *   node scripts/solana-west-premium-campaign.mjs --hero=./relative/or/absolute.webp
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const PUBLIC = path.join(root, "public");

const DAYLIGHT_WEBP = ["images", "projects", "solana-west", "hero", "daylight", "solana-west-new-zayed-hero-daylight-cinematic-01.webp"];

const args = process.argv.slice(2);
const heroFlag = args.find((a) => a.startsWith("--hero="));
const heroOverride =
  heroFlag?.split("=", 2)[1]?.trim().replace(/^["']|["']$/gu, "");

function absPublic(parts) {
  return path.join(PUBLIC, ...parts);
}

/**
 * @param {import("sharp").Sharp} s
 */
function sunsetPipe(s) {
  return s
    .clone()
    .rotate()
    .resize({ width: 2400, withoutEnlargement: true })
    .modulate({ brightness: 0.93, saturation: 1.1, hue: -2 })
    .gamma(1.06)
    .linear(1.02, -2.5)
    .webp({ quality: 90, effort: 6, smartSubsample: true });
}

/**
 * @param {import("sharp").Sharp} s
 */
function nightPipe(s) {
  return s
    .clone()
    .rotate()
    .resize({ width: 2400, withoutEnlargement: true })
    .modulate({ brightness: 0.55, saturation: 0.78 })
    .gamma(1.18)
    .linear(1.06, 6)
    .sharpen({ sigma: 0.65, flat: 1, jagged: 2 })
    .webp({ quality: 89, effort: 6, smartSubsample: true });
}

/**
 * @param {import("sharp").Sharp} s
 * @param {number} w
 * @param {number} h
 */
function lifestyleHumanPipe(s, w, h) {
  const left = Math.max(0, Math.round(w * 0.06));
  const width = Math.min(w - left, Math.round(w * 0.87));
  const top = Math.max(0, Math.round(h * 0.38));
  const height = Math.min(h - top, Math.round(h * 0.52));
  return s
    .clone()
    .rotate()
    .extract({ left, top, width, height })
    .resize({ width: 2400, withoutEnlargement: true })
    .modulate({ brightness: 0.96, saturation: 1.05 })
    .gamma(1.04)
    .sharpen({ sigma: 0.55, flat: 1, jagged: 2 })
    .webp({ quality: 90, effort: 6, smartSubsample: true });
}

/**
 * @param {import("sharp").Sharp} s
 */
function investmentPipe(s) {
  return s
    .clone()
    .rotate()
    .resize({ width: 2400, withoutEnlargement: true })
    .linear(1.048, -7)
    .modulate({ saturation: 0.95 })
    .gamma(1.02)
    .sharpen({ sigma: 0.85, flat: 1, jagged: 2 })
    .webp({ quality: 90, effort: 6, smartSubsample: true });
}

async function main() {
  const sharp = (await import("sharp")).default;

  const heroDefaultPath = absPublic(DAYLIGHT_WEBP);

  let buffer;
  if (heroOverride) {
    const p = path.isAbsolute(heroOverride) ? heroOverride : path.join(process.cwd(), heroOverride);
    if (!fs.existsSync(p)) {
      console.error(`--hero file not found: ${p}`);
      process.exit(1);
    }
    buffer = fs.readFileSync(p);
  } else if (fs.existsSync(heroDefaultPath)) {
    buffer = fs.readFileSync(heroDefaultPath);
  } else {
    console.error(
      `Missing daylight hero at ${path.relative(root, heroDefaultPath)}\n` +
        "Run: node scripts/solana-west-bootstrap-master-source.mjs && npm run media:pipeline:prod",
    );
    process.exit(1);
  }

  const meta = await sharp(buffer).metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;

  /** @type {string[]} */
  const outputsWeb = [];

  const sunsetPath = [
    "images",
    "projects",
    "solana-west",
    "hero",
    "sunset",
    "solana-west-new-zayed-hero-sunset-cinematic-01.webp",
  ];
  fs.mkdirSync(path.dirname(absPublic(sunsetPath)), { recursive: true });
  await sunsetPipe(sharp(buffer)).toFile(absPublic(sunsetPath));
  outputsWeb.push("/" + sunsetPath.join("/"));

  const nightPath = [
    "images",
    "projects",
    "solana-west",
    "hero",
    "night",
    "solana-west-new-zayed-hero-night-cinematic-01.webp",
  ];
  await nightPipe(sharp(buffer)).toFile(absPublic(nightPath));
  outputsWeb.push("/" + nightPath.join("/"));

  await sharp(fs.readFileSync(absPublic(sunsetPath)))
    .resize({ width: 828, withoutEnlargement: true })
    .webp({ quality: 86, effort: 5 })
    .toFile(
      absPublic([
        "images",
        "projects",
        "solana-west",
        "hero",
        "sunset",
        "solana-west-new-zayed-hero-sunset-cinematic-01-mobile.webp",
      ]),
    );
  outputsWeb.push(
    "/images/projects/solana-west/hero/sunset/solana-west-new-zayed-hero-sunset-cinematic-01-mobile.webp",
  );

  await sharp(fs.readFileSync(absPublic(nightPath)))
    .resize({ width: 828, withoutEnlargement: true })
    .webp({ quality: 86, effort: 5 })
    .toFile(
      absPublic([
        "images",
        "projects",
        "solana-west",
        "hero",
        "night",
        "solana-west-new-zayed-hero-night-cinematic-01-mobile.webp",
      ]),
    );
  outputsWeb.push(
    "/images/projects/solana-west/hero/night/solana-west-new-zayed-hero-night-cinematic-01-mobile.webp",
  );

  const lifePath = [
    "images",
    "projects",
    "solana-west",
    "lifestyle-human",
    "solana-west-new-zayed-outdoor-circulation-calm-01.webp",
  ];
  await lifestyleHumanPipe(sharp(buffer), w, h).toFile(absPublic(lifePath));
  outputsWeb.push("/" + lifePath.join("/"));

  const invPath = [
    "images",
    "projects",
    "solana-west",
    "investment",
    "solana-west-new-zayed-investment-positioning-01.webp",
  ];
  await investmentPipe(sharp(buffer)).toFile(absPublic(invPath));
  outputsWeb.push("/" + invPath.join("/"));

  const ogCover = sharp(buffer)
    .rotate()
    .resize(1200, 630, { fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: 90, effort: 6, smartSubsample: true });

  await ogCover.clone().toFile(absPublic(["images", "projects", "solana-west", "seo", "og-social-preview.webp"]));
  outputsWeb.push("/images/projects/solana-west/seo/og-social-preview.webp");

  await ogCover
    .clone()
    .toFile(absPublic(["images", "projects", "solana-west", "seo", "solana-west-new-zayed-og-luxury-share-1200x630-01.webp"]));
  outputsWeb.push("/images/projects/solana-west/seo/solana-west-new-zayed-og-luxury-share-1200x630-01.webp");

  const reportJson = path.join(root, "docs", "image-premium-campaign-last-run.json");
  fs.mkdirSync(path.dirname(reportJson), { recursive: true });
  fs.writeFileSync(
    reportJson,
    JSON.stringify({ generatedAt: new Date().toISOString(), sourcePixels: [w, h], outputs: [...outputsWeb].sort() }, null, 2),
    "utf8",
  );

  console.log(`OK: premium campaign (${outputsWeb.length} files). See docs/image-premium-campaign-last-run.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
