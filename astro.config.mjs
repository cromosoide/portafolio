// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Sitio servido en la raíz del dominio (GitHub Pages + CNAME santiagogil.com.mx).
// No hay base path: el dominio es propio, no un subpath de github.io.
export default defineConfig({
  site: 'https://santiagogil.com.mx',
  trailingSlash: 'ignore',
  build: {
    format: 'directory', // /blog/slug/ → URLs limpias con trailing slash
  },
  integrations: [
    mdx(),
    sitemap({
      // Prioridades por tipo de página para guiar el crawl.
      serialize(item) {
        if (item.url === 'https://santiagogil.com.mx/') {
          item.priority = 1.0;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/servicios/') || item.url.includes('/herramientas/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
});
