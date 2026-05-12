/**
 * Luxury real-estate media pipeline — ingests source image batches under:
 *   public/raw-assets/solana-west-consumed-2026-05-09/
 *
 * - Conservative sharp-only grade (geometry preserved; no generative edits)
 * - SEO filenames: solana-west-new-zayed-{category}-{descriptor}-{nn}.webp
 * - Dedupes identical bytes; weak frames → archive/weak-assets
 * - Promotes strongest frames into existing canonical registry paths
 * - Then runs scripts/solana-west-premium-campaign.mjs (sunset/night/OG satellites)
 *
 * Usage:
 *   node scripts/solana-west-consumed-organize.mjs --dry-run
 *   node scripts/solana-west-consumed-organize.mjs --production
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

import { SOLANA_WEST_CINEMATIC_REL_PATHS } from "./lib/solana-west-cinematic-folders.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const RAW_BATCH = path.join(root, "public", "raw-assets", "solana-west-consumed-2026-05-09");
const OUT_ROOT = path.join(root, "public", "images", "projects", "solana-west");
const REPORT_ROOT = path.join(root, "docs", "media-reports", "consumed-2026-05-09");
const CATALOG_JSON = path.join(root, "data", "media", "solana-west", "catalog.generated.json");
const WEAK_DIR = "archive/weak-assets";

const IMG_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".bmp", ".gif"]);

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const production = args.includes("--production");
if (!dryRun && !production) {
  console.error("Pass --production to write graded WebPs + promote canon, or --dry-run for reports only.");
  process.exit(1);
}

const PROJECT = "Solana West";
const PROJECT_LONG = "Solana West New Zayed";
const DEV = "ORA Developers Egypt";
const NZ = "New Zayed";
const WEST = "West Cairo";

function pad2(n) {
  return String(n).padStart(2, "0");
}

function walkImages(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    if (!d) continue;
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) stack.push(p);
      else if (e.isFile() && IMG_EXT.has(path.extname(e.name).toLowerCase())) out.push(p);
    }
  }
  return out;
}

function sha256file(fp) {
  const h = crypto.createHash("sha256");
  h.update(fs.readFileSync(fp));
  return h.digest("hex");
}

/**
 * @param {string} base
 * @param {import("sharp").Metadata} meta
 */
function classify(base, meta) {
  const b = base.toLowerCase();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const aspect = w && h ? w / h : 1;
  const pixels = w * h;
  const isWidePlate = aspect >= 1.46 && Math.min(w, h) >= 880;

  /** @type {{ relTarget: string, slug: string, altKey: string }} */
  const fall = { relTarget: "editorial", slug: "editorial-project-visual", altKey: "editorial" };

  if (/buissness|business-buildings/.test(b)) {
    return { relTarget: "commercial", slug: "commercial-mixed-use", altKey: "commercial" };
  }
  if (/apartments/.test(b) && !/interior/.test(b)) {
    return { relTarget: "apartments", slug: "apartment-building-exterior", altKey: "apartments" };
  }
  if (/building-a/.test(b)) {
    return { relTarget: "architecture-details", slug: "architecture-facade-detail", altKey: "architectureDetail" };
  }
  if (/c06-building/.test(b)) {
    return { relTarget: "architecture-details", slug: "residential-elevation-study", altKey: "elevation" };
  }
  if (/sf-location-map|location-map/.test(b)) {
    return { relTarget: "maps/connectivity", slug: "location-connectivity-map", altKey: "map" };
  }
  if (/masterplan|master-plan/.test(b)) {
    return { relTarget: "masterplan/full", slug: "masterplan-aerial-board", altKey: "masterplan" };
  }
  if (/pool/.test(b)) {
    return { relTarget: "amenities/pools", slug: "luxury-pool-amenity", altKey: "pool" };
  }
  if (/park-view|solos-garden/.test(b)) {
    return { relTarget: "amenities/greenery", slug: "park-landscape-greenery", altKey: "greenery" };
  }
  if (/landescape|landescap|sf-landescape/.test(b)) {
    if (isWidePlate) {
      return { relTarget: "hero/daylight", slug: "hero-cinematic-daylight-avenue", altKey: "heroDaylightWide" };
    }
    return { relTarget: "landscape", slug: "landscaped-walkway-avenue", altKey: "landscapeWalk" };
  }
  if (/solos-interior|\binterior\b/.test(b)) {
    return { relTarget: "interiors/living-room", slug: "residence-living-interior", altKey: "interiorLiving" };
  }
  if (/town-house|townhouse/.test(b)) {
    return { relTarget: "townhouses", slug: "townhouse-street-exterior", altKey: "townhouse" };
  }
  if (/twin-house|twin-villa/.test(b)) {
    return { relTarget: "villas/twin-villas", slug: "twin-villa-exterior", altKey: "twinVilla" };
  }
  if (
    /the-villa|garden-side-villa|solos-villas?\b|solos-the-garden|villa4|sf-villa|c06-villa|solos-villa-\d/.test(b) ||
    (/villa/.test(b) &&
      !/\binterior\b/.test(b) &&
      !/twin-villa/.test(b) &&
      !/apartments/.test(b))
  ) {
    return { relTarget: "villas/standalone", slug: "standalone-villa-exterior", altKey: "villaExterior" };
  }

  return fall;
}

