import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const steps = defineCollection({
  // lab/ lives one level above site/, so path is ../lab from site root
  loader: glob({ pattern: '**/*.md', base: '../lab' }),
  schema: z.object({}).passthrough(),
});

export const collections = { steps };
