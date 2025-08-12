// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Permite definir base dinámicamente (útil para GitHub Pages project pages)
const rawBase = process.env.PUBLIC_BASE;

// Intenta inferir base y site si estamos en GitHub Actions (GitHub Pages)
const [ghOwner, ghRepo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const inferredBase = ghRepo ? `/${ghRepo}/` : '/';

/**
 * Normaliza el valor de base para que siempre empiece y termine con '/'
 * @param {string | undefined} value
 * @returns {string}
 */
function normalizeBase(value) {
  if (!value) return '/';
  let v = value.startsWith('/') ? value : `/${value}`;
  if (v !== '/' && !v.endsWith('/')) v = `${v}/`;
  return v;
}

const base = normalizeBase(rawBase || inferredBase);

const site = ghOwner && ghRepo
  ? `https://${ghOwner}.github.io${base}`
  : undefined;

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Force cache busting
      rollupOptions: {
        output: {
          entryFileNames: `[name]-${process.env.BUILD_TIME || Date.now()}.js`,
          chunkFileNames: `[name]-${process.env.BUILD_TIME || Date.now()}.js`,
          assetFileNames: `[name]-${process.env.BUILD_TIME || Date.now()}[extname]`
        }
      }
    },
  },
});