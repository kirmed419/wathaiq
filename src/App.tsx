import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { LangProvider } from './i18n';
import Home from './pages/Home';
import ProcedureDetail from './pages/ProcedureDetail';
import Letters from './pages/Letters';
import LetterDetail from './pages/LetterDetail';
import Drafts from './pages/Drafts';
import Legal from './pages/Legal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Vite injects the configured base ('/' or '/<repo>/'); React Router wants it
// without a trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/document/:id" element={<ProcedureDetail />} />
          <Route path="/lettres" element={<Letters />} />
          <Route path="/lettre/:id" element={<LetterDetail />} />
          <Route path="/brouillons" element={<Drafts />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
