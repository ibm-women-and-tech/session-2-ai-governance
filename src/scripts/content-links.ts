// Fixes up links/images produced by markdown authored for GitHub's relative-path
// conventions so they resolve correctly against this site's actual Astro routes.
// Reads its config from a `<script type="application/json" id="content-links-config">`
// tag emitted by the page (see [step]/[slug].astro).

interface ContentLinksConfig {
  siteBase: string;
  // Absolute URL standing in for the directory of the source .md file
  // (e.g. /base/steps/step6), used to resolve GitHub-relative paths.
  stepBase: string;
  routeMap: Record<string, string>;
}

function stripHashAndQuery(href: string): string {
  return href.split('#')[0].split('?')[0];
}

function basenameNoExt(path: string): string {
  const file = path.split('/').pop() ?? path;
  return file.replace(/\.[^.]+$/, '');
}

// Matches URLs with a scheme (http:, mailto:, data:, ...), root-relative paths,
// and hash-only anchors — none of these should be touched.
const EXTERNAL_OR_ABSOLUTE = /^([a-z][a-z0-9+.-]*:|\/|#)/i;

// Resolves a GitHub-relative path (e.g. "./assets/foo.png" or "../step5/assets/bar.png",
// both written relative to the source .md file's directory) against this site's actual
// route for that directory.
function resolveRelative(stepBase: string, relPath: string): string {
  const url = new URL(relPath, `https://content-links.invalid${stepBase}/`);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function fixContentLinks() {
  const configEl = document.getElementById('content-links-config');
  const article = document.querySelector('article[data-assets-base]') as HTMLElement | null;
  if (!configEl || !article) return;

  const config = JSON.parse(configEl.textContent ?? '{}') as ContentLinksConfig;
  const { siteBase, stepBase, routeMap } = config;

  // Images: relative paths (same-step or cross-step) -> absolute site URLs.
  article.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src') ?? '';
    if (src && !EXTERNAL_OR_ABSOLUTE.test(src)) {
      img.setAttribute('src', resolveRelative(stepBase, src));
    }
  });

  article.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href') ?? '';
    if (!href) return;

    if (href.includes('README.md')) {
      a.setAttribute('href', siteBase || '/');
      a.textContent = '← Back to lab overview';
      return;
    }

    if (href.includes('guides-directory.md')) {
      a.setAttribute('href', siteBase || '/');
      a.textContent = '← Back to guides directory';
      return;
    }

    const clean = stripHashAndQuery(href);

    if (clean.endsWith('.md')) {
      // routeMap keys are lowercased by Astro's glob loader, so match case-insensitively.
      const key = basenameNoExt(clean).toLowerCase();
      const route = routeMap[key];
      if (route) a.setAttribute('href', route);
      return;
    }

    // Everything else relative (.ipynb notebooks, downloadable assets like .csv, ...)
    // resolves the same way images do.
    if (!EXTERNAL_OR_ABSOLUTE.test(href)) {
      a.setAttribute('href', resolveRelative(stepBase, href));
    }
  });
}
