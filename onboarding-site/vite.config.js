import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

/**
 * GitHub Pages 是靜態主機，直接輸入或重新整理 /process/4 這類子路徑時
 * 不會回到 index.html，而是顯示 404。將 index.html 複製成 404.html，
 * Pages 找不到檔案時就會回傳它，SPA 便能依當前網址渲染正確頁面。
 */
const spaFallback = () => ({
  name: 'spa-fallback-404',
  closeBundle() {
    copyFileSync(
      fileURLToPath(new URL('./dist/index.html', import.meta.url)),
      fileURLToPath(new URL('./dist/404.html', import.meta.url))
    )
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {enforce: 'pre', ...mdx()},
    react(),
    spaFallback()
  ],
  base: '/work_newpsr/',
})
