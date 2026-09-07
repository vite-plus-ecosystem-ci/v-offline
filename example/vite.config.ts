import { defineConfig } from 'vite-plus';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
});