const ALT_TEMPLATES = {
  commercial: `Mixed-use commercial frontage within ${PROJECT_LONG} ${NZ}, ${WEST} — ${DEV}.`,
  apartments: `Modern apartment architecture at ${PROJECT} ${NZ}, ${WEST} — ${DEV}.`,
  architectureDetail: `Contemporary façade detail and landscape edges at ${PROJECT} ${NZ} — ${DEV}.`,
  elevation: `Residential elevation study at ${PROJECT} ${NZ}, ${WEST} — ${DEV}.`,
  map: `Location and connectivity map for ${PROJECT} ${NZ}, ${WEST} — ${DEV}.`,
  masterplan: `Master plan overview of ${PROJECT_LONG} in ${NZ} — ${DEV}.`,
  pool: `Resort-style pool and amenity atmosphere at ${PROJECT} ${NZ} — ${DEV}.`,
  greenery: `Park landscaping and green open space at ${PROJECT} ${NZ} — ${DEV}.`,
  heroDaylightWide: `Cinematic landscaped avenues and low-density planning at ${PROJECT} ${NZ}, ${WEST} — ${DEV}.`,
  landscapeWalk: `Walkable landscaped circulation at ${PROJECT} ${NZ} — ${DEV}.`,
  interiorLiving: `Interior living space at ${PROJECT} ${NZ} — ${DEV}.`,
  townhouse: `Townhouse streetscape at ${PROJECT} ${NZ}, ${WEST} — ${DEV}.`,
  twinVilla: `Twin villa architecture at ${PROJECT} ${NZ}, ${WEST} — ${DEV}.`,
  villaExterior: `Luxury standalone villa exterior at ${PROJECT} ${NZ}, ${WEST} — ${DEV}.`,
  editorial: `Architectural visual from ${PROJECT} ${NZ} — ${DEV}.`,
};

function altFor(altKey) {
  return ALT_TEMPLATES[altKey] ?? ALT_TEMPLATES.editorial;
}

function scoreFrame(meta, byteSize) {
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const aspect = w && h ? w / h : 1;
  const pixels = w * h;
  const cinematicScore = aspect >= 1.65 && w >= 1600 ? 88 : aspect >= 1.48 && w >= 1400 ? 78 : aspect >= 1.35 ? 62 : 45;
  const weakQuality = pixels < 320_000 || byteSize < 20_000 || w < 640;
  return { w, h, aspect, pixels, cinematicScore, weakQuality: !!weakQuality };
}

/**
 * @param {import("sharp").default} sharp
 * @param {string} srcPath
 * @param {string} destPath
 * @param {boolean} diagram
 */
