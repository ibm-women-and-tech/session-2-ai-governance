// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ibm-women-and-tech.github.io',
  base: '/session-2-ai-governance',
  vite: {
    plugins: [tailwindcss()]
  }
});
