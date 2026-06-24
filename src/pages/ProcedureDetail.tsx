import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import QuickFacts from '../components/QuickFacts';
import Disclaimer from '../components/Disclaimer';
import { useLang } from '../i18n';
import { useSeo } from '../lib/seo';
import { getProcedure } from '../data/procedures';
import { procTitle, procSummary } from '../lib/procedures';
import { getTemplate } from '../data/templates';
import { tplTitle, formatDate } from '../lib/letters';

export default function ProcedureDetail() {
  const { id = '' } = useParams();
  const { lang, t } = useLang();
  const rtl = lang === 'ar';
  const p = getProcedure(id);

  useSeo({
    title: p
      ? lang === 'ar'
        ? `وثائق ${procTitle(p, lang)} في الجزائر`
        : `Documents pour ${procTitle(p, lang)} en Algérie`
      : 'Wathaiq DZ',
    description: p
      ? lang === 'ar'
        ? `${procSummary(p, lang)} الوثائق المطلوبة، أين تذهب، التكلفة والمدة.`
        : `${procSummary(p, lang)} Liste des pièces à fournir, où l'obtenir, coût et délais.`
      : '',
    path: p ? `/document/${p.id}` : undefined,
  });

  if (!p) {
    return (
      <div className="flex flex-1 flex-col">
        <Header showBack />
        <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-4 py-20 text-center">
          <p className="text-5xl">🔍</p>
          <p className="text-lg font-semibold text-slate-600">404</p>
          <Link to="/" className="rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white">
            {t('back')}
          </Link>
        </main>
      </div>
    );
  }

  const steps = lang === 'ar' ? p.steps_ar : p.steps_fr;
  const tips = lang === 'ar' ? p.tips_ar : p.tips_fr;
  const relatedLetters = (p.related_letters ?? [])
    .map((lid) => getTemplate(lid))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div className="flex flex-1 flex-col">
      <Header showBack />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 pt-5">
        {/* Title + summary */}
        <h1 className={`text-2xl font-extrabold leading-snug text-slate-800 ${rtl ? 'font-arabic' : ''}`}>
          {procTitle(p, lang)}
        </h1>
        <div className={`mt-2 rounded-xl bg-brand-50 p-3 text-sm leading-relaxed text-brand-800 ${rtl ? 'font-arabic' : ''}`}>
          {procSummary(p, lang)}
        </div>

        {/* Quick facts */}
        <div className="mt-5">
          <QuickFacts p={p} />
        </div>

        {/* Official online portal */}
        {p.online_url && (
          <a
            href={p.online_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-3.5 text-center font-semibold text-white shadow-sm transition hover:bg-brand-800 ${rtl ? 'font-arabic' : ''}`}
          >
            <span aria-hidden>🌐</span>
            {(lang === 'ar' ? p.online_label_ar : p.online_label_fr) || t('online_cta')}
            <span aria-hidden>↗</span>
          </a>
        )}

        {/* The dossier: required documents */}
        <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
          <h2 className={`mb-3 text-lg font-bold text-slate-800 ${rtl ? 'font-arabic' : ''}`}>
            {t('required_documents')}
          </h2>
          <ul className="space-y-2">
            {p.documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                <span className="min-w-0">
                  <span className={`flex flex-wrap items-center gap-2 font-medium text-slate-800 ${rtl ? 'font-arabic' : ''}`}>
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
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        {steps && steps.length > 0 && (
          <section className="mt-6">
            <h2 className={`mb-3 text-lg font-bold text-slate-800 ${rtl ? 'font-arabic' : ''}`}>{t('steps_title')}</h2>
            <ol className="space-y-2">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">{i + 1}</span>
                  <span className={`text-sm text-slate-700 ${rtl ? 'font-arabic' : ''}`}>{s}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Tips */}
        {tips && tips.length > 0 && (
          <section className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
            <h2 className={`mb-2 flex items-center gap-2 font-bold text-emerald-900 ${rtl ? 'font-arabic' : ''}`}>
              <span aria-hidden>💡</span>
              {t('tips_title')}
            </h2>
            <ul className={`list-inside list-disc space-y-1.5 text-sm leading-relaxed text-emerald-900 ${rtl ? 'font-arabic' : ''}`}>
              {tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Related letters */}
        {relatedLetters.length > 0 && (
          <section className="mt-6">
            <h2 className={`mb-3 flex items-center gap-2 text-lg font-bold text-slate-800 ${rtl ? 'font-arabic' : ''}`}>
              <span aria-hidden>✍️</span>
              {t('related_letters_title')}
            </h2>
            <div className="grid gap-2.5">
              {relatedLetters.map((tpl) => (
                <Link
                  key={tpl.id}
                  to={`/lettre/${tpl.id}`}
                  className={`flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-brand-200 hover:text-brand-700 hover:shadow-md ${rtl ? 'font-arabic' : ''}`}
                >
                  {tplTitle(tpl, lang)}
                  <span aria-hidden className="shrink-0 text-brand-300">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Sources */}
        <section className="mt-6">
          <h2 className={`mb-2 text-sm font-bold uppercase tracking-wide text-slate-500 ${rtl ? 'font-arabic' : ''}`}>{t('sources_title')}</h2>
          <ul className="space-y-1.5">
            {p.sources.map((s, i) => (
              <li key={i}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-start gap-1.5 text-sm text-brand-700 hover:underline ${rtl ? 'font-arabic' : ''}`}
                >
                  <span aria-hidden className="mt-0.5">🔗</span>
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className={`mt-3 text-xs text-slate-400 ${rtl ? 'font-arabic' : ''}`}>
            {t('updated_label')} : {formatDate(p.updated, lang)} · {t('verify_source')}
          </p>
        </section>

        <div className="mt-6">
          <Disclaimer kind="document" />
        </div>

        <p className={`mt-6 text-center text-xs text-slate-400 ${rtl ? 'font-arabic' : ''}`}>
          <Link to="/mentions-legales" className="hover:text-brand-600 hover:underline">
            {t('legal_link')}
          </Link>
        </p>
      </main>
    </div>
  );
}
