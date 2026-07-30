// Rewrites relative image src paths in markdown:
// ./assets/foo.png  →  ../assets/foo.png
// This is needed because Astro pages are rendered at /steps/stepN/slug/
// so ./assets/ would resolve one level too deep.
// Moving to ../assets/ correctly points to /steps/stepN/assets/

import { visit } from 'unist-util-visit';

/** @type {import('unified').Plugin} */
export function remarkFixImagePaths() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url && node.url.startsWith('./assets/')) {
        node.url = node.url.replace('./assets/', '../assets/');
      }
    });
    // Also handle raw HTML <img src="./assets/...">
    visit(tree, 'html', (node) => {
      if (node.value) {
        node.value = node.value.replace(/src="\.\/assets\//g, 'src="../assets/');
      }
    });
  };
}

// Rewrites relative .md back-links to proper site URLs:
// ../../README.md        →  /session-2-ai-governance
// ../../guides-directory.md  →  /session-2-ai-governance/guides-directory
/** @type {import('unified').Plugin} */
export function remarkFixBackLinks() {
  const base = '/session-2-ai-governance';
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (!node.url) return;
      if (node.url.includes('README.md')) {
        node.url = base;
      } else if (node.url.includes('guides-directory.md')) {
        node.url = `${base}/guides-directory`;
      }
    });
    // Also fix <a href="..."> in raw HTML nodes
    visit(tree, 'html', (node) => {
      if (node.value) {
        node.value = node.value
          .replace(/href="[^"]*README\.md"/g, `href="${base}"`)
          .replace(/href="[^"]*guides-directory\.md"/g, `href="${base}/guides-directory"`);
      }
    });
  };
}
