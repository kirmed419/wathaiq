import type { Lang, Procedure } from '../types';
import { fuzzyMatch } from './letters';

export const procTitle = (p: Procedure, lang: Lang): string =>
  lang === 'ar' ? p.title_ar : p.title_fr;

export const procSummary = (p: Procedure, lang: Lang): string =>
  lang === 'ar' ? p.summary_ar : p.summary_fr;

/** Fuzzy match a procedure against a free-text query (titles, summary, keywords, both langs). */
export function matchesProcedure(p: Procedure, q: string): boolean {
  return fuzzyMatch(
    [p.title_fr, p.title_ar, p.summary_fr, p.summary_ar, ...p.seo_keywords_fr].join(' '),
    q,
  );
}
