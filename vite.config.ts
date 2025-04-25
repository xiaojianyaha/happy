import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueSetupPlugin from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/happy/',  // 👈 这是你的仓库名，必须设置对
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [
    vue(),
    vueDevTools(),
    VueSetupPlugin(),
  ],
  build: {
    outDir: 'dist',  // 👈 不需要写成 './dist/'，直接写 'dist' 更稳妥
    emptyOutDir: true, // 👈 可选，加上可以清空旧文件（防止旧缓存问题）
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})
