import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    category: z.enum(['Embedded', 'Automation', 'Networking']),
    accent: z.enum(['amber', 'emerald', 'cyan']).default('cyan'),
    badge: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
    metrics: z.array(z.string()),
    stack: z.array(z.string()),
    repoUrl: z.string().optional(),
    status: z.string().default('Production'),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects, notes };
