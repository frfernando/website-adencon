import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://imearadiodifusao.com.br',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
