// import path from 'node:path' // ✅ Так правильно

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // const rootDir: string = new URL('.', import.meta.url).pathname

// export default defineConfig({
//    plugins: [react()],
//    resolve: {
//       alias: {
//          '@': path.resolve(rootDir, 'src'),
//          '@components': path.resolve(rootDir, 'src/components'),
//          '@hooks': path.resolve(rootDir, 'src/hooks'),
//          '@services': path.resolve(rootDir, 'src/services'),
//          '@models': path.resolve(rootDir, 'src/models'),
//          '@store': path.resolve(rootDir, 'src/store'),
//          '@assets': path.resolve(rootDir, 'src/assets'),
//       },
//    },
//    build: {
//       target: 'esnext', // Оптимизированная поддержка новых браузеров
//       minify: 'esbuild', // Используем esbuild для минификации (быстрее Terser)
//       sourcemap: false, // Отключаем sourcemaps в продакшене
//       chunkSizeWarningLimit: 500, // Увеличиваем лимит размера чанков
//    },
//    server: {
//       port: 3000,
//       strictPort: true,
//       open: true, // Автооткрытие браузера при запуске
//       headers: {
//          'Content-Security-Policy':
//             "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'",
//       },
//    },
// })

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
   plugins: [react(), tsconfigPaths()], // ✅ Add tsconfigPaths
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'src'),
         '@components': path.resolve(__dirname, 'src/components'),
         '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
   },
   server: {
      port: 3000,
      strictPort: true,
      open: true,
   },
})
