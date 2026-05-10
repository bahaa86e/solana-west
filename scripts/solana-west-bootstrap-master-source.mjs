/**
 * Drops the issuance hero plate into `public/raw-assets/solana-west/` for the cinematic classifier.
 * Idempotent — skips download if marker file already exists.
 *
 * SOLANA_WEST_PREMIUM_SOURCE_URL overrides URL.
 */

import fs from "node:fs";
import http from "node:http";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const URL_DEFAULT =
  process.env.SOLANA_WEST_PREMIUM_SOURCE_URL ||
  "https://www.solanawestprices.com/images/projects/solana-west/hero/solana-west-landscape-main.webp";

function download(urlStr, destFile) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const lib = url.protocol === "https:" ? https : http;
    const req = lib.get(url, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        res.resume();
        download(new URL(res.headers.location, url).href, destFile).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} ${urlStr}`));
        res.resume();
        return;
      }
      fs.mkdirSync(path.dirname(destFile), { recursive: true });
      const out = fs.createWriteStream(destFile);
      res.pipe(out);
      out.on("finish", resolve);
      out.on("error", reject);
    });
    req.on("error", reject);
    req.end();
  });
}

const target = path.join(root, "public", "raw-assets", "solana-west", "solana-west-landscape-main.webp");

if (fs.existsSync(target)) {
  console.log(`Bootstrap skip — exists: ${path.relative(root, target)}`);
} else {
  console.log(`Downloading master plate → ${path.relative(root, target)}`);
  await download(URL_DEFAULT, target);
}
