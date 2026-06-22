import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import fr from './fr.json';
import ar from './ar.json';
import type { Lang } from '../types';

const DICT: Record<Lang, Record<string, string>> = { fr, ar };

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: keyof typeof fr) => string;
  dir: 'ltr' | 'rtl';
}

const Ctx = createContext<LangCtx | null>(null);

const STORAGE_KEY = 'talabi:lang';

function detectInitial(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'fr' || saved === 'ar') return saved;
  // Arabic by default; users can switch to French at any time.
  return 'ar';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial);

  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === 'fr' ? 'ar' : 'fr'));
  const t = (key: keyof typeof fr) => DICT[lang][key] ?? DICT.fr[key] ?? String(key);

  return (
    <Ctx.Provider value={{ lang, setLang, toggle, t, dir }}>
      {children}
    </Ctx.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
