// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alfred-tester.github.io',
  base: '/qahero',
  integrations: [sitemap()]
});
