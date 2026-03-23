import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import Sitemap from 'vite-plugin-sitemap'; // 1. นำเข้า Plugin สร้าง Sitemap

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  // กำหนดหน้าที่พี่อยากให้ Google เจอ (ใส่เพิ่มได้ตามใจชอบ)
  const paths = [
    '/', 
    '/portfolio', 
    '/services', 
    '/contact'
  ];

  return {
    plugins: [
      react(),
      // 2. ตั้งค่าการสร้าง Sitemap อัตโนมัติ
      Sitemap({ 
        hostname: 'https://a2artplus.vercel.app', // URL เว็บพี่
        dynamicRoutes: paths, // รายชื่อหน้าต่างๆ
        changefreq: 'weekly', // บอก Google ว่าเราอัปเดตงานบ่อยแค่ไหน
        priority: 1.0, // ให้ความสำคัญกับหน้าหลัก
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});