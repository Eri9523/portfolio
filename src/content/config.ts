import { defineCollection, z } from 'astro:content';

const writeups = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { writeups }; 