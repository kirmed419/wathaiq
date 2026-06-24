import { useState } from 'react';
import { useLang } from '../i18n';
import { loadChecked, toggleChecked } from '../lib/procedures';
import type { RequiredDoc } from '../types';

interface Props {
  procId: string;
  documents: RequiredDoc[];
}

export default function DocChecklist({ procId, documents }: Props) {
  const { lang, t } = useLang();
  const rtl = lang === 'ar';
  const [checked, setChecked] = useState<number[]>(() => loadChecked(procId));

  const toggle = (i: number) => setChecked(toggleChecked(procId, i));

  const done = checked.length;
  const total = documents.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className={`text-lg font-bold text-slate-800 ${rtl ? 'font-arabic' : ''}`}>
          {t('required_documents')}
        </h2>
        <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">
          {done}/{total}
        </span>
      </div>

      {/* progress bar */}
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${pct}%` }} />
      </div>

      <ul className="space-y-2">
        {documents.map((doc, i) => {
          const isChecked = checked.includes(i);
          return (
            <li key={i}>
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${
                  isChecked ? 'border-brand-200 bg-brand-50/60' : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(i)}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-brand-600"
                />
                <span className="min-w-0">
                  <span className={`flex flex-wrap items-center gap-2 font-medium text-slate-800 ${isChecked ? 'line-through opacity-60' : ''} ${rtl ? 'font-arabic' : ''}`}>
                    {lang === 'ar' ? doc.ar : doc.fr}
                    {doc.conditional && (
                      <span className={`rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800 ${rtl ? 'font-arabic' : ''}`}>
                        {t('if_applicable')}
                      </span>
                    )}
                  </span>
                  {(doc.note_fr || doc.note_ar) && (
                    <span className={`mt-0.5 block text-sm text-slate-500 ${rtl ? 'font-arabic' : ''}`}>
                      {lang === 'ar' ? doc.note_ar : doc.note_fr}
                    </span>
                  )}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      <p className={`mt-3 text-xs text-slate-400 ${rtl ? 'font-arabic' : ''}`}>
        {t('checklist_hint')}
      </p>
    </div>
  );
}
