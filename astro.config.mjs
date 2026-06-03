// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Sitio servido en la raíz del dominio (GitHub Pages + CNAME santiagogil.com.mx).
// No hay base path: el dominio es propio, no un subpath de github.io.
export default defineConfig({
  site: 'https://santiagogil.com.mx',
  trailingSlash: 'ignore',
  build: {
    format: 'directory', // /blog/slug/ → URLs limpias con trailing slash
  },
  // El sitemap lo genera src/pages/sitemap.xml.ts (sitemap plano, una sola URL).
  integrations: [mdx()],
});
