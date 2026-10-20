// Build-time only: renders each page to plain HTML so search engines and link
// previews see the real content without running JavaScript.
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { homeSeo, services, siteUrl } from "./services";

export function render(url: string): string {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
}

export type PageMeta = { url: string; file: string; title: string; description: string; canonical?: string; noindex?: boolean };

export const pages: PageMeta[] = [
  { url: "/", file: "index.html", ...homeSeo, canonical: `${siteUrl}/` },
  ...services.map((service) => ({
    url: `/${service.slug}`,
    file: `${service.slug}/index.html`,
    title: service.title,
    description: service.description,
    canonical: `${siteUrl}/${service.slug}`,
  })),
  { url: "/404", file: "404.html", title: "Page not found · Tlholoes Funeral Parlour", description: "This page could not be found.", noindex: true },
];
