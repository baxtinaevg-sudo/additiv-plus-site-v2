import { createServer } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = import.meta.dirname

const server = await createServer({
  root: __dirname,
  plugins: [vue()],
  base: '/',
  server: { port: 5173 },
})

await server.listen()
console.log('Server running at:', server.resolvedUrls.local[0])