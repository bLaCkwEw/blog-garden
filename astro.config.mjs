// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],

  prefetch: {
    prefetchAll: true,
  },

  image: {
    layout: "constrained",
    responsiveStyles: true,
  },

  vite: {
    plugins: []
  }
});
