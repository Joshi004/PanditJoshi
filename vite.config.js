import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { copyFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// /PanditJoshi/ for GitHub Pages (repo sub-path), / for Cloudflare (root).
const base = process.env.VITE_BASE ?? '/'

// Copies index.html to 404.html after build so GitHub Pages serves the SPA
// shell for all unknown paths (direct navigation / refresh on deep routes).
function spa404Plugin() {
  return {
    name: 'spa-404',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      copyFileSync(`${dist}/index.html`, `${dist}/404.html`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    spa404Plugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['pandit-joshi.png', 'pwa-192.png', 'pwa-512.png'],
      manifest: {
        name: 'Pandit Joshi — Hindu Priest',
        short_name: 'Pandit Joshi',
        description:
          'Traditional Vedic ceremonies for weddings, pujas, and life-cycle events in the Atlanta area.',
        theme_color: '#800020',
        background_color: '#FFFAF3',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        // Only precache small JS/CSS/HTML assets; large images load from network
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
        navigateFallback: `${base}index.html`,
        navigateFallbackDenylist: [new RegExp('^' + base.replace(/\//g, '\\/') + 'api\\/')],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            // Cache images on first request so they work on repeat visits
            urlPattern: /\.(?:png|jpg|jpeg|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
  base,
})
