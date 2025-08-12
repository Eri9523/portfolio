import en from './en';
import es from './es';

export type Locale = 'en' | 'es';

export const dictionaries: Record<Locale, any> = { en, es };

const STORAGE_KEY = 'locale';

export function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === 'en' || stored === 'es') return stored;
  } catch {}
  return 'en';
}

export function setLocale(locale: Locale) {
  try { localStorage.setItem(STORAGE_KEY, locale); } catch {}
  document.documentElement.setAttribute('lang', locale);
  applyTranslations(locale);
}

export function t(locale: Locale, key: string): string {
  const parts = key.split('.');
  let cur: any = dictionaries[locale];
  for (const p of parts) {
    if (!cur) break;
    cur = cur[p];
  }
  return (typeof cur === 'string' ? cur : key) as string;
}

export function applyTranslations(locale: Locale) {
  const dict = dictionaries[locale];
  if (!dict) return;
  const nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach((el) => {
    const key = (el as HTMLElement).dataset.i18n || '';
    if (!key) return;
    const text = t(locale, key);
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      if (el.placeholder !== undefined) el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
} 