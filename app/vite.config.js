import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' produce rutas relativas: el build funciona igual servido desde
// GitHub Pages, desde Vercel o abierto desde una carpeta local.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { outDir: 'dist', assetsDir: 'assets' },
})
