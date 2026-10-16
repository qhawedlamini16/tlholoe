// Build-time only: renders the site to plain HTML so search engines and link
// previews see the real content without running JavaScript.
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export function render(url: string): string {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
}
