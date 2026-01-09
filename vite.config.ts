import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/cristianreyperez.github.io/', // or '/' if deploying to root
  build: {
    outDir: 'docs'
  }
})
