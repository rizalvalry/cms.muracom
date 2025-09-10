import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Perbaikan Kunci untuk cPanel:
  // Mengatur 'base' ke './' memastikan bahwa semua path aset (JS, CSS, gambar)
  // bersifat relatif terhadap file index.html. Ini memperbaiki masalah halaman kosong.
  base: './',

  resolve: {
    alias: {
      // Menjaga alias yang sudah Anda siapkan
      '@': path.resolve(__dirname, '.'),
    },
  },

  // BAGIAN BERBAHAYA DIHAPUS:
  // 'define' yang mengekspos process.env.GEMINI_API_KEY ke frontend telah dihapus.
  // Kunci API tidak boleh ada di kode sisi klien (browser).
  // Mereka harus disimpan dengan aman di backend dan diakses melalui API.
});