async function writePremiumWebp(sharp, srcPath, destPath, diagram) {
  const dir = path.dirname(destPath);
  if (!dryRun) fs.mkdirSync(dir, { recursive: true });
  let pipe = sharp(srcPath)
    .rotate()
    .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
    .modulate({ brightness: 1, saturation: diagram ? 1.01 : 1.038, hue: 0 })
    .gamma(diagram ? 1.01 : 1.024)
    .linear(diagram ? 1.004 : 1.01, diagram ? -1 : -3.5)
    .sharpen({ sigma: diagram ? 0.16 : 0.34, flat: 1, jagged: 2 });
  if (dryRun) return;
  await pipe.webp({ quality: 89, effort: 5, smartSubsample: true }).toFile(destPath);
}

function pickBest(outputs, predicate, rank) {
  const pool = outputs.filter(predicate);
  if (!pool.length) return null;
  return pool.reduce((best, cur) => (rank(cur) > rank(best) ? cur : best), pool[0]);
}

async function promoteCanonical(sharp, report) {
  const webPath = (disk) => "/" + path.relative(path.join(root, "public"), disk).replace(/\\/g, "/");

  const strong = report.outputs.filter((o) => !o.weakArchive);

  const rankHero = (o) =>
    (o.aspect >= 1.45 ? o.aspect : 0) * Math.log(o.pixels + 1) * (0.45 + Math.min(o.stdevMean / 55, 1.35));

  const bestHero =
    pickBest(strong, (o) => o.relTarget === "hero/daylight", rankHero) ||
    pickBest(strong, (o) => o.relTarget === "landscape", rankHero);

  const bestHero2 =
    pickBest(
      strong.filter((o) => o !== bestHero),
      (o) => o.relTarget === "hero/daylight" || o.relTarget === "landscape",
      rankHero,
    ) || bestHero;

  const bestPool = pickBest(strong, (o) => o.relTarget === "amenities/pools", (o) => o.pixels);
  const bestGreenery =
    pickBest(strong, (o) => o.relTarget === "amenities/greenery", (o) => o.pixels) ||
    pickBest(strong, (o) => o.relTarget === "landscape", (o) => o.pixels);
  const bestVilla = pickBest(strong, (o) => o.relTarget === "villas/standalone", (o) => o.pixels);
  const bestInterior = pickBest(strong, (o) => o.relTarget === "interiors/living-room", (o) => o.pixels);
  const bestMaster = pickBest(strong, (o) => o.relTarget === "masterplan/full", (o) => o.pixels);
  const bestMap = pickBest(strong, (o) => o.relTarget === "maps/connectivity", (o) => o.pixels);
  const arch = strong.filter((o) => o.relTarget === "architecture-details").sort((a, b) => b.pixels - a.pixels);
  const bestArch = arch[0];
  const bestArch2 = arch[1];

  /** @type {{ label: string, from?: string, to: string }[]} */
  const copies = [];

  const ensure = (label, src, destRel) => {
    if (!src || !fs.existsSync(src)) return;
    const dest = path.join(OUT_ROOT, destRel);
    copies.push({ label, from: src, to: dest });
  };

  if (bestHero) {
    ensure("hero01", bestHero.diskPath, path.join("hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01.webp"));
  }
  if (bestHero2) {
    ensure("hero02", bestHero2.diskPath, path.join("hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-02.webp"));
  }
  if (bestPool) {
    ensure("pool", bestPool.diskPath, path.join("amenities/pools/solana-west-new-zayed-resort-pool-01.webp"));
  }
  if (bestGreenery) {
    ensure(
      "greenery",
      bestGreenery.diskPath,
      path.join("amenities/greenery/solana-west-new-zayed-park-landscape-01.webp"),
    );
  }
  if (bestArch) {
    ensure("editorial03", bestArch.diskPath, path.join("featured/solana-west-new-zayed-editorial-visual-03.webp"));
  }
  if (bestArch2) {
    ensure("editorial02", bestArch2.diskPath, path.join("featured/solana-west-new-zayed-editorial-visual-02.webp"));
  } else if (bestArch) {
    ensure("editorial02", bestArch.diskPath, path.join("featured/solana-west-new-zayed-editorial-visual-02.webp"));
  }
  if (bestMaster) {
    ensure(
      "masterplan",
      bestMaster.diskPath,
      path.join("masterplan/full/solana-west-new-zayed-masterplan-full-01.webp"),
    );
    ensure(
      "aerial",
      bestMaster.diskPath,
      path.join("aerial/solana-west-new-zayed-masterplan-aerial-01.webp"),
    );
  }
  if (bestMap) {
    ensure("map", bestMap.diskPath, path.join("maps/connectivity/solana-west-new-zayed-connectivity-map-01.webp"));
  }
  if (bestVilla) {
    ensure(
      "villa",
      bestVilla.diskPath,
      path.join("villas/standalone/solana-west-new-zayed-standalone-villa-exterior-01.webp"),
    );
  }
  if (bestInterior) {
    ensure(
      "interior",
      bestInterior.diskPath,
      path.join("interiors/living-room/solana-west-new-zayed-living-room-interior-01.webp"),
    );
  }

  const heroDest = path.join(OUT_ROOT, "hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01.webp");
  if (!dryRun) {
    for (const c of copies) {
      fs.mkdirSync(path.dirname(c.to), { recursive: true });
      fs.copyFileSync(c.from, c.to);
    }
    if (fs.existsSync(heroDest)) {
      const desktop = path.join(
        OUT_ROOT,
        "hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01-desktop.webp",
      );
      const mobile = path.join(
        OUT_ROOT,
        "hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01-mobile.webp",
      );
      await sharp(heroDest)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 86, effort: 5 })
        .toFile(desktop);
      await sharp(heroDest)
        .resize({ width: 828, withoutEnlargement: true })
        .webp({ quality: 84, effort: 5 })
        .toFile(mobile);
    }
    const blogDest = path.join(OUT_ROOT, "blog/solana-west-new-zayed-blog-editorial-hero-01.webp");
    fs.mkdirSync(path.dirname(blogDest), { recursive: true });
    const blogSrc = bestArch?.diskPath || bestHero?.diskPath;
    if (blogSrc && fs.existsSync(blogSrc)) fs.copyFileSync(blogSrc, blogDest);

    const ctaPool = pickBest(
      strong.filter((o) => o !== bestPool),
      (o) => o.relTarget === "amenities/pools",
      (o) => o.pixels,
    );
    if (bestPool) {
      const ctaPath = path.join(OUT_ROOT, "cta/solana-west-new-zayed-cta-pool-evening-atmosphere-01.webp");
      fs.mkdirSync(path.dirname(ctaPath), { recursive: true });
      const ctaSrc =
        ctaPool && ctaPool.diskPath !== bestPool.diskPath ? ctaPool.diskPath : bestPool.diskPath;
      await sharp(ctaSrc)
        .modulate({ brightness: 0.92, saturation: 1.06 })
        .gamma(1.05)
        .linear(1.02, -4)
        .webp({ quality: 88, effort: 5 })
        .toFile(ctaPath);
    }
  }

  report.promotion = {
    copies: copies.map((c) => ({ label: c.label, from: c.from && webPath(c.from), to: "/" + path.relative(path.join(root, "public"), c.to).replace(/\\/g, "/") })),
    heroDesktop: "/images/projects/solana-west/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01-desktop.webp",
    heroMobile: "/images/projects/solana-west/hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01-mobile.webp",
  };
}

