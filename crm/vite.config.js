import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: __dirname,
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content: [
            path.resolve(__dirname, 'index.html'),
            path.resolve(__dirname, 'src/**/*.vue'),
            path.resolve(__dirname, 'src/**/*.js'),
          ],
          theme: {
            extend: {
              colors: {
                beige: '#FAF8F5',
                champagne: { DEFAULT: '#C5A572', light: '#E8D5B7', dark: '#8B7355' },
                graphite: { DEFAULT: '#2D2D2D', soft: '#555555' },
                'crm-text': '#1F2937',
                'crm-border': '#E5E7EB',
                muted: '#9CA3AF',
                danger: '#EF4444',
                success: '#10B981',
                warning: '#F59E0B',
                info: '#3B82F6',
              },
            },
          },
        }),
        autoprefixer(),
      ],
    },
  },
})