import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import Disclaimer from '../components/Disclaimer';
import { useLang } from '../i18n';
import { useSeo } from '../lib/seo';
import { TEMPLATES } from '../data/templates';
import { loadDrafts } from '../lib/drafts';

export default function Letters() {
  const { t, lang } = useLang();
  const rtl = lang === 'ar';
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const hasDrafts = loadDrafts().length > 0;

  useSeo({
    title:
      lang === 'ar'
        ? 'نماذج الرسائل والطلبات الإدارية في الجزائر'
        : 'Modèles de lettres et demandes manuscrites en Algérie',
    description:
      lang === 'ar'
        ? 'نماذج جاهزة للطلبات الخطية في الجزائر بالعربية والفرنسية: شهادة عمل، طلب عمل، شكوى، استقالة وغيرها. انسخها أو حمّلها PDF مجاناً.'
        : 'Modèles gratuits de lettres et demandes manuscrites pour vos démarches en Algérie : attestation de travail, demande d\'emploi, réclamation, démission… À copier ou exporter en PDF.',
    path: '/lettres',
  });

  return (
    <div className="flex flex-1 flex-col">
      <Header showBack />

      <section className="bg-brand-700 pb-7 pt-4 text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className={`mb-1 text-xl font-extrabold tracking-tight ${rtl ? 'font-arabic' : ''}`}>
            {t('letters_page_title')}
          </h1>
          <p className={`mb-4 text-sm text-white/80 ${rtl ? 'font-arabic' : ''}`}>
            {t('letters_page_intro')}
          </p>
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </section>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 pt-5">
        <p className="mb-5 mt-3 px-1 text-xs text-slate-400">
          {TEMPLATES.length} {t('templates_count')}
          {hasDrafts && (
            <>
              {' · '}
              <Link to="/brouillons" className="font-semibold text-brand-600 hover:underline">
                {t('drafts')}
              </Link>
            </>
          )}
        </p>

        <CategoryList
          query={query}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="mt-8">
          <Disclaimer kind="letter" />
        </div>
      </main>
    </div>
  );
}
