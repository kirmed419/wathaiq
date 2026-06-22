import { useLang } from '../i18n';

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex rounded-full bg-white/15 p-0.5 text-sm font-semibold no-print ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
        className={`rounded-full px-3 py-1 transition ${
          lang === 'fr' ? 'bg-white text-brand-700 shadow-sm' : 'text-white/90'
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
        className={`rounded-full px-3 py-1 font-arabic transition ${
          lang === 'ar' ? 'bg-white text-brand-700 shadow-sm' : 'text-white/90'
        }`}
      >
        ع
      </button>
    </div>
  );
}
