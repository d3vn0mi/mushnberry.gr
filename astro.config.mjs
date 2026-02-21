import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mushnberry.gr',
  i18n: {
    locales: ['el', 'en'],
    defaultLocale: 'el',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
