import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");
const htmlPath = path.join(repoRoot, "html", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const start = html.indexOf('<div class="main">');
const needle = '    </div>\n    <script src="assets/js/jquery-3.5.1.min.js"';
const end = html.indexOf(needle);
if (start === -1 || end === -1) {
  throw new Error(`Could not slice home markup (start=${start}, end=${end})`);
}
let chunk = html.slice(start, end + "    </div>".length);

chunk = chunk
  .replace(/src="assets\//g, 'src="/assets/')
  .replace(/srcset="assets\//g, 'srcset="/assets/')
  .replace(/href="assets\//g, 'href="/assets/');

const outPath = path.join(__dirname, "..", "components", "homeBodyHtml.ts");
const out = `/* eslint-disable */\n/** Auto-generated from html/index.html — run: node scripts/extract-home-html.mjs */\nexport const HOME_BODY_HTML = ${JSON.stringify(chunk)};\n`;
fs.writeFileSync(outPath, out);
console.log("Wrote", outPath, "length", chunk.length);
