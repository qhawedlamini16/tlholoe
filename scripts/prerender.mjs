// Runs after `vite build` and the SSR build. Writes each page's rendered HTML
// with its own title, description and canonical, a real 404.html, and the sitemap.
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

const { render, pages } = await import(pathToFileURL(serverEntry).href);

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const replaceOnce = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) throw new Error(`Could not find ${label} in template`);
  return html.replace(pattern, replacement);
};

for (const page of pages) {
  const appHtml = render(page.url);
  if (!appHtml || appHtml.length < 500) {
    throw new Error(`Rendered HTML for ${page.url} looks empty (${appHtml?.length ?? 0} chars)`);
  }
  const title = escapeAttr(page.title);
  const description = escapeAttr(page.description);

  let html = template.replace(placeholder, appHtml);
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, "title");
  html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`, "meta description");
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`, "og:title");
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`, "og:description");

  if (page.noindex) {
    html = html
      .replace(/<link rel="canonical"[^>]*>\s*/, "")
      .replace(/<meta property="og:url"[^>]*>\s*/, "")
      .replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>');
  } else {
    html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${page.canonical}" />`, "canonical");
    html = replaceOnce(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${page.canonical}" />`, "og:url");
  }

  const outFile = path.join(publicDir, page.file);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`prerendered ${page.url} -> ${page.file} (${appHtml.length} chars)`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter((p) => !p.noindex).map((p) => `  <url>\n    <loc>${p.canonical}</loc>\n  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
console.log("wrote sitemap.xml");
