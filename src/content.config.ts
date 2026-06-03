import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de blog (Astro 6 · Content Layer API con glob loader).
// Archivos planos en src/content/blog/ → URLs limpias /blog/<id>/.
// El cluster se guarda en frontmatter (taxonomía), no en la ruta.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cluster: z.enum([
      'c1-fundamentos',
      'c2-nicho',
      'c3-pricing',
      'c4-decision',
      'c5-ia-geo-aeo',
      'c6-marca-personal',
      'c7-neuro-emocional',
      'c8-tendencias',
    ]),
    clusterLabel: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Respuesta directa de 40–60 palabras para AI Overviews.
    answer: z.string(),
    keywords: z.array(z.string()).default([]),
    cornerstone: z.boolean().default(false),
    draft: z.boolean().default(false),
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
