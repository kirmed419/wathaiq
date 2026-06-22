import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// Base path: '/' for local/root deploys, '/<repo>/' for GitHub Pages project sites.
// The deploy workflow sets BASE_PATH automatically from the repository name.
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['fonts/**', 'icons/**'],
      manifest: {
        name: 'طلبي Talabi',
        short_name: 'Talabi',
        description: 'Générateur de lettres administratives (demande manuscrite) pour l\'Algérie. Modèles en français et en arabe.',
        theme_color: '#11448c',
        background_color: '#f4f7fc',
        display: 'standalone',
        start_url: base,
        scope: base,
        lang: 'fr',
        dir: 'ltr',
        categories: ['productivity', 'utilities'],
        // Relative paths so they resolve correctly under any base path.
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        navigateFallback: base + 'index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
        ],
      },
    }),
  ],
})
