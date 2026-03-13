import { defineCollection, z } from 'astro:content';

// about 集合：对应 src/content/about/ 下的文件
const about = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    what_i_do: z.object({
      title: z.string(),
      items: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
  }),
});

// legal 集合：对应 src/content/legal/ 下的文件（如 dmca.md, terms-of-service.md）
const legal = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
  }),
});

export const collections = {
  about,
  legal,
};
