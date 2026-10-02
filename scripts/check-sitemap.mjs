import { readFileSync, existsSync } from 'node:fs';

const sitemap = readFileSync('dist/sitemapa2.xml', 'utf8');
const robots = readFileSync('dist/robots.txt', 'utf8');
const sitemapUrl = 'https://a2artplus.vercel.app/sitemapa2.xml';

if (!sitemap.includes('<loc>https://a2artplus.vercel.app/</loc>')) {
  throw new Error('Sitemap does not include the home page');
}

if (!robots.includes(`Sitemap: ${sitemapUrl}`)) {
  throw new Error('robots.txt does not point to sitemapa2.xml');
}

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (locs.length < 3 || new Set(locs).size !== locs.length) {
  throw new Error('Sitemap must contain distinct service and portfolio pages');
}
for (const loc of locs) {
  if (!loc.startsWith('https://a2artplus.vercel.app/')) throw new Error(`Unexpected sitemap URL: ${loc}`);
  const path = new URL(loc).pathname;
  const file = path === '/' ? 'dist/index.html' : `dist${path}.html`;
  if (!existsSync(file)) throw new Error(`Sitemap URL has no generated page: ${loc}`);
  if (path !== '/') {
    const html = readFileSync(file, 'utf8');
    if (!html.includes(`rel="canonical" href="${loc}"`) || !html.includes('<h1')) {
      throw new Error(`Generated page lacks canonical or heading: ${loc}`);
    }
  }
}
console.log(`Sitemap, robots.txt and ${locs.length} URLs verified in dist/`);

const home = readFileSync('dist/index.html', 'utf8');
if (!home.includes('<h1') || !home.includes('href="/services/led-signs"') || !home.includes('LocalBusiness')) {
  throw new Error('Homepage must include rendered content, detail links and business schema');
}
for (const loc of locs) {
  const path = new URL(loc).pathname;
  const html = readFileSync(path === '/' ? 'dist/index.html' : `dist${path}.html`, 'utf8');
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)) {
    const target = match[1];
    if (!existsSync(`dist${target}`) && !existsSync(`dist${target}.html`)) throw new Error(`Broken internal reference on ${path}: ${target}`);
  }
}
console.log('Homepage HTML and internal page/asset references verified');
