import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' produce rutas relativas: el build funciona igual servido desde
// GitHub Pages, desde Vercel o abierto desde una carpeta local.
export default defineConfig({
  base: './',
  plugins: [react()],
  // Puerto propio: el 5173 por defecto está tomado por otro proyecto Vite de
  // esta misma máquina, y abrirlo mostraba la app equivocada.
  //
  // `open: true` es lo que de verdad resuelve el problema: el navegador se
  // abre solo, en la URL correcta, sin tener que adivinar el puerto. Y
  // `strictPort: false` deja que Vite busque otro si el 5273 está ocupado,
  // en vez de caerse.
  server: { port: 5273, strictPort: false, open: true },
  preview: { port: 4280, strictPort: false },
  build: { outDir: 'dist', assetsDir: 'assets' },
})
