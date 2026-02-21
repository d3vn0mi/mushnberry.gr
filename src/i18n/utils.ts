import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getNavLinks(lang: Lang) {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return [
    { href: `${prefix}/`, label: ui[lang]['nav.home'] },
    { href: `${prefix}/about`, label: ui[lang]['nav.about'] },
    { href: `${prefix}/technology`, label: ui[lang]['nav.technology'] },
    { href: `${prefix}/products`, label: ui[lang]['nav.products'] },
    { href: `${prefix}/contact`, label: ui[lang]['nav.contact'] },
  ];
}
