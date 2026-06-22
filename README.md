# Talabi — طلبي

**Générateur de lettres administratives (demande manuscrite) pour l'Algérie.**
Modèles prêts à l'emploi en **français** et en **arabe** : l'utilisateur choisit un
type de lettre, remplit quelques champs, et obtient instantanément une lettre
correctement formulée — à recopier à la main ou exporter en PDF.

Aucun compte, aucun backend, aucun tracking. Fonctionne **hors connexion** (PWA).

---

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **react-router-dom** — une URL indexable par modèle : `/lettre/:id`
- **vite-plugin-pwa** — service worker, installable, fonctionne offline
- **i18n** maison (`src/i18n/fr.json` / `ar.json`) + RTL complet pour l'arabe
- Police arabe **auto-hébergée** (Noto Naskh Arabic, `public/fonts/`) → offline
- Export PDF via `window.print()` + CSS print dédié (pas de lib lourde)
- Brouillons en `localStorage` (page « Mes brouillons »)

## Contenu

- **29 modèles** (français + arabe) dans `src/data/templates.ts`
- 7 catégories : Emploi & Concours · Études & Bourse · État civil & Administration ·
  Consulat & Diaspora · Banque & Finance · Logement · Réclamations
- Chaque modèle : `fields` (formulaire dynamique), `body_fr` / `body_ar` avec
  placeholders `{{champ}}`, et `seo_keywords_fr` (vraies requêtes Google).

## Développement

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc + vite build + prérendu SEO + sitemap
npm run preview    # sert le build de production
npm run lint
```

## SEO & croissance

Le canal d'acquisition est la recherche organique. Au build, `scripts/prerender.mjs` :

- génère un **HTML statique crawlable par modèle** (`dist/lettre/<id>/index.html`)
  avec `<title>`, `meta description`, canonical, Open Graph et le **contenu de la
  lettre visible sans JavaScript** ;
- génère `dist/sitemap.xml` (accueil + tous les modèles) et `dist/404.html`.

Origine canonique configurable : `SITE_ORIGIN=https://mon-domaine.tld npm run build`
(défaut : `https://talabi.app`). Pensez à mettre à jour la même valeur dans
`src/lib/seo.ts` et `public/robots.txt`.

## Déploiement (statique)

Build → dossier `dist/`. Fallback SPA fourni pour :

- **Netlify / Cloudflare Pages** : `public/_redirects`
- **Vercel** : `vercel.json`

Les fichiers prérendus par modèle sont servis en priorité (bon SEO), les autres
routes retombent sur l'app.

## Structure

```
src/
  data/        templates.ts (29 modèles), categories.ts
  components/  Header, SearchBar, CategoryList, LetterForm, LetterPreview,
               ActionBar, Disclaimer, LanguageToggle, InstallPrompt
  pages/       Home, LetterDetail, Drafts
  lib/         letters.ts (rendu/placeholders), drafts.ts, seo.ts
  i18n/        fr.json, ar.json, index.tsx (LangProvider + RTL)
public/
  fonts/       Noto Naskh Arabic (woff2)
  icons/       icônes PWA
  logo.png, robots.txt, _redirects
scripts/
  prerender.mjs
```

## Avertissement produit

Un bandeau rappelle sur chaque écran que ces modèles sont une **aide à la
rédaction**, pas un document officiel, et que certaines démarches imposent de
**recopier la lettre à la main**.
