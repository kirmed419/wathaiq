import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useLang } from '../i18n';
import { useSeo } from '../lib/seo';
import { loadDrafts, deleteDraft, type Draft } from '../lib/drafts';
import { getTemplate } from '../data/templates';
import { tplTitle, fillBody } from '../lib/letters';

export default function Drafts() {
  const { t, lang } = useLang();
  const [drafts, setDrafts] = useState<Draft[]>(() => loadDrafts());

  useSeo({ title: t('drafts'), description: t('drafts'), path: '/brouillons' });

  const remove = (id: string) => {
    deleteDraft(id);
    setDrafts(loadDrafts());
  };

  return (
    <div className="flex flex-1 flex-col">
      <Header showBack />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6">
        <h1 className={`mb-5 text-xl font-extrabold text-slate-800 ${lang === 'ar' ? 'font-arabic' : ''}`}>
          {t('drafts')}
        </h1>

        {drafts.length === 0 && (
          <p className={`rounded-xl bg-white p-8 text-center text-slate-500 ring-1 ring-slate-100 ${lang === 'ar' ? 'font-arabic' : ''}`}>
            {t('no_drafts')}
          </p>
        )}

        <div className="space-y-3">
          {drafts.map((d) => {
            const tpl = getTemplate(d.templateId);
            if (!tpl) return null;
            const preview = fillBody(tpl, d.values, d.lang).slice(0, 120);
            return (
              <div key={d.id} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <p className={`font-semibold text-slate-800 ${d.lang === 'ar' ? 'font-arabic' : ''}`}>
                  {tplTitle(tpl, d.lang)}
                </p>
                <p className={`mt-1 line-clamp-2 text-sm text-slate-400 ${d.lang === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {preview}…
                </p>
                <div className={`mt-3 flex gap-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                  <Link
                    to={`/lettre/${d.templateId}`}
                    className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white"
                  >
                    {t('open')}
                  </Link>
                  <button
                    onClick={() => remove(d.id)}
                    className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 ring-1 ring-red-100"
                  >
                    {t('delete')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
