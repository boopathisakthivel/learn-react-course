import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'; // Import bundled css file into bundled js
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(),
  dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es', 'cjs']
    },
    rollupOptions: { // Externalize deps
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        assetFileNames: 'assets/[name].[extname]',
        entryFileNames: '[name].[format].js',
      }
    },
    sourcemap: true,
  }
})
