import { useLang } from '../i18n';

interface Props {
  compact?: boolean;
  /** Which disclaimer text to show. 'document' for procedure pages, 'letter' for letter pages. */
  kind?: 'document' | 'letter';
}

export default function Disclaimer({ compact = false, kind = 'document' }: Props) {
  const { t } = useLang();
  const body = kind === 'letter' ? t('disclaimer') : t('doc_disclaimer');
  return (
    <div
      className={`no-print flex gap-3 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 ${
        compact ? 'p-3 text-sm' : 'p-4'
      }`}
      role="note"
    >
      <span aria-hidden className="mt-0.5 shrink-0 text-lg leading-none">⚠️</span>
      <div>
        {!compact && (
          <p className="mb-0.5 font-semibold">{t('disclaimer_title')}</p>
        )}
        <p className="leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
