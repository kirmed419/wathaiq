import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import { CATEGORIES } from '../data/categories';
import { TEMPLATES } from '../data/templates';
import { tplTitle, matchesQuery } from '../lib/letters';
import type { LetterTemplate } from '../types';

interface Props {
  query: string;
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

function TemplateRow({ tpl }: { tpl: LetterTemplate }) {
  const { lang, dir } = useLang();
  return (
    <Link
      to={`/lettre/${tpl.id}`}
      className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:border-brand-200 hover:shadow-md active:scale-[0.99]"
    >
      <div className="min-w-0 flex-1">
        <p className={`font-semibold text-slate-800 group-hover:text-brand-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
          {tplTitle(tpl, lang)}
        </p>
      </div>
      <span
        className="shrink-0 text-brand-300 transition group-hover:text-brand-500"
        aria-hidden
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dir === 'rtl' ? 'rotate(180deg)' : undefined }}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      </span>
    </Link>
  );
}

export default function CategoryList({ query, activeCategory, onSelectCategory }: Props) {
  const { lang, t } = useLang();

  const filtered = TEMPLATES.filter((tpl) => {
    if (activeCategory && tpl.category !== activeCategory) return false;
    return matchesQuery(tpl, query);
  });

  const grouped = CATEGORIES.map((cat) => ({
    cat,
    items: filtered.filter((tpl) => tpl.category === cat.id),
  })).filter((g) => g.items.length > 0);

  return (
    <div>
      {/* Category chips */}
      <div className="no-print -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          onClick={() => onSelectCategory(null)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeCategory === null
              ? 'bg-brand-700 text-white shadow'
              : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-brand-200'
          }`}
        >
          {t('all_letters')}
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id === activeCategory ? null : cat.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === cat.id
                ? 'bg-brand-700 text-white shadow'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-brand-200'
            } ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            <span aria-hidden>{cat.icon}</span>
            {lang === 'ar' ? cat.label_ar : cat.label_fr}
          </button>
        ))}
      </div>

      {grouped.length === 0 && (
        <p className="rounded-xl bg-white p-8 text-center text-slate-500 ring-1 ring-slate-100">
          {t('no_results')}
        </p>
      )}

      <div className="space-y-7">
        {grouped.map(({ cat, items }) => (
          <section key={cat.id}>
            <h2 className={`mb-3 flex items-center gap-2 text-lg font-bold text-slate-700 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              <span aria-hidden className="text-xl">{cat.icon}</span>
              {lang === 'ar' ? cat.label_ar : cat.label_fr}
              <span className="text-sm font-normal text-slate-400">({items.length})</span>
            </h2>
            <div className="grid gap-2.5">
              {items.map((tpl) => (
                <TemplateRow key={tpl.id} tpl={tpl} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
