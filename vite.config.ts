import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import Sitemap from 'vite-plugin-sitemap';



export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  const paths = [
    '/', 
    '/portfolio', 
    '/services', 
    '/contact'
  ];

  return {
    plugins: [
      react(),
      Sitemap({ 
        hostname: 'https://a2artplus.vercel.app', 
        dynamicRoutes: paths, 
        changefreq: 'weekly', 
        priority: 1.0,
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
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});