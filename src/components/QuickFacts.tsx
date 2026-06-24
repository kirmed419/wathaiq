import { useLang } from '../i18n';
import type { Procedure } from '../types';

/** A small icon + label + value cell. */
function Fact({ icon, label, value, rtl }: { icon: string; label: string; value: string; rtl: boolean }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
      <span aria-hidden className="text-lg leading-none">{icon}</span>
      <div className="min-w-0">
        <p className={`text-[11px] font-semibold uppercase tracking-wide text-slate-400 ${rtl ? 'font-arabic' : ''}`}>{label}</p>
        <p className={`text-sm font-medium text-slate-700 ${rtl ? 'font-arabic' : ''}`}>{value}</p>
      </div>
    </div>
  );
}

export default function QuickFacts({ p }: { p: Procedure }) {
  const { lang, t } = useLang();
  const rtl = lang === 'ar';
  const pick = (fr?: string, ar?: string) => (lang === 'ar' ? ar : fr) ?? '';

  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      <Fact icon="📍" label={t('fact_where')} value={pick(p.where_fr, p.where_ar)} rtl={rtl} />
      <Fact icon="💳" label={t('fact_cost')} value={pick(p.cost_fr, p.cost_ar)} rtl={rtl} />
      <Fact icon="⏱️" label={t('fact_delay')} value={pick(p.delay_fr, p.delay_ar)} rtl={rtl} />
      {(p.validity_fr || p.validity_ar) && (
        <Fact icon="📆" label={t('fact_validity')} value={pick(p.validity_fr, p.validity_ar)} rtl={rtl} />
      )}
    </div>
  );
}
