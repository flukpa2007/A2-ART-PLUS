import { readFileSync } from 'node:fs';

const sitemap = readFileSync('dist/sitemapa2.xml', 'utf8');
const robots = readFileSync('dist/robots.txt', 'utf8');
const sitemapUrl = 'https://a2artplus.vercel.app/sitemapa2.xml';

if (!sitemap.includes('<loc>https://a2artplus.vercel.app/</loc>')) {
  throw new Error('Sitemap does not include the home page');
}

if (!robots.includes(`Sitemap: ${sitemapUrl}`)) {
  throw new Error('robots.txt does not point to sitemapa2.xml');
}

console.log('Sitemap and robots.txt verified in dist/');
