import { useState } from 'react';
import { useLang } from '../i18n';

interface Props {
  text: string;
  title: string;
  onBeforeAction: () => boolean; // returns false if required fields missing
  onSaveDraft: () => void;
  savedDraft: boolean;
}

function Icon({ name }: { name: 'copy' | 'share' | 'print' | 'save' | 'check' }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'copy':
      return <svg {...common}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>;
    case 'share':
      return <svg {...common}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>;
    case 'print':
      return <svg {...common}><path d="M6 9V2h12v7" /><rect x="6" y="14" width="12" height="8" /><path d="M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" /></svg>;
    case 'save':
      return <svg {...common}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" /><path d="M17 21v-8H7v8M7 3v5h8" /></svg>;
    case 'check':
      return <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>;
  }
}

export default function ActionBar({ text, title, onBeforeAction, onSaveDraft, savedDraft }: Props) {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);

  const guard = () => onBeforeAction();

  async function handleCopy() {
    if (!guard()) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older / non-secure contexts
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  async function handleShare() {
    if (!guard()) return;
    const shareText = `${title}\n\n${text}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText });
        return;
      } catch {
        return; // user cancelled
      }
    }
    // Fallback: WhatsApp web intent
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'noopener');
  }

  function handlePrint() {
    if (!guard()) return;
    window.print();
  }

  const btn =
    'flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2.5 text-xs font-semibold transition active:scale-95 sm:flex-row sm:gap-2 sm:text-sm';

  return (
    <div className="no-print sticky bottom-0 z-20 border-t border-slate-200 bg-white/95 px-3 py-2.5 shadow-[0_-4px_16px_rgba(15,40,80,0.06)] backdrop-blur sm:static sm:rounded-2xl sm:border sm:shadow-sm">
      <div className={`mx-auto flex max-w-3xl items-stretch gap-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
        <button onClick={handleCopy} className={`${btn} bg-brand-700 text-white hover:bg-brand-800`}>
          <Icon name={copied ? 'check' : 'copy'} />
          {copied ? t('copied') : t('copy')}
        </button>
        <button onClick={handleShare} className={`${btn} bg-brand-50 text-brand-700 ring-1 ring-brand-100 hover:bg-brand-100`}>
          <Icon name="share" />
          {t('share')}
        </button>
        <button onClick={handlePrint} className={`${btn} bg-brand-50 text-brand-700 ring-1 ring-brand-100 hover:bg-brand-100`}>
          <Icon name="print" />
          {t('print')}
        </button>
        <button
          onClick={() => guard() && onSaveDraft()}
          className={`${btn} max-w-[64px] bg-slate-100 text-slate-600 ring-1 ring-slate-200 hover:bg-slate-200 sm:max-w-none`}
          aria-label={t('save_draft')}
          title={t('save_draft')}
        >
          <Icon name={savedDraft ? 'check' : 'save'} />
          <span className="hidden sm:inline">{savedDraft ? t('draft_saved') : t('save_draft')}</span>
        </button>
      </div>
    </div>
  );
}
