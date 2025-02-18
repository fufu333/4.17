// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },
  },
  test: {
    environment: 'happy-dom',
  },
})