import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import Disclaimer from '../components/Disclaimer';
import InstallPrompt from '../components/InstallPrompt';
import { useLang } from '../i18n';
import { useSeo } from '../lib/seo';
import { TEMPLATES } from '../data/templates';
import { loadDrafts } from '../lib/drafts';

export default function Home() {
  const { t, lang } = useLang();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const hasDrafts = loadDrafts().length > 0;

  useSeo({
    title:
      lang === 'ar'
        ? 'طلبي، نماذج الطلبات الإدارية في الجزائر'
        : 'Talabi, modèles de demandes manuscrites en Algérie',
    description:
      lang === 'ar'
        ? 'نماذج جاهزة للطلبات الإدارية في الجزائر بالعربية والفرنسية: شهادة عمل، نسخة بطاقة التعريف، منحة جامعية، شكوى وغيرها. انسخها أو حمّلها PDF مجاناً.'
        : 'Modèles gratuits de demandes manuscrites pour vos démarches en Algérie : attestation de travail, duplicata de carte d\'identité, bourse universitaire, réclamation. À copier ou exporter en PDF.',
    path: '/',
  });

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      {/* Hero: prominent logo + functional title + search, no slogan */}
      <section className="bg-brand-700 pb-7 pt-3 text-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-4 flex flex-col items-center text-center">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Talabi"
              width={96}
              height={96}
              className="mb-3 h-24 w-24 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-white/40"
            />
            <h1 className={`text-2xl font-extrabold tracking-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {lang === 'ar' ? 'نماذج الطلبات الإدارية' : 'Modèles de demandes administratives'}
            </h1>
          </div>
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

        <div className="mb-5">
          <InstallPrompt />
        </div>

        <CategoryList
          query={query}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="mt-8">
          <Disclaimer />
        </div>

        <p className={`mt-8 text-center text-xs text-slate-400 ${lang === 'ar' ? 'font-arabic' : ''}`}>
          {t('footer_note')}
        </p>
      </main>
    </div>
  );
}
