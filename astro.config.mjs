// @ts-check
import { defineConfig} from 'astro/config';
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
  },
  experimental: {
    fonts: [
      {
        name: "Texturina",
        cssVariable: "--font-headings",
        provider: "local",
        variants: [
          {
            src: [ "./src/fonts/Texturina-VariableFont_opsz,wght.ttf" ],
          },
        ],
      },
      {
        name: "Outfit",
        cssVariable: "--font-text",
        provider: "local",
        variants: [
          {
            src: [ "./src/fonts/Outfit-VariableFont_wght.ttf" ],
          },
        ],

      },
    ],
  },
});