async function main() {
  if (!fs.existsSync(RAW_BATCH)) {
    console.error(`Missing batch folder:\n ${path.relative(root, RAW_BATCH)}`);
    process.exit(1);
  }

  for (const rel of SOLANA_WEST_CINEMATIC_REL_PATHS) {
    const dir = path.join(OUT_ROOT, rel);
    if (!dryRun) fs.mkdirSync(dir, { recursive: true });
  }

  /** @type {import("sharp").default} */
  const sharp = (await import("sharp")).default;

  const files = walkImages(RAW_BATCH).sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
  const hashToSources = new Map();
  for (const f of files) {
    const hash = sha256file(f);
    if (!hashToSources.has(hash)) hashToSources.set(hash, []);
    hashToSources.get(hash).push(f);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    rawBatch: path.relative(root, RAW_BATCH),
    outRoot: path.relative(root, OUT_ROOT),
    dryRun,
    production,
    duplicateGroups: [],
    weakArchive: [],
    outputs: [],
    errors: [],
  };

  for (const [hash, paths] of hashToSources) {
    if (paths.length > 1) {
      report.duplicateGroups.push({
        hash: hash.slice(0, 16),
        kept: path.relative(root, paths[0]),
        skipped: paths.slice(1).map((p) => path.relative(root, p)),
      });
    }
  }

  const counter = new Map();
  const catalog = { generatedAt: report.generatedAt, images: [] };

  for (const [hash, paths] of hashToSources) {
    const file = paths[0];
    const base = path.basename(file);
    let meta;
    let stats;
    try {
      meta = await sharp(file).metadata();
      stats = await sharp(file).stats();
    } catch (e) {
      report.errors.push({ file: path.relative(root, file), error: String(e) });
      continue;
    }
    const stdevMean = stats.channels.reduce((a, c) => a + c.stdev, 0) / (stats.channels.length || 1);
    const st = fs.statSync(file);
    const sc = scoreFrame(meta, st.size);
    const diagram = /masterplan|map|connectivity|location/.test(base.toLowerCase());
    const cls = classify(base, meta);
    const weakExtra = stdevMean < 9 && sc.pixels < 1_200_000;
    const weak = sc.weakQuality || weakExtra;

    const key = `${cls.relTarget}::${cls.slug}`;
    counter.set(key, (counter.get(key) ?? 0) + 1);
    const n = counter.get(key);

    const name = `solana-west-new-zayed-${cls.slug}-${pad2(n)}.webp`;
    const relDir = weak ? WEAK_DIR : cls.relTarget;
    const dest = path.join(OUT_ROOT, relDir, name);
    const webPath = "/" + path.relative(path.join(root, "public"), dest).replace(/\\/g, "/");

    try {
      await writePremiumWebp(sharp, file, dest, diagram);
    } catch (e) {
      report.errors.push({ file: path.relative(root, file), error: String(e) });
      continue;
    }

    const alt = altFor(cls.altKey);
    catalog.images.push({
      path: webPath,
      alt,
      category: cls.relTarget,
      slug: cls.slug,
      source: path.relative(root, file),
      weak,
    });

    report.outputs.push({
      source: path.relative(root, file),
    duplicateOf:
      paths.length > 1 ? paths.slice(1).map((p) => path.relative(root, p)) : null,
    keptDuplicateRepresentative: paths.length > 1,
      relTarget: cls.relTarget,
      slug: cls.slug,
      weakArchive: weak,
      diskPath: dest,
      webPath,
      alt,
      pixels: sc.pixels,
      aspect: Number(sc.aspect.toFixed(4)),
      stdevMean: Number(stdevMean.toFixed(3)),
    });

    if (weak) {
      report.weakArchive.push({
        file: path.relative(root, file),
        webPath,
        reason: `weak=${sc.weakQuality} stdev=${stdevMean.toFixed(2)}`,
      });
    }
  }

  if (production && !dryRun) {
    await promoteCanonical(sharp, report);
  }

  if (production && !dryRun) {
    const premiumScript = path.join(root, "scripts", "solana-west-premium-campaign.mjs");
    const r = spawnSync(process.execPath, [premiumScript], { cwd: root, stdio: "inherit" });
    if (r.status !== 0) {
      console.warn("Premium campaign exited non-zero; check hero files exist.");
    }
  }

  fs.mkdirSync(REPORT_ROOT, { recursive: true });
  if (production && !dryRun) {
    fs.mkdirSync(path.dirname(CATALOG_JSON), { recursive: true });
    fs.writeFileSync(CATALOG_JSON, JSON.stringify(catalog, null, 2), "utf8");
  }

  const distributionMd = report.outputs
    .map((o) => `| ${o.webPath} | ${o.relTarget} | ${o.weakArchive ? "weak" : "active"} | ${o.source} |`)
    .join("\n");

  const renameMd = report.outputs.map((o) => `| ${o.source} | ${o.webPath} |`).join("\n");

  const altMd = report.outputs.map((o) => `| ${o.webPath} | ${o.alt} |`).join("\n");

  const dupMd = report.duplicateGroups
    .map((g) => `**${g.hash}** kept \`${g.kept}\` — skipped: ${g.skipped.join(", ")}`)
    .join("\n\n");

  const integrationMd = `## Canonical promotion

${JSON.stringify(report.promotion ?? {}, null, 2)}

## Registry

Paths align with \`data/media/solana-west/cinematic-registry.ts\` after promotion (copies into fixed filenames).

Catalog: \`data/media/solana-west/catalog.generated.json\`
`;

  const cinematicMd = `## Cinematic selection heuristics

- **Hero 01/02:** widest daylight / landscape plates with healthy channel variance (no generative sky replacement).
- **Pool / greenery:** maximum resolution within category.
- **Editorial:** architecture-details folder ranked by pixels.
- **Masterplan + aerial slot:** same approved board routed to masterplan/full and aerial/ — geometry preserved.
- **Satellites:** sunset, night, investment extract, OG 1200×630 via \`solana-west-premium-campaign.mjs\` from promoted hero.

## Outputs count

${report.outputs.length} graded WebPs (${report.weakArchive.length} archived as weak).

`;

  fs.writeFileSync(
    path.join(REPORT_ROOT, "FULL-IMAGE-DISTRIBUTION-REPORT.md"),
    `# FULL IMAGE DISTRIBUTION REPORT\n\n| Path | Folder | Tier | Raw |\n|---|---|---|---|\n${distributionMd}\n`,
    "utf8",
  );
  fs.writeFileSync(
    path.join(REPORT_ROOT, "IMAGE-RENAME-REPORT.md"),
    `# IMAGE RENAME REPORT\n\n| Source | Public path |\n|---|---|\n${renameMd}\n`,
    "utf8",
  );
  fs.writeFileSync(
    path.join(REPORT_ROOT, "ALT-TEXT-REPORT.md"),
    `# ALT TEXT REPORT\n\n| Path | Alt |\n|---|---|\n${altMd}\n`,
    "utf8",
  );
  fs.writeFileSync(
    path.join(REPORT_ROOT, "DUPLICATE-CLEANUP-REPORT.md"),
    `# DUPLICATE CLEANUP REPORT\n\n${dupMd || "_No byte-identical duplicates._"}\n`,
    "utf8",
  );
  fs.writeFileSync(
    path.join(REPORT_ROOT, "WEBSITE-IMAGE-INTEGRATION-REPORT.md"),
    `# WEBSITE IMAGE INTEGRATION REPORT\n\n${integrationMd}\n`,
    "utf8",
  );
  fs.writeFileSync(
    path.join(REPORT_ROOT, "FINAL-CINEMATIC-CURATION-REPORT.md"),
    `# FINAL CINEMATIC CURATION REPORT\n\n${cinematicMd}\n`,
    "utf8",
  );

  fs.writeFileSync(path.join(REPORT_ROOT, "pipeline-summary.json"), JSON.stringify(report, null, 2), "utf8");

  console.log(`Processed ${report.outputs.length} unique asset(s) from ${files.length} file(s).`);
  console.log(`Reports → ${path.relative(root, REPORT_ROOT)}`);
  if (!dryRun) console.log(`Catalog → ${path.relative(root, CATALOG_JSON)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
