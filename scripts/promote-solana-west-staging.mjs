/**
 * Copies processed WebPs from staging → production tree (merge / overwrite).
 * Safe default: does NOT touch raw-assets. Re-run after `npm run media:pipeline`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public", "images", "projects", "solana-west-staging");
const dest = path.join(root, "public", "images", "projects", "solana-west");

if (!fs.existsSync(src)) {
  console.error("Missing staging folder:", path.relative(root, src));
  process.exit(1);
}

fs.cpSync(src, dest, { recursive: true });
console.log("Promoted staging → production:", path.relative(root, dest));
