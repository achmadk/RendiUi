import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import { PluginPure } from 'rollup-plugin-pure'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    externalizeDeps(),
    PluginPure({
      functions: ['Button']
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'rendiUI',
      fileName: 'rendiUI'
    }
  }
})
