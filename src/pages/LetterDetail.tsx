import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import LetterForm from '../components/LetterForm';
import LetterPreview from '../components/LetterPreview';
import ActionBar from '../components/ActionBar';
import Disclaimer from '../components/Disclaimer';
import { useLang } from '../i18n';
import { useSeo } from '../lib/seo';
import { getTemplate } from '../data/templates';
import {
  fillBody,
  missingRequired,
  tplTitle,
  tplDesc,
  type FormValues,
} from '../lib/letters';
import { getDraft, saveDraft } from '../lib/drafts';

export default function LetterDetail() {
  const { id = '' } = useParams();
  const { lang, t } = useLang();
  const template = getTemplate(id);

  const [values, setValues] = useState<FormValues>(() => getDraft(id)?.values ?? {});
  const [invalidKeys, setInvalidKeys] = useState<string[]>([]);
  const [savedDraft, setSavedDraft] = useState(false);

  useSeo({
    title: template
      ? `${lang === 'ar' ? 'نموذج' : 'Modèle'} ${tplTitle(template, lang)}`
      : 'Talabi',
    description: template
      ? (lang === 'ar' ? tplDesc(template, lang) : `${tplDesc(template, lang)} Modèle gratuit à copier ou exporter en PDF.`)
      : '',
    path: template ? `/lettre/${template.id}` : undefined,
  });

  const rendered = useMemo(
    () => (template ? fillBody(template, values, lang) : ''),
    [template, values, lang],
  );

  if (!template) {
    return (
      <div className="flex flex-1 flex-col">
        <Header showBack />
        <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-4 py-20 text-center">
          <p className="text-5xl">🔍</p>
          <p className="text-lg font-semibold text-slate-600">404</p>
          <Link to="/" className="rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white">
            {t('back')}
          </Link>
        </main>
      </div>
    );
  }

  const rtl = lang === 'ar';

  const setValue = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setSavedDraft(false);
    if (invalidKeys.includes(key) && value.trim()) {
      setInvalidKeys((prev) => prev.filter((k) => k !== key));
    }
  };

  // Returns false (and highlights) when required fields are missing.
  const validate = (): boolean => {
    const missing = missingRequired(template, values);
    setInvalidKeys(missing);
    if (missing.length > 0) {
      document.getElementById(`f-${missing[0]}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return false;
    }
    return true;
  };

  const handleSaveDraft = () => {
    saveDraft(template.id, lang, values);
    setSavedDraft(true);
    setTimeout(() => setSavedDraft(false), 2000);
  };

  return (
    <div className="flex flex-1 flex-col">
      <Header showBack />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-28 pt-5 sm:pb-8">
        {/* Title + when to use */}
        <div className="mb-5">
          <h1 className={`text-xl font-extrabold leading-snug text-slate-800 sm:text-2xl ${rtl ? 'font-arabic' : ''}`}>
            {tplTitle(template, lang)}
          </h1>
          <div className={`mt-2 rounded-xl bg-brand-50 p-3 text-sm text-brand-800 ${rtl ? 'font-arabic' : ''}`}>
            <span className="font-semibold">{t('when_to_use')} : </span>
            {tplDesc(template, lang)}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <div>
            <p className={`mb-3 text-sm font-semibold text-slate-500 ${rtl ? 'font-arabic' : ''}`}>
              {t('fill_the_form')}
            </p>
            <LetterForm
              template={template}
              values={values}
              onChange={setValue}
              invalidKeys={invalidKeys}
            />
            {invalidKeys.length > 0 && (
              <p className={`mt-3 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-600 ${rtl ? 'font-arabic' : ''}`}>
                {t('fill_required')}
              </p>
            )}
          </div>

          {/* Preview + disclaimer */}
          <div className="space-y-4">
            <LetterPreview text={rendered} />
            <Disclaimer compact />
            {/* Desktop action bar lives under the preview */}
            <div className="hidden sm:block">
              <ActionBar
                text={rendered}
                title={tplTitle(template, lang)}
                onBeforeAction={validate}
                onSaveDraft={handleSaveDraft}
                savedDraft={savedDraft}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile sticky action bar */}
      <div className="sm:hidden">
        <ActionBar
          text={rendered}
          title={tplTitle(template, lang)}
          onBeforeAction={validate}
          onSaveDraft={handleSaveDraft}
          savedDraft={savedDraft}
        />
      </div>

      {/* Print-only clean letter */}
      <div className="print-root hidden">
        <div className={`letter-print-wrapper ${rtl ? 'rtl' : ''}`}>{rendered}</div>
      </div>
    </div>
  );
}
