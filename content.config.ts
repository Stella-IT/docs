import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: "page",
      source: "ko/**/*.md",
      schema: z.object({
        category: z.string().optional().default(""),
        deprecated: z.boolean().optional().default(false),
      }),
      indexes: [
        { columns: ["path"], unique: true },
        { columns: ["category"] },
        { columns: ["title"] },
      ],
    }),
  },
});
