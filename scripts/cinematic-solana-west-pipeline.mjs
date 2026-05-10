/**
 * Non-destructive cinematic migration pipeline.
 * - Reads: public/raw-assets/solana-west/** (recursive)
 * - Writes: public/images/projects/solana-west-staging/ (default)
 * - Never deletes raw assets. Production writes require --production.
 *
 * Usage:
 *   node scripts/cinematic-solana-west-pipeline.mjs
 *   node scripts/cinematic-solana-west-pipeline.mjs --production   # writes to solana-west/ (still no deletes)
 *   node scripts/cinematic-solana-west-pipeline.mjs --dry-run
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** @type {import("sharp") | null} */
let sharp = null;

const RAW = path.join(root, "public", "raw-assets", "solana-west");
const OUT_STAGING = path.join(root, "public", "images", "projects", "solana-west-staging");
const OUT_PROD = path.join(root, "public", "images", "projects", "solana-west");

const IMG_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".bmp", ".gif"]);

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const useProduction = args.includes("--production");
const outRoot = useProduction ? OUT_PROD : OUT_STAGING;

/** @typedef {{ relTarget: string, descriptor: string, tags: string[] }} Classification */

/**
 * @param {string} fullPath
 * @param {string} relFromRaw
 * @returns {Classification}
 */
