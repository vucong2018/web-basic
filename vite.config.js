import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  // base: '/web-basic/',
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layout': '/src/layout',
      '@ui': '/src/ui',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@db': '/src/db',
      '@hooks': '/src/hooks',
      '@fonts': '/src/fonts',
      '@utils': '/src/utils',
      '@widgets': '/src/widgets',
      '@contexts': '/src/contexts',
      '@constants': '/src/constants',
    }
  },
})
