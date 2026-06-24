// Post-build static prerender:
//  - writes a crawlable HTML page per PROCEDURE route (/document/<id>) with SEO
//    meta + visible required-documents content that does NOT depend on JS
//  - writes a crawlable HTML page per LETTER route (/lettre/<id>)
//  - generates sitemap.xml for the home page + every procedure/letter route
//
// Run automatically after `vite build` (see package.json).

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { TEMPLATES } from '../src/data/templates.ts';
import { PROCEDURES } from '../src/data/procedures.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const ORIGIN = process.env.SITE_ORIGIN || 'https://wathaiq.dz';
// Base path the site is served from ('/' or '/<repo>/'); matches Vite's base.
const BASE = process.env.BASE_PATH || '/';
const SITE = 'Wathaiq DZ';

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Render the FR body with placeholders shown as blanks, for indexable content. */
function skeleton(body) {
  return body.replace(/\{\{\s*[a-zA-Z0-9_]+\s*\}\}/g, '............');
}

/** Replace head meta + inject crawlable content into the shell. */
function withMeta(shell, { title, description, canonical, keywords, ogType, content }) {
  let html = shell;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${esc(description)}" />`,
  );
  const headExtra = `    <link rel="canonical" href="${canonical}" />
    <meta name="keywords" content="${esc(keywords)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="${ogType}" />
  </head>`;
  html = html.replace('</head>', headExtra);
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  return html;
}

function procedureHtml(shell, p) {
  const title = `Documents pour ${p.title_fr} en Algérie | ${SITE}`;
  const description = `${p.summary_fr} Liste des pièces à fournir, où l'obtenir, coût et délais. ${SITE}.`;
  const canonical = `${ORIGIN}/document/${p.id}`;
  const docs = p.documents
    .map((d) => `<li>${esc(d.fr)}${d.note_fr ? ` · ${esc(d.note_fr)}` : ''}${d.conditional ? ' (selon le cas)' : ''}</li>`)
    .join('');
  const sources = p.sources
    .map((s) => `<li><a href="${esc(s.url)}" rel="noopener noreferrer">${esc(s.label)}</a></li>`)
    .join('');
  const content = `
    <main dir="ltr" style="max-width:720px;margin:0 auto;padding:24px;font-family:system-ui,sans-serif">
      <h1>${esc(p.title_fr)}</h1>
      <p>${esc(p.summary_fr)}</p>
      <h2 dir="rtl">${esc(p.title_ar)}</h2>
      <p dir="rtl">${esc(p.summary_ar)}</p>
      <p><strong>Où :</strong> ${esc(p.where_fr)}<br/>
         <strong>Coût :</strong> ${esc(p.cost_fr)}<br/>
         <strong>Délai :</strong> ${esc(p.delay_fr)}${p.validity_fr ? `<br/><strong>Validité :</strong> ${esc(p.validity_fr)}` : ''}</p>
      <h3>Documents requis</h3>
      <ul>${docs}</ul>
      <h3>Sources officielles</h3>
      <ul>${sources}</ul>
      <p><a href="${BASE}">${esc(SITE)} : tous les documents administratifs en Algérie</a></p>
    </main>`;
  return withMeta(shell, {
    title,
    description,
    canonical,
    keywords: p.seo_keywords_fr.join(', '),
    ogType: 'article',
    content,
  });
}

function letterHtml(shell, tpl) {
  const title = `Modèle ${tpl.title_fr} en Algérie | ${SITE}`;
  const description = `${tpl.short_description_fr} Modèle gratuit de demande manuscrite (français et arabe), à copier à la main ou exporter en PDF. ${SITE}.`;
  const canonical = `${ORIGIN}/lettre/${tpl.id}`;
  const content = `
    <main dir="ltr" style="max-width:720px;margin:0 auto;padding:24px;font-family:system-ui,sans-serif">
      <h1>${esc(tpl.title_fr)}</h1>
      <p>${esc(tpl.short_description_fr)}</p>
      <h2 dir="rtl">${esc(tpl.title_ar)}</h2>
      <p dir="rtl">${esc(tpl.short_description_ar)}</p>
      <article style="white-space:pre-wrap;font-family:Georgia,serif">${esc(skeleton(tpl.body_fr))}</article>
      <article dir="rtl" style="white-space:pre-wrap">${esc(skeleton(tpl.body_ar))}</article>
      <p><a href="${BASE}">${esc(SITE)} : documents et modèles de lettres en Algérie</a></p>
    </main>`;
  return withMeta(shell, {
    title,
    description,
    canonical,
    keywords: tpl.seo_keywords_fr.join(', '),
    ogType: 'article',
    content,
  });
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const url = (loc, freq, prio) =>
    `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>${freq}</changefreq><priority>${prio}</priority></url>`;
  const entries = [
    url(`${ORIGIN}/`, 'weekly', '1.0'),
    url(`${ORIGIN}/lettres`, 'weekly', '0.7'),
    url(`${ORIGIN}/mentions-legales`, 'yearly', '0.3'),
    ...PROCEDURES.map((p) => url(`${ORIGIN}/document/${p.id}`, 'monthly', '0.9')),
    ...TEMPLATES.map((t) => url(`${ORIGIN}/lettre/${t.id}`, 'monthly', '0.7')),
  ].join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

async function main() {
  const shell = await readFile(join(DIST, 'index.html'), 'utf8');

  let procCount = 0;
  for (const p of PROCEDURES) {
    const dir = join(DIST, 'document', p.id);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), procedureHtml(shell, p), 'utf8');
    procCount++;
  }

  let letterCount = 0;
  for (const tpl of TEMPLATES) {
    const dir = join(DIST, 'lettre', tpl.id);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), letterHtml(shell, tpl), 'utf8');
    letterCount++;
  }

  await writeFile(join(DIST, 'sitemap.xml'), buildSitemap(), 'utf8');

  // robots.txt with the deployed origin (overrides the static public/ copy).
  const robots = `User-agent: *\nAllow: /\nDisallow: ${BASE}brouillons\n\nSitemap: ${ORIGIN}/sitemap.xml\n`;
  await writeFile(join(DIST, 'robots.txt'), robots, 'utf8');

  // Universal SPA fallback for hosts that serve 404.html (e.g. GitHub Pages).
  await writeFile(join(DIST, '404.html'), shell, 'utf8');

  console.log(`✓ Prerendered ${procCount} procedure + ${letterCount} letter pages + sitemap.xml + robots.txt + 404.html`);
  console.log(`  origin: ${ORIGIN}  base: ${BASE}`);
}

main().catch((e) => {
  console.error('Prerender failed:', e);
  process.exit(1);
});