function classifyPath(fullPath, relFromRaw) {
  const base = path.basename(fullPath).toLowerCase();
  const joined = `${relFromRaw}/${base}`.toLowerCase().replace(/\\/g, "/");

  const tags = [];
  if (/sunset|sunrise|golden|dusk|twilight/i.test(joined)) tags.push("sunset");
  if (/night|evening|blue\s*hour/i.test(joined)) tags.push("night");
  if (/daylight|day|morning|noon/i.test(joined)) tags.push("daylight");
  if (/aerial|drone|bird|orbit/i.test(joined)) tags.push("aerial");
  if (/map|location|road|connect|sphinx|mehwar|dahshour/i.test(joined)) tags.push("map");
  if (/master|masterplan|zoning|district/i.test(joined)) tags.push("masterplan");
  if (/pool|club|spa|gym|sport|green|park|kids|wellness|commercial/i.test(joined)) tags.push("amenity");
  if (/interior|living|kitchen|bath|bed|dining|terrace/i.test(joined)) tags.push("interior");
  if (/villa|twin|town|apartment|penthouse|duplex/i.test(joined)) tags.push("dwelling");

  /** @type {Classification} */
  let c = { relTarget: "featured", descriptor: "editorial-visual", tags };

  if (tags.includes("aerial") || /aerial|drone/i.test(joined)) {
    c = { relTarget: "aerial", descriptor: "aerial-view", tags };
  } else if (/master|masterplan|sf-master|sf_master/i.test(joined)) {
    if (/zoning/i.test(joined)) c = { relTarget: "masterplan/zoning", descriptor: "zoning-plate", tags };
    else if (/district/i.test(joined)) c = { relTarget: "masterplan/districts", descriptor: "districts-overview", tags };
    else if (/annotat|legend|label/i.test(joined)) c = { relTarget: "masterplan/annotated", descriptor: "annotated-masterplan", tags };
    else c = { relTarget: "masterplan/full", descriptor: "masterplan-full", tags };
  } else if (/map|location-map|connectivity|sphinx|mehwar/i.test(joined)) {
    if (/travel|minute|time/i.test(joined)) c = { relTarget: "maps/travel-times", descriptor: "travel-times-map", tags };
    else if (/road|ring|arter|highway/i.test(joined)) c = { relTarget: "maps/roads", descriptor: "roads-map", tags };
    else if (/landmark|airport|mall|arabia/i.test(joined)) c = { relTarget: "maps/landmarks", descriptor: "landmarks-map", tags };
    else c = { relTarget: "maps/connectivity", descriptor: "connectivity-map", tags };
  } else if (/invest|skyline|growth|capital/i.test(joined)) {
    c = { relTarget: "investment", descriptor: "investment-positioning", tags };
  } else if (/folder|^cta\/|\/cta\//i.test(relFromRaw) || /(^|\/)(cta)[_.-]/i.test(joined)) {
    c = { relTarget: "cta", descriptor: "emotional-conversion", tags };
  } else if (/lifestyle-human|\/people|\/residents/i.test(joined) || /lifestyle-human/i.test(relFromRaw)) {
    c = { relTarget: "lifestyle-human", descriptor: "lifestyle-human", tags };
  } else if (/lifestyle/i.test(joined) || /lifestyle/i.test(relFromRaw)) {
    c = { relTarget: "lifestyle", descriptor: "luxury-lifestyle", tags };
  } else if (/clubhouse|club-house/i.test(joined)) {
    c = { relTarget: "amenities/clubhouse", descriptor: "clubhouse-pool", tags };
  } else if (/pool|lagoon|aqua/i.test(joined)) {
    c = { relTarget: "amenities/pools", descriptor: "resort-pool", tags };
  } else if (/club|clubhouse/i.test(joined)) {
    c = { relTarget: "amenities/clubhouse", descriptor: "clubhouse", tags };
  } else if (/sport|court|field|fitness/i.test(joined)) {
    c = { relTarget: "amenities/sports", descriptor: "sports-amenity", tags };
  } else if (/green|park|landscape|avenue|park-view/i.test(joined)) {
    c = { relTarget: "amenities/greenery", descriptor: "park-landscape", tags };
  } else if (/well|spa|wellness/i.test(joined)) {
    c = { relTarget: "amenities/wellness", descriptor: "wellness-amenity", tags };
  } else if (/kid|play/i.test(joined)) {
    c = { relTarget: "amenities/kids", descriptor: "kids-amenity", tags };
  } else if (/retail|shop|commercial|boulevard/i.test(joined)) {
    c = { relTarget: "amenities/commercial", descriptor: "commercial-frontage", tags };
  } else if (/kitchen/i.test(joined)) {
    c = { relTarget: "interiors/kitchen", descriptor: "kitchen-interior", tags };
  } else if (/bath/i.test(joined)) {
    c = { relTarget: "interiors/bathroom", descriptor: "bathroom-interior", tags };
  } else if (/bed|bedroom/i.test(joined) && !/bath/i.test(joined)) {
    c = { relTarget: "interiors/bedroom", descriptor: "bedroom-interior", tags };
  } else if (/dining/i.test(joined)) {
    c = { relTarget: "interiors/dining", descriptor: "dining-interior", tags };
  } else if (/terrace|balcony/i.test(joined)) {
    c = { relTarget: "interiors/terrace", descriptor: "terrace-outdoor-room", tags };
  } else if (/living|lounge|salon|sofa|b-types|interior/i.test(joined)) {
    c = { relTarget: "interiors/living-room", descriptor: "living-room-interior", tags };
  } else if (/twin\s*villa|twin-villa/i.test(joined)) {
    c = { relTarget: "villas/twin-villas", descriptor: "twin-villa-exterior", tags };
  } else if (/garden\s*villa/i.test(joined)) {
    c = { relTarget: "villas/garden-villas", descriptor: "garden-villa", tags };
  } else if (/signature/i.test(joined)) {
    c = { relTarget: "villas/signature-villas", descriptor: "signature-villa", tags };
  } else if (/villa|solos/i.test(joined)) {
    c = { relTarget: "villas/standalone", descriptor: "standalone-villa-exterior", tags };
  } else if (/townhouse/i.test(joined)) {
    c = { relTarget: "townhouses", descriptor: "townhouse-exterior", tags };
  } else if (/penthouse/i.test(joined)) {
    c = { relTarget: "apartments/penthouses", descriptor: "penthouse-residence", tags };
  } else if (/duplex/i.test(joined)) {
    c = { relTarget: "apartments/duplexes", descriptor: "duplex-residence", tags };
  } else if (/1\s*br|1bd|one\s*bed/i.test(joined)) {
    c = { relTarget: "apartments/1-bedroom", descriptor: "apartment-one-bedroom", tags };
  } else if (/2\s*br|2bd|two\s*bed/i.test(joined)) {
    c = { relTarget: "apartments/2-bedroom", descriptor: "apartment-two-bedroom", tags };
  } else if (/3\s*br|3bd|three\s*bed/i.test(joined)) {
    c = { relTarget: "apartments/3-bedroom", descriptor: "apartment-three-bedroom", tags };
  } else if (/apartment|tower|unit/i.test(joined)) {
    c = { relTarget: "apartments/2-bedroom", descriptor: "apartment-residence", tags };
  } else if (/facade|elevation|exterior/i.test(joined)) {
    c = { relTarget: "exteriors", descriptor: "architecture-exterior", tags };
  } else if (/brand|logo|wordmark/i.test(joined)) {
    c = { relTarget: "branding", descriptor: "branding-asset", tags };
  } else if (/og|opengraph|social|share|preview/i.test(joined)) {
    c = { relTarget: "seo", descriptor: "social-preview", tags };
  } else if (/mobile|thumb/i.test(joined)) {
    c = { relTarget: "mobile", descriptor: "mobile-thumb", tags };
  }

  if (/hero|banner|cover|landscape-main|cinematic|wide/i.test(joined) || /hero/i.test(relFromRaw)) {
    if (tags.includes("sunset") || /sunset|golden|dusk/i.test(joined)) {
      c = { ...c, relTarget: "hero/sunset", descriptor: "hero-sunset-cinematic" };
    } else if (tags.includes("night")) {
      c = { ...c, relTarget: "hero/night", descriptor: "hero-night-cinematic" };
    } else if (/c06|landescape|landscape|daylight/i.test(joined)) {
      c = { ...c, relTarget: "hero/daylight", descriptor: "hero-daylight-cinematic" };
    } else {
      c = { ...c, relTarget: "hero/desktop", descriptor: "hero-cinematic-desktop" };
    }
  }

  if (/landscape-main|landescape|c06-|cinematic-cover/i.test(joined)) {
    c = { ...c, relTarget: "hero/daylight", descriptor: "hero-daylight-cinematic" };
  }

  return c;
}

