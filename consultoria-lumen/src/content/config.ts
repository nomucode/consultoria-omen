import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.union([z.string(), z.number()]),
    duration: z.string(),
    description: z.string(),
    icon: z.string(), // We can use icon names from a library or paths
    calendlyEventUrl: z.string().optional(),
  }),
});

export const collections = {
  services,
};
