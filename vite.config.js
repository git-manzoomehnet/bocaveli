// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        web: path.resolve(__dirname, 'src/web/home.html'),
        mobile: path.resolve(__dirname, 'src/mobile/index.html'),
      },
      output: {
        entryFileNames: '[name].min.js',  // خروجی فشرده با پسوند .min.js
      },
    },
    minify: 'terser',  // استفاده از Terser برای فشرده‌سازی
  },
  css: {
    postcss: {
      configFile: path.resolve(__dirname, 'postcss.config.js'), // بارگذاری پیکربندی واحد PostCSS
    },
  },
  root:path.resolve(__dirname, './web/static/home.html')
});