/**
 * @param {string} dir
 * @returns {string[]}
 */
function walkImages(dir) {
  if (!fs.existsSync(dir)) return [];
  /** @type {string[]} */
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    if (!d) continue;
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) stack.push(p);
      else if (e.isFile() && IMG_EXT.has(path.extname(e.name).toLowerCase())) out.push(p);
    }
  }
  return out;
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

/**
 * Scores for reporting (heuristic, not true CV).
 * @param {import("sharp").Metadata} meta
 * @param {number} byteSize
 */
function scoreFrame(meta, byteSize) {
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const aspect = w && h ? w / h : 1;
  const pixels = w * h;
  const cinematicScore = aspect >= 1.65 && w >= 1600 ? 85 : aspect >= 1.45 ? 70 : 40;
  const weakQuality = pixels < 320_000 || byteSize < 28_000 || (meta.hasAlpha && byteSize < 15_000);
  return { w, h, aspect, pixels, cinematicScore, weakQuality: !!weakQuality };
}

async function main() {
  const files = walkImages(RAW).sort((a, b) =>
    a.localeCompare(b, "en", { numeric: true, sensitivity: "base" }),
  );
  if (files.length > 0) {
    try {
      sharp = (await import("sharp")).default;
    } catch {
      console.error("Abort: install sharp — npm install sharp --save-dev");
      process.exit(1);
    }
  }
  /** @type {Map<string, string[]>} */
  const hashToFiles = new Map();
  /** @type {Map<string, number>} */
  const counter = new Map();

  const report = {
    generatedAt: new Date().toISOString(),
    rawRoot: path.relative(root, RAW),
    outputRoot: path.relative(root, outRoot),
    useProduction,
    dryRun,
    fileCount: files.length,
    moved: [],
    duplicates: [],
    weakQuality: [],
    heroCandidates: [],
    ctaCandidates: [],
    editorialFeatured: [],
    processingErrors: [],
  };

  for (const file of files) {
    const buf = fs.readFileSync(file);
    const hash = crypto.createHash("sha256").update(buf).digest("hex");
    if (!hashToFiles.has(hash)) hashToFiles.set(hash, []);
    hashToFiles.get(hash).push(file);
  }

  for (const [hash, paths] of hashToFiles) {
    if (paths.length > 1) {
      report.duplicates.push({ hash: hash.slice(0, 16), paths: paths.map((p) => path.relative(root, p)) });
    }
  }

  for (const file of files) {
    const relFromRaw = path.relative(RAW, path.dirname(file)).replace(/\\/g, "/") || ".";
    const joined = `${relFromRaw}/${path.basename(file)}`.toLowerCase();
    let meta;
    try {
      if (!sharp) throw new Error("sharp not loaded");
      meta = await sharp(file).metadata();
    } catch (e) {
      report.processingErrors.push({ file: path.relative(root, file), error: String(e) });
      continue;
    }
    const stat = fs.statSync(file);
    const score = scoreFrame(meta, stat.size);
    const classification = classifyPath(file, relFromRaw);

    const key = `${classification.relTarget}::${classification.descriptor}`;
    counter.set(key, (counter.get(key) ?? 0) + 1);
    const n = counter.get(key) ?? 1;
    const baseName = `solana-west-new-zayed-${classification.descriptor}-${pad2(n)}`;

    const relOutDir = classification.relTarget;
    const outDir = path.join(outRoot, relOutDir);
    const outFile = path.join(outDir, `${baseName}.webp`);
    const outDesktop = path.join(outDir, `${baseName}-desktop.webp`);
    const outMobile = path.join(outDir, `${baseName}-mobile.webp`);

    const heroPathLikely =
      classification.relTarget.startsWith("hero/") ||
      /landscape|landescape|cinematic|cover|banner|aerial|masterplan|drone|sunset|night/i.test(joined);
    if (score.cinematicScore >= 80 && score.w >= 1400 && heroPathLikely) {
      report.heroCandidates.push({
        file: path.relative(root, file),
        suggestedPath: path.relative(root, outFile),
        aspect: Number(score.aspect.toFixed(3)),
        score: score.cinematicScore,
      });
    }
    if (
      /pool|terrace|sunset|resort|clubhouse|lifestyle|greenery/i.test(classification.descriptor + joined) ||
      classification.relTarget.startsWith("amenities/")
    ) {
      report.ctaCandidates.push({ file: path.relative(root, file), suggestedPath: path.relative(root, outFile) });
    }
    if (/featured|lifestyle|aerial|villa/i.test(classification.relTarget) || score.pixels > 2_500_000) {
      report.editorialFeatured.push({ file: path.relative(root, file), suggestedPath: path.relative(root, outFile) });
    }
    if (score.weakQuality) {
      report.weakQuality.push({
        file: path.relative(root, file),
        reason: `pixels=${score.pixels} size=${stat.size}b`,
      });
    }

    if (dryRun) {
      report.moved.push({
        from: path.relative(root, file),
        to: path.relative(root, outFile),
        classification,
      });
      continue;
    }

    fs.mkdirSync(outDir, { recursive: true });

    if (!sharp) throw new Error("sharp unavailable");
    const img = sharp(file).rotate();
    await img
      .clone()
      .resize({ width: 2400, withoutEnlargement: true })
      .webp({ quality: 88, effort: 4 })
      .toFile(outFile);

    const wideHero = classification.relTarget.startsWith("hero") || score.aspect >= 1.5;
    if (wideHero) {
      await sharp(file)
        .rotate()
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 86, effort: 4 })
        .toFile(outDesktop);
      await sharp(file)
        .rotate()
        .resize({ width: 828, withoutEnlargement: true })
        .webp({ quality: 84, effort: 4 })
        .toFile(outMobile);
    }

    report.moved.push({
      from: path.relative(root, file),
      to: path.relative(root, outFile),
      variants: wideHero ? [path.relative(root, outDesktop), path.relative(root, outMobile)] : [],
      classification,
    });
  }

  const summaryPath = path.join(root, "docs", "cinematic-image-pipeline-last-run.json");
  fs.mkdirSync(path.dirname(summaryPath), { recursive: true });
  fs.writeFileSync(summaryPath, JSON.stringify(report, null, 2), "utf8");

  console.log(`Processed ${files.length} file(s) → ${path.relative(root, outRoot)}`);
  console.log(`Report: ${path.relative(root, summaryPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
