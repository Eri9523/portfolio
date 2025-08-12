import { getInitialLocale, setLocale, applyTranslations } from '../i18n/index';

type Locale = 'en' | 'es';

function applyInlineContent(locale: Locale) {
  const attr = locale === 'es' ? 'i18nContentEs' : 'i18nContentEn';
  const nodes = document.querySelectorAll('[data-i18n-content-en], [data-i18n-content-es]');
  nodes.forEach((el) => {
    const target = (el as HTMLElement).dataset as any;
    const value = target[attr] as string | undefined;
    if (typeof value === 'string') {
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
        if (el.placeholder !== undefined) el.placeholder = value;
      } else {
        el.textContent = value;
      }
    }
  });
}

function updateFlagButtons(locale: Locale) {
  const buttons = document.querySelectorAll('[data-locale-btn]');
  buttons.forEach((btn) => {
    const loc = (btn.getAttribute('data-locale-btn') || '').toLowerCase();
    const isCurrent = loc === locale;
    (btn as HTMLElement).style.display = isCurrent ? 'none' : 'inline-flex';
    btn.setAttribute('aria-pressed', String(isCurrent));
  });
}

function initI18n() {
  const locale = getInitialLocale() as Locale;
  document.documentElement.setAttribute('lang', locale);
  applyTranslations(locale);
  applyInlineContent(locale);
  updateFlagButtons(locale);

  const buttons = document.querySelectorAll('[data-locale-btn]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const loc = (btn.getAttribute('data-locale-btn') || '').toLowerCase();
      if (loc === 'en' || loc === 'es') {
        setLocale(loc as Locale);
        applyInlineContent(loc as Locale);
        updateFlagButtons(loc as Locale);
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
} 