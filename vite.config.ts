import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
   plugins: [react(), tsconfigPaths(), tailwindcss(), svgr()], // ✅ Add tsconfigPaths
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
