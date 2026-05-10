import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../data/blog/articles");

for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts"))) {
  const t = fs.readFileSync(path.join(dir, f), "utf8");
  let w = 0;
  for (const m of t.matchAll(/`([^`]*)`/gs)) {
    w += m[1].split(/\s+/).filter(Boolean).length;
  }
  for (const m of t.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g)) {
    w += m[1].replace(/\\"/g, '"').split(/\s+/).filter(Boolean).length;
  }
  console.log(f, "~words", w);
}
