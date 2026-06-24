import type { Lang } from '../types';
import type { FormValues } from './letters';

export interface Draft {
  id: string; // unique draft id
  templateId: string;
  lang: Lang;
  values: FormValues;
  updatedAt: number;
}

const KEY = 'wathaiq:drafts';

export function loadDrafts(): Draft[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Draft[];
    return Array.isArray(parsed) ? parsed.sort((a, b) => b.updatedAt - a.updatedAt) : [];
  } catch {
    return [];
  }
}

function persist(drafts: Draft[]) {
  localStorage.setItem(KEY, JSON.stringify(drafts));
}

/** Save (or update) a draft for a given template. One draft per template id. */
export function saveDraft(templateId: string, lang: Lang, values: FormValues): Draft {
  const drafts = loadDrafts();
  const existing = drafts.find((d) => d.templateId === templateId);
  const draft: Draft = {
    id: existing?.id ?? `${templateId}-${Date.now()}`,
    templateId,
    lang,
    values,
    updatedAt: Date.now(),
  };
  const next = [draft, ...drafts.filter((d) => d.templateId !== templateId)];
  persist(next);
  return draft;
}

export function getDraft(templateId: string): Draft | undefined {
  return loadDrafts().find((d) => d.templateId === templateId);
}

export function deleteDraft(id: string) {
  persist(loadDrafts().filter((d) => d.id !== id));
}
