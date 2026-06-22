import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  /** canonical path, e.g. /lettre/attestation-travail */
  path?: string;
}

const SITE = 'Talabi';
// Derive the canonical origin from wherever the app is actually served
// (works for localhost, custom domains, and GitHub Pages subpaths alike).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin + base : base;

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Set per-page SEO metadata for crawlers and social previews. */
export function useSeo({ title, description, path }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title.includes(SITE) ? title : `${title} | ${SITE}`;
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('name', 'twitter:card', 'summary');
    if (path) {
      const url = ORIGIN + path;
      upsertMeta('property', 'og:url', url);
      upsertLink('canonical', url);
    }
  }, [title, description, path]);
}
