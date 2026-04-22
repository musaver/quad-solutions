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
  .replace(/href="assets\//g, 'href="/assets/')
  /** Dedicated Services route (not in-page #services on home). */
  .replace(/href="\/#services"/g, 'href="/services"')
  .replace(/href="#services"/g, 'href="/services"');

const sectionHome = chunk.indexOf('<section id="home"');
if (sectionHome === -1) {
  throw new Error("Could not find <section id=\"home\" in main chunk");
}

const heroEndMarker = "</section>\n        <section class=\"home-logo-section\">";
const heroEnd = chunk.indexOf(heroEndMarker);
if (heroEnd === -1) {
  throw new Error("Could not find hero / logo-section boundary");
}

const HOME_HERO_HTML = chunk.slice(
  sectionHome,
  heroEnd + "</section>".length,
);
const homeFromSection = chunk.slice(sectionHome);
const footerStart = homeFromSection.indexOf('<footer class="footer">');
if (footerStart === -1) {
  throw new Error('Could not find <footer class="footer"> in home chunk');
}
const footerEnd = homeFromSection.indexOf("</footer>", footerStart);
if (footerEnd === -1) {
  throw new Error("Could not find </footer> in home chunk");
}
const footerCloseEnd = footerEnd + "</footer>".length;
const HOME_FOOTER_HTML = homeFromSection.slice(footerStart, footerCloseEnd);
/** Main home sections only (no footer); footer is shared via `HOME_FOOTER_HTML`. */
const HOME_MAIN_HTML = homeFromSection.slice(0, footerStart);
const HOME_AFTER_FOOTER = homeFromSection.slice(footerCloseEnd);
const HOME_CONTENT_HTML = HOME_MAIN_HTML + HOME_FOOTER_HTML + HOME_AFTER_FOOTER;

const outPath = path.join(__dirname, "..", "components", "homeBodyHtml.ts");
const out = `/* eslint-disable */
/** Auto-generated from html/index.html — run: node scripts/extract-home-html.mjs */
export const HOME_HERO_HTML = ${JSON.stringify(HOME_HERO_HTML)};
export const HOME_FOOTER_HTML = ${JSON.stringify(HOME_FOOTER_HTML)};
export const HOME_CONTENT_HTML = ${JSON.stringify(HOME_CONTENT_HTML)};
`;
fs.writeFileSync(outPath, out);
console.log(
  "Wrote",
  outPath,
  "hero length",
  HOME_HERO_HTML.length,
  "footer length",
  HOME_FOOTER_HTML.length,
  "content length",
  HOME_CONTENT_HTML.length,
);
