import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  publicDir: './assets',
  site: 'https://dina-matveeva-psychologist.pages.dev',
  build: {
    format: 'directory'
  }
});