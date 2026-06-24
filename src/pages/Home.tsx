import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ProcedureList from '../components/ProcedureList';
import Disclaimer from '../components/Disclaimer';
import InstallPrompt from '../components/InstallPrompt';
import { useLang } from '../i18n';
import { useSeo } from '../lib/seo';
import { PROCEDURES } from '../data/procedures';
import { TEMPLATES } from '../data/templates';
import { tplTitle, matchesQuery } from '../lib/letters';
import { loadDrafts } from '../lib/drafts';

export default function Home() {
  const { t, lang } = useLang();
  const rtl = lang === 'ar';
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const hasDrafts = loadDrafts().length > 0;

  useSeo({
    title:
      lang === 'ar'
        ? 'وثائق، كل الوثائق والإجراءات الإدارية في الجزائر'
        : 'Wathaiq DZ, tous les documents et démarches administratives en Algérie',
    description:
      lang === 'ar'
        ? 'دليل شامل للوثائق والإجراءات الإدارية في الجزائر: جواز السفر، بطاقة التعريف، عقد الميلاد 12S، صحيفة السوابق، السجل التجاري، عدل وغيرها. الوثائق المطلوبة لكل ملف مع المصادر الرسمية.'
        : 'Guide complet des documents et démarches administratives en Algérie : passeport, carte d\'identité, acte de naissance 12S, casier judiciaire, registre de commerce, AADL… Les pièces à fournir pour chaque dossier, avec les sources officielles.',
    path: '/',
  });

  // Letters that match the active query (shown as a secondary results block).
  const letterMatches = useMemo(
    () => (query.trim() ? TEMPLATES.filter((tpl) => matchesQuery(tpl, query)) : []),
    [query],
  );

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      {/* Hero: logo + functional title + search */}
      <section className="bg-brand-700 pb-7 pt-3 text-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-4 flex flex-col items-center text-center">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Wathaiq DZ"
              width={96}
              height={96}
              className="mb-3 h-24 w-24 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-white/40"
            />
            <h1 className={`text-2xl font-extrabold tracking-tight ${rtl ? 'font-arabic' : ''}`}>
              {t('hero_title')}
            </h1>
            <p className={`mt-1.5 max-w-md text-sm text-white/80 ${rtl ? 'font-arabic' : ''}`}>
              {t('hero_subtitle')}
            </p>
          </div>
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </section>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 pt-5">
        <p className="mb-5 mt-3 px-1 text-xs text-slate-400">
          {PROCEDURES.length} {t('documents_count')}
          {' · '}
          <Link to="/lettres" className="font-semibold text-brand-600 hover:underline">
            {TEMPLATES.length} {t('templates_count')}
          </Link>
          {hasDrafts && (
            <>
              {' · '}
              <Link to="/brouillons" className="font-semibold text-brand-600 hover:underline">
                {t('drafts')}
              </Link>
            </>
          )}
        </p>

        <div className="mb-5">
          <InstallPrompt />
        </div>

        <ProcedureList
          query={query}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Secondary: matching letters when searching */}
        {query.trim() && letterMatches.length > 0 && (
          <section className="mt-9">
            <h2 className={`mb-3 flex items-center gap-2 text-lg font-bold text-slate-700 ${rtl ? 'font-arabic' : ''}`}>
              <span aria-hidden className="text-xl">✍️</span>
              {t('results_letters')}
              <span className="text-sm font-normal text-slate-400">({letterMatches.length})</span>
            </h2>
            <div className="grid gap-2.5">
              {letterMatches.slice(0, 8).map((tpl) => (
                <Link
                  key={tpl.id}
                  to={`/lettre/${tpl.id}`}
                  className={`rounded-xl border border-slate-100 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-brand-200 hover:text-brand-700 hover:shadow-md ${rtl ? 'font-arabic' : ''}`}
                >
                  {tplTitle(tpl, lang)}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Letters promo (when browsing) */}
        {!query.trim() && (
          <Link
            to="/lettres"
            className="mt-9 flex items-center gap-4 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            <span aria-hidden className="text-3xl">✍️</span>
            <div className="min-w-0 flex-1">
              <p className={`font-bold text-brand-800 ${rtl ? 'font-arabic' : ''}`}>{t('letters_section_title')}</p>
              <p className={`text-sm text-slate-600 ${rtl ? 'font-arabic' : ''}`}>{t('letters_promo')}</p>
            </div>
            <span className={`shrink-0 text-sm font-semibold text-brand-600 ${rtl ? 'font-arabic' : ''}`}>{t('letters_cta')} →</span>
          </Link>
        )}

        <div className="mt-9">
          <Disclaimer kind="document" />
        </div>

        <p className={`mt-6 text-center text-xs text-slate-400 ${rtl ? 'font-arabic' : ''}`}>
          <Link to="/mentions-legales" className="hover:text-brand-600 hover:underline">
            {t('legal_link')}
          </Link>
          <span className="mx-2">·</span>
          {t('footer_note')}
        </p>
      </main>
    </div>
  );
}
