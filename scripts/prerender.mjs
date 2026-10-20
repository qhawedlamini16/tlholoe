// Runs after `vite build` and the SSR build. Writes the rendered page into
// index.html, and a real 404.html so unknown addresses return "not found".
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "dist", "public");
const serverEntry = path.join(root, "dist", "server", "entry-server.js");
const placeholder = "<!--app-html-->";

const template = fs.readFileSync(path.join(publicDir, "index.html"), "utf-8");
if (!template.includes(placeholder)) {
  throw new Error(`Placeholder ${placeholder} not found in built index.html`);
}

const { render } = await import(pathToFileURL(serverEntry).href);

const SITE = "https://tlholoesfunerals.com";
const pages = [
  { url: "/", file: "index.html" },
  {
    url: "/privacy",
    file: "privacy.html",
    title: "Privacy notice | Tlholoe's Funeral Parlour",
    description: "How Tlholoe's Funeral Parlour CC collects, uses and protects your personal information under POPIA.",
  },
  { url: "/404", file: "404.html", noindex: true },
];

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

for (const page of pages) {
  const appHtml = render(page.url);
  if (!appHtml || appHtml.length < 500) {
    throw new Error(`Rendered HTML for ${page.url} looks empty (${appHtml?.length ?? 0} chars)`);
  }
  let html = template.replace(placeholder, appHtml);
  if (page.url !== "/") {
    // Business details (JSON-LD) belong to the home page only.
    html = html.replace(/\s*<!-- Business details for Google[\s\S]*?<\/script>/, "");
  }
  if (page.title) {
    const url = `${SITE}${page.url}`;
    html = html
      .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escapeAttr(page.description)}$2`)
      .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(page.title)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttr(page.description)}$2`);
  }
  if (page.noindex) {
    html = html
      .replace(/<link rel="canonical"[^>]*>\s*/, "")
      .replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>');
  }
  fs.writeFileSync(path.join(publicDir, page.file), html);
  console.log(`prerendered ${page.url} -> ${page.file} (${appHtml.length} chars)`);
}
