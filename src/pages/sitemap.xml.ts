import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { servicios } from '../data/servicios.js';

// Sitemap plano: lista TODAS las páginas en un solo archivo /sitemap.xml,
// autogenerado en cada build. Los posts del blog se incluyen solos vía la
// colección; los servicios, vía su data file.
const SITE = 'https://santiagogil.com.mx';

const TOOLS = [
  'calculadora-presupuesto-branding',
  'validador-llms-txt',
  'test-logo-8px',
  'generador-de-paleta',
  'auditoria-eeat',
];

const STATIC = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/blog/', priority: '0.8', changefreq: 'weekly' },
  { path: '/servicios/', priority: '0.8', changefreq: 'monthly' },
  { path: '/herramientas/', priority: '0.8', changefreq: 'monthly' },
  { path: '/sobre/', priority: '0.7', changefreq: 'monthly' },
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  type Entry = { path: string; priority: string; changefreq: string; lastmod?: string };

  const entries: Entry[] = [
    ...STATIC,
    ...servicios.map((s) => ({ path: `/servicios/${s.slug}/`, priority: '0.8', changefreq: 'monthly' })),
    ...TOOLS.map((t) => ({ path: `/herramientas/${t}/`, priority: '0.7', changefreq: 'monthly' })),
    ...posts.map((p) => ({
      path: `/blog/${p.id}/`,
      priority: p.data.cornerstone ? '0.8' : '0.6',
      changefreq: 'monthly',
      lastmod: (p.data.updatedDate ?? p.data.pubDate).toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.path}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
