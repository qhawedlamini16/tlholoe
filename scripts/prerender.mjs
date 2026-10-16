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

const pages = [
  { url: "/", file: "index.html" },
  { url: "/404", file: "404.html", noindex: true },
];

for (const page of pages) {
  const appHtml = render(page.url);
  if (!appHtml || appHtml.length < 500) {
    throw new Error(`Rendered HTML for ${page.url} looks empty (${appHtml?.length ?? 0} chars)`);
  }
  let html = template.replace(placeholder, appHtml);
  if (page.noindex) {
    html = html
      .replace(/<link rel="canonical"[^>]*>\s*/, "")
      .replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>');
  }
  fs.writeFileSync(path.join(publicDir, page.file), html);
  console.log(`prerendered ${page.url} -> ${page.file} (${appHtml.length} chars)`);
}
