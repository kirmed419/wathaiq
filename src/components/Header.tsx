import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import LanguageToggle from './LanguageToggle';

interface Props {
  /** show a back arrow linking home instead of nothing */
  showBack?: boolean;
}

export default function Header({ showBack = false }: Props) {
  const { t, lang, dir } = useLang();
  return (
    <header className="no-print sticky top-0 z-30 bg-brand-700 text-white shadow-md">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        {showBack && (
          <Link
            to="/"
            aria-label={t('back')}
            className="rounded-full p-1.5 text-white/90 transition hover:bg-white/15"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dir === 'rtl' ? 'rotate(180deg)' : undefined }}>
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
        )}
        <Link to="/" className="flex min-w-0 flex-1 items-center gap-2.5">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Talabi" width={48} height={48} className="h-12 w-12 shrink-0 rounded-xl bg-white p-1 shadow-sm ring-1 ring-white/30" />
          <span className={`truncate text-xl font-extrabold tracking-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>
            {t('app_name')}
          </span>
        </Link>
        <LanguageToggle />
      </div>
    </header>
  );
}
