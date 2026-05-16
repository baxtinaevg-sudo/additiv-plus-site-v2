import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const __dirname = import.meta.dirname

export default defineConfig({
  root: __dirname,
  plugins: [vue()],
  base: '/',
})
