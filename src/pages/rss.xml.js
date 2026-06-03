import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Santiago Gil — Blog',
    description:
      'Guías sobre branding, identidad de marca, diseño, marca personal y AI SEO (GEO/AEO).',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.pubDate,
        link: `/blog/${p.id}/`,
      })),
    customData: `<language>es-mx</language>`,
  });
}
