import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro 5 Content Layer — glob loader.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Optional Open Graph image (path under /public). Falls back to site default.
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
