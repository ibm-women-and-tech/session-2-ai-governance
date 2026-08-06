// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ibm-women-and-tech.github.io',
  base: '/session-2-ai-governance',
  // Astro project root is site/, but lab content lives one level up in lab/
  vite: {
    plugins: [tailwindcss()]
  }
});
