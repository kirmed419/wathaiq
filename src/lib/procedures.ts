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

// ---- Checklist progress (persisted so users can gather papers over days) ----

const KEY = 'wathaiq:checklist';

type ChecklistState = Record<string, number[]>;

function loadAll(): ChecklistState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ChecklistState;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

/** Checked document indices for a procedure. */
export function loadChecked(procId: string): number[] {
  return loadAll()[procId] ?? [];
}

/** Toggle one document index and persist; returns the new checked list. */
export function toggleChecked(procId: string, index: number): number[] {
  const all = loadAll();
  const current = new Set(all[procId] ?? []);
  if (current.has(index)) current.delete(index);
  else current.add(index);
  const next = [...current].sort((a, b) => a - b);
  all[procId] = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* storage may be unavailable (private mode) · fail silently */
  }
  return next;
}
