import { defineConfig } from 'vite'

import { fileURLToPath, URL } from 'url'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: './',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      inferno: 'inferno/dist/index.esm.js',
    },
  },
})
