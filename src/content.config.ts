import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const steps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './steps' }),
  schema: z.object({}).passthrough(),
});

export const collections = { steps };
