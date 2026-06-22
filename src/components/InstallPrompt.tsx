import { useEffect, useState } from 'react';
import { useLang } from '../i18n';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const DISMISS_KEY = 'talabi:install-dismissed';

export default function InstallPrompt() {
  const { t, lang } = useLang();
  const [evt, setEvt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return;
    const handler = (e: Event) => {
      e.preventDefault();
      setEvt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!visible || !evt) return null;

  const install = async () => {
    await evt.prompt();
    await evt.userChoice;
    setVisible(false);
  };
  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, '1');
    setVisible(false);
  };

  return (
    <div className={`no-print flex items-center gap-3 rounded-xl border border-brand-100 bg-brand-50 p-3 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="h-9 w-9 rounded-lg" />
      <p className="min-w-0 flex-1 text-sm text-brand-800">{t('app_subtitle')}</p>
      <button onClick={install} className="shrink-0 rounded-lg bg-brand-700 px-3 py-2 text-sm font-semibold text-white">
        {t('install')}
      </button>
      <button onClick={dismiss} aria-label="✕" className="shrink-0 px-1 text-brand-400 hover:text-brand-700">✕</button>
    </div>
  );
}
