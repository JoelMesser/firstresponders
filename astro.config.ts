import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const SITE = 'https://frpsmd.com';

// High-value SEO landing pages (boosted priority in the sitemap).
const PRIORITY_PAGES = ['/services', '/service-areas', '/about', '/contact', '/faq', '/reviews'];

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  server: { port: 4321 },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        const now = new Date().toISOString();

        if (url === SITE) {
          item.changefreq = 'weekly';
          item.priority = 1.0;
          item.lastmod = now;
        } else if (PRIORITY_PAGES.some((p) => url.endsWith(p))) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
          item.lastmod = now;
        } else if (url.includes('/services/') || url.includes('/service-areas/')) {
          // Service + county landing pages.
          item.changefreq = 'monthly';
          item.priority = 0.7;
          item.lastmod = now;
        } else if (url.includes('/blog/')) {
          item.changefreq = 'monthly';
          item.priority = 0.6;
          item.lastmod = now;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.5;
          item.lastmod = now;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});
