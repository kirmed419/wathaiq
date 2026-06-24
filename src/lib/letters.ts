import type { Lang, LetterField, LetterTemplate } from '../types';

export type FormValues = Record<string, string>;

/** Localized field label. */
export const fieldLabel = (f: LetterField, lang: Lang): string =>
  lang === 'ar' ? f.label_ar : f.label_fr;

export const tplTitle = (t: LetterTemplate, lang: Lang): string =>
  lang === 'ar' ? t.title_ar : t.title_fr;

export const tplDesc = (t: LetterTemplate, lang: Lang): string =>
  lang === 'ar' ? t.short_description_ar : t.short_description_fr;

/** Format a yyyy-mm-dd date input into a human-readable date for the chosen language. */
export function formatDate(value: string, lang: Lang): string {
  if (!value) return '';
  const d = new Date(value + 'T00:00:00');
  if (isNaN(d.getTime())) return value;
  try {
    return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-DZ' : 'fr-DZ', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d);
  } catch {
    return value;
  }
}

/**
 * Fill the {{placeholders}} in a template body with form values.
 * Unfilled placeholders are replaced by a visible blank so the user
 * can see exactly what is missing, both on screen and on paper.
 */
export function fillBody(
  template: LetterTemplate,
  values: FormValues,
  lang: Lang,
): string {
  const body = lang === 'ar' ? template.body_ar : template.body_fr;
  const fieldByKey = new Map(template.fields.map((f) => [f.key, f]));

  const filled = body.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_m, key: string) => {
    const field = fieldByKey.get(key);
    let v = (values[key] ?? '').trim();
    if (v && field?.type === 'date') v = formatDate(v, lang);
    if (v && field?.type === 'select' && field.options) {
      const opt = field.options.find((o) => o.value === v);
      if (opt) v = lang === 'ar' ? opt.label_ar : opt.label_fr;
    }
    return v || '............';
  });

  // Collapse blank lines left by empty optional fields on their own line.
  return filled
    .split('\n')
    .filter((line, i, arr) => {
      const isBlankPlaceholder = line.trim() === '............';
      // drop a line that is ONLY an unfilled placeholder and surrounded by blanks
      if (isBlankPlaceholder && (arr[i - 1]?.trim() === '' || i === 0)) return false;
      return true;
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n');
}

/** Which required fields are still empty. */
export function missingRequired(
  template: LetterTemplate,
  values: FormValues,
): string[] {
  return template.fields
    .filter((f) => f.required && !(values[f.key] ?? '').trim())
    .map((f) => f.key);
}

/**
 * Normalize text for fuzzy matching: lowercase, strip French accents and
 * Arabic diacritics, unify Arabic letter variants (alef/hamza, ya, ta marbuta),
 * and drop punctuation. Lets "demande demploi" match "Demande d'emploi", or
 * "شهاده عمل" match "شهادة عمل".
 */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // Latin combining accents
    .replace(/[ً-ْٰ]/g, '') // Arabic harakat/diacritics
    .replace(/[أإآ]/g, 'ا') // أ إ آ -> ا
    .replace(/ى/g, 'ي') // ى -> ي
    .replace(/ة/g, 'ه') // ة -> ه
    .replace(/[ؤئ]/g, 'ء') // ؤ ئ -> ء
    .replace(/[^a-z0-9؀-ۿ]+/g, ' ')
    .trim();
}

/** Levenshtein edit distance, bailing out early once it exceeds `max`. */
function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      if (curr[j] < best) best = curr[j];
    }
    if (best > max) return max + 1; // whole row already worse than tolerance
    prev = curr;
  }
  return prev[b.length];
}

/** A single query word fuzzily matches a single haystack word. */
function wordMatches(word: string, token: string): boolean {
  if (token.includes(word)) return true; // substring / prefix search
  if (word.length < 4) return false; // too short to risk fuzzy
  const tolerance = word.length <= 6 ? 1 : 2;
  return editDistance(word, token, tolerance) <= tolerance;
}

/**
 * Fuzzy match a free-text haystack against a query. Every query word must match
 * (substring or small edit distance) at least one word of the haystack. Tolerant
 * of typos, missing accents/apostrophes and Arabic spelling variants. Shared by
 * the letter and procedure searches.
 */
export function fuzzyMatch(haystack: string, q: string): boolean {
  const needle = normalize(q);
  if (!needle) return true;
  const tokens = normalize(haystack).split(' ');
  return needle.split(' ').every((word) => tokens.some((tok) => wordMatches(word, tok)));
}

/** Fuzzy match a letter template against a free-text query (titles, desc, keywords, both languages). */
export function matchesQuery(t: LetterTemplate, q: string): boolean {
  return fuzzyMatch(
    [
      t.title_fr,
      t.title_ar,
      t.short_description_fr,
      t.short_description_ar,
      ...t.seo_keywords_fr,
    ].join(' '),
    q,
  );
}
