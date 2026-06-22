import { useLang } from '../i18n';

interface Props {
  text: string;
}

/** On-screen rendering of the generated letter (paper-like card). */
export default function LetterPreview({ text }: Props) {
  const { lang, t } = useLang();
  const rtl = lang === 'ar';
  return (
    <div>
      <p className={`mb-2 text-sm font-semibold text-slate-500 ${rtl ? 'font-arabic' : ''}`}>
        {t('preview')}
      </p>
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <article
          dir={rtl ? 'rtl' : 'ltr'}
          className={`letter-body text-[15px] text-slate-800 ${rtl ? 'rtl text-right' : 'text-left'}`}
        >
          {text}
        </article>
      </div>
    </div>
  );
}
