// Post-build static prerender:
//  - writes a crawlable HTML page per template route (SEO meta + visible
//    letter content that does NOT depend on JS execution)
//  - generates sitemap.xml for the home page + every template route
//
// Run automatically after `vite build` (see package.json).

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { TEMPLATES } from '../src/data/templates.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const ORIGIN = process.env.SITE_ORIGIN || 'https://talabi.app';
// Base path the site is served from ('/' or '/<repo>/'); matches Vite's base.
const BASE = process.env.BASE_PATH || '/';

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

function pageHtml(shell, tpl) {
  const title = `Modèle ${tpl.title_fr} en Algérie | Talabi`;
  const description = `${tpl.short_description_fr} Modèle gratuit de demande manuscrite (français et arabe), à copier à la main ou exporter en PDF. Talabi.`;
  const canonical = `${ORIGIN}/lettre/${tpl.id}`;
  const keywords = tpl.seo_keywords_fr.join(', ');

  // Visible, crawlable content injected into #root (React replaces it on hydration).
  const content = `
    <main dir="ltr" style="max-width:720px;margin:0 auto;padding:24px;font-family:system-ui,sans-serif">
      <h1>${esc(tpl.title_fr)}</h1>
      <p>${esc(tpl.short_description_fr)}</p>
      <h2 dir="rtl">${esc(tpl.title_ar)}</h2>
      <p dir="rtl">${esc(tpl.short_description_ar)}</p>
      <article style="white-space:pre-wrap;font-family:Georgia,serif">${esc(skeleton(tpl.body_fr))}</article>
      <article dir="rtl" style="white-space:pre-wrap">${esc(skeleton(tpl.body_ar))}</article>
      <p><a href="${BASE}">Talabi : autres modèles de demandes manuscrites</a></p>
    </main>`;

  let html = shell;
  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  // description meta
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${esc(description)}" />`,
  );
  // inject canonical + keywords + og before </head>
  const headExtra = `    <link rel="canonical" href="${canonical}" />
    <meta name="keywords" content="${esc(keywords)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="article" />
  </head>`;
  html = html.replace('</head>', headExtra);
  // inject prerendered content into #root
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  return html;
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const entries = [
    `  <url><loc>${ORIGIN}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
    ...TEMPLATES.map(
      (t) =>
        `  <url><loc>${ORIGIN}/lettre/${t.id}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`,
    ),
  ].join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

async function main() {
  const shell = await readFile(join(DIST, 'index.html'), 'utf8');

  let count = 0;
  for (const tpl of TEMPLATES) {
    const dir = join(DIST, 'lettre', tpl.id);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), pageHtml(shell, tpl), 'utf8');
    count++;
  }

  await writeFile(join(DIST, 'sitemap.xml'), buildSitemap(), 'utf8');

  // robots.txt with the deployed origin (overrides the static public/ copy).
  const robots = `User-agent: *\nAllow: /\nDisallow: ${BASE}brouillons\n\nSitemap: ${ORIGIN}/sitemap.xml\n`;
  await writeFile(join(DIST, 'robots.txt'), robots, 'utf8');

  // Universal SPA fallback for hosts that serve 404.html (e.g. GitHub Pages).
  await writeFile(join(DIST, '404.html'), shell, 'utf8');

  console.log(`✓ Prerendered ${count} template pages + sitemap.xml + robots.txt + 404.html`);
  console.log(`  origin: ${ORIGIN}  base: ${BASE}`);
}

main().catch((e) => {
  console.error('Prerender failed:', e);
  process.exit(1);
});
