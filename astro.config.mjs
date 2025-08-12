// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Permite definir base dinámicamente (útil para GitHub Pages project pages)
const rawBase = process.env.PUBLIC_BASE;
const base = rawBase
  ? rawBase.startsWith('/')
    ? rawBase
    : `/${rawBase}`
  : '/';

// https://astro.build/config
export default defineConfig({
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});