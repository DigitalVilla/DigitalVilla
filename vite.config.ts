import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { projects } from './src/data/projects'
import { navLinks, site } from './src/data/site'

/** Emits /sitemap.xml from the same data that drives the routes. */
function sitemap(): Plugin {
  return {
    name: 'dv:sitemap',
    apply: 'build',
    generateBundle() {
      const paths = [
        ...navLinks.map((link) => link.to),
        ...projects.map((project) => `/work/${project.slug}`),
      ]
      const entries = paths
        .map((path) => `  <url><loc>${site.url}${path}</loc></url>`)
        .join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Group vendor code into two long-lived chunks so a content deploy
        // never invalidates them. Matched by path rather than package name so
        // each package's internal dependencies (react-dom's client build,
        // framer-motion's motion-dom / motion-utils) land in the same chunk
        // instead of leaking into the entry bundle.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (
            /node_modules\/(react|react-dom|scheduler|react-router|react-router-dom)\//.test(
              id
            )
          ) {
            return 'react'
          }
          if (
            /node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(id)
          ) {
            return 'motion'
          }
          return undefined
        },
      },
    },
  },
})
