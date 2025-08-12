// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Permite definir base dinámicamente (útil para GitHub Pages project pages)
const rawBase = process.env.PUBLIC_BASE;

// Intenta inferir base y site si estamos en GitHub Actions (GitHub Pages)
const [ghOwner, ghRepo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const inferredBase = ghRepo ? `/${ghRepo}` : '/';

/**
 * Normaliza el valor de base para que siempre empiece con '/'
 * @param {string | undefined} value
 * @returns {string}
 */
function normalizeBase(value) {
  if (!value) return '/';
  return value.startsWith('/') ? value : `/${value}`;
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
  },
});