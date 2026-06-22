import { useLang } from '../i18n';
import type { LetterTemplate } from '../types';
import { fieldLabel, type FormValues } from '../lib/letters';

interface Props {
  template: LetterTemplate;
  values: FormValues;
  onChange: (key: string, value: string) => void;
  /** keys of required fields left empty, highlighted after a failed action */
  invalidKeys: string[];
}

export default function LetterForm({ template, values, onChange, invalidKeys }: Props) {
  const { lang, t } = useLang();

  const baseInput =
    'w-full rounded-xl border bg-white px-3.5 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-brand-100';

  return (
    <div className="space-y-4">
      {template.fields.map((field) => {
        const invalid = invalidKeys.includes(field.key);
        const border = invalid
          ? 'border-red-400 ring-2 ring-red-100'
          : 'border-slate-200 focus:border-brand-400';
        const value = values[field.key] ?? '';
        const label = fieldLabel(field, lang);
        // Instructive placeholder generated from the label, no example data.
        const placeholder =
          lang === 'ar'
            ? `اكتب ${label} هنا`
            : `Saisissez ${label.charAt(0).toLowerCase()}${label.slice(1)} ici`;
        const id = `f-${field.key}`;

        return (
          <div key={field.key}>
            <label
              htmlFor={id}
              className={`mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700 ${
                lang === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {label}
              {field.required ? (
                <span className="text-red-500" aria-hidden>*</span>
              ) : (
                <span className="text-xs font-normal text-slate-400">({t('optional')})</span>
              )}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={id}
                value={value}
                rows={3}
                onChange={(e) => onChange(field.key, e.target.value)}
                placeholder={placeholder}
                className={`${baseInput} ${border} resize-y ${lang === 'ar' ? 'font-arabic' : ''}`}
              />
            ) : field.type === 'select' ? (
              <select
                id={id}
                value={value}
                onChange={(e) => onChange(field.key, e.target.value)}
                className={`${baseInput} ${border} ${lang === 'ar' ? 'font-arabic' : ''}`}
              >
                <option value="">{lang === 'ar' ? 'اختر…' : 'Choisir…'}</option>
                {field.options?.map((o) => (
                  <option key={o.value} value={o.value}>
                    {lang === 'ar' ? o.label_ar : o.label_fr}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                type={field.type === 'date' ? 'date' : 'text'}
                value={value}
                onChange={(e) => onChange(field.key, e.target.value)}
                placeholder={field.type === 'date' ? undefined : placeholder}
                className={`${baseInput} ${border} ${lang === 'ar' && field.type !== 'date' ? 'font-arabic' : ''}`}
              />
            )}

            {invalid && (
              <p className="mt-1 text-xs font-medium text-red-500">{t('required_field')}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
