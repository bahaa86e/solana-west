/**
 * Creates the full Solana West cinematic folder tree (non-destructive).
 * Run: node scripts/init-solana-west-cinematic-folders.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { SOLANA_WEST_CINEMATIC_REL_PATHS } from "./lib/solana-west-cinematic-folders.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const base = path.join(root, "public", "images", "projects", "solana-west");
const raw = path.join(root, "public", "raw-assets", "solana-west");

for (const rel of SOLANA_WEST_CINEMATIC_REL_PATHS) {
  const dir = path.join(base, rel);
  fs.mkdirSync(dir, { recursive: true });
  const keep = path.join(dir, ".gitkeep");
  if (!fs.existsSync(keep)) fs.writeFileSync(keep, "");
}

fs.mkdirSync(raw, { recursive: true });
const rawKeep = path.join(raw, ".gitkeep");
if (!fs.existsSync(rawKeep)) fs.writeFileSync(rawKeep, "");

// Staging mirror for pipeline output (safe default target)
const staging = path.join(root, "public", "images", "projects", "solana-west-staging");
for (const rel of SOLANA_WEST_CINEMATIC_REL_PATHS) {
  const dir = path.join(staging, rel);
  fs.mkdirSync(dir, { recursive: true });
  const keep = path.join(dir, ".gitkeep");
  if (!fs.existsSync(keep)) fs.writeFileSync(keep, "");
}

console.log("Created cinematic folders under:");
console.log(" ", path.relative(root, base));
console.log(" ", path.relative(root, staging));
console.log(" ", path.relative(root, raw));
