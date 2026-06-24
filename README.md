# Wathaiq DZ · وثائق

**Tous les documents et démarches administratives en Algérie, au même endroit.**
Pour chaque démarche : la **liste exacte des pièces à fournir** (le dossier), **où**
l'obtenir, le **coût**, les **délais**, le **portail officiel** et les **sources**.
Modèles de **lettres** administratives inclus. En **français** et en **arabe**.

Aucun compte, aucun backend, aucun tracking. Fonctionne **hors connexion** (PWA).

> **Avertissement** · Wathaiq DZ est un service d'information indépendant, **sans
> aucun lien avec le gouvernement algérien**. Les informations sont fournies à titre
> indicatif et peuvent évoluer ; vérifiez toujours auprès de l'organisme officiel.
> Voir la page **Mentions légales & avertissement** (`/mentions-legales`).

---

## Contenu

- **Cœur de l'app : ~28 procédures** (`src/data/procedures.ts`) réparties en
  **8 domaines** (`src/data/procedureCategories.ts`) : État civil · Identité &
  Voyage · Résidence & Justice · Travail & Sécurité sociale · Entreprise &
  Commerce · Logement & Urbanisme · Éducation · Étrangers & Diaspora.
  Chaque procédure : documents requis, où/coût/délai/validité, portail officiel,
  conseils, lettres liées, **sources officielles** et date de révision.
- **52 modèles de lettres** (`src/data/templates.ts`) · fonctionnalité secondaire,
  accessible via `/lettres`, avec formulaire dynamique et export PDF.

Les sources principales sont les portails officiels : `interieur.gov.dz`,
`passeport.interieur.gov.dz`, `demande12s.interieur.gov.dz`, `mjustice.gov.dz`,
`cnrc.dz`, `cnas.dz`, `casnos.com.dz`, `cnr.dz`, `anem.dz`, `anae.dz`,
`aadl.com.dz`, `mesrs.dz`, `mfa.gov.dz`, `bawabatic.dz`.

## Stack

- **Vite + React + TypeScript**, **Tailwind CSS v4**
- **react-router-dom** · URLs indexables : `/document/:id`, `/lettre/:id`, `/lettres`,
  `/mentions-legales`
- **vite-plugin-pwa** · installable, fonctionne hors connexion
- **i18n** maison (`src/i18n/fr.json` / `ar.json`) + RTL complet pour l'arabe
- Police arabe **auto-hébergée** (Noto Naskh Arabic) → offline
- Listes de documents : **progression cochée** sauvegardée en `localStorage`
- Brouillons de lettres en `localStorage`

## Développement

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc + vite build + prérendu SEO + sitemap
npm run preview    # sert le build de production
npm run lint
```

## SEO

Au build, `scripts/prerender.mjs` génère un **HTML statique crawlable** par
procédure (`dist/document/<id>/index.html`) et par lettre
(`dist/lettre/<id>/index.html`) · `<title>`, `meta description`, canonical,
Open Graph et **contenu visible sans JavaScript** (documents requis, sources) ·
ainsi que `sitemap.xml`, `robots.txt` et `404.html`.

Pour le prérendu, passez `SITE_ORIGIN` au build (défaut : `https://wathaiq.dz`).

## Déploiement

### GitHub Pages (prêt à l'emploi)

Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construit
et publie le site à chaque push sur `main`. `BASE_PATH` et `SITE_ORIGIN` sont
calculés automatiquement à partir du dépôt.

1. Créez un dépôt GitHub et poussez le code.
2. **Settings → Pages**, réglez **Source** sur **GitHub Actions**.

### Autres hôtes statiques

Build → dossier `dist/`. Fallback SPA fourni : `public/_redirects` (Netlify /
Cloudflare Pages) et `vercel.json` (Vercel). Les fichiers prérendus sont servis
en priorité ; les autres routes retombent sur l'app.

## Structure

```
src/
  data/        procedures.ts (cœur), procedureCategories.ts,
               templates.ts (52 lettres), categories.ts
  components/  ProcedureList, DocChecklist, QuickFacts, Header, SearchBar,
               CategoryList, LetterForm, LetterPreview, ActionBar, Disclaimer,
               LanguageToggle, InstallPrompt
  pages/       Home (documents), ProcedureDetail, Letters, LetterDetail,
               Drafts, Legal
  lib/         procedures.ts (recherche + checklist), letters.ts, drafts.ts, seo.ts
  i18n/        fr.json, ar.json, index.tsx (LangProvider + RTL)
public/        fonts/, icons/, logo.png, robots.txt, _redirects
scripts/       prerender.mjs
```
