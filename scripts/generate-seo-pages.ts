import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { PROJECTS, SERVICES } from '../src/constants';
import { SERVICE_SLUGS as serviceSlugs, PROJECT_SLUGS as projectSlugs, projectPath } from '../src/paths';
import { responsiveImage } from '../src/responsive-images';

const origin = 'https://a2artplus.vercel.app';
const out = 'dist';
const esc = (value: string) => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char] ?? char));
const plainTitle = (title: string) => title.replace(/\s*\([^)]*\)/, '');
const url = (path: string) => origin + path;
const imageExists = (path: string) => path.startsWith('/images/') && existsSync(join(out, path.slice(1)));
const image = (path: string, alt: string, eager = false) => {
  const attrs = Object.entries(responsiveImage(path)).map(([key, value]) => ` ${key.toLowerCase()}="${esc(String(value))}"`).join('');
  return `<img src="${esc(path)}"${attrs} alt="${esc(alt)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
};
const link = (href: string, label: string, cls = '') =>
  `<a href="${esc(href)}"${cls ? ` class="${cls}"` : ''}>${esc(label)} <span aria-hidden="true">↗</span></a>`;
const unique = <T,>(items: T[]) => [...new Set(items)];

function page(path: string, title: string, description: string, content: string, picture?: string) {
  const canonical = url(path);
  const socialImage = picture && imageExists(picture) ? url(picture) : url('/logo/logo-a2-red.jpg');
  const breadcrumbs = [{ '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: url('/') },
    { '@type': 'ListItem', position: 2, name: path.startsWith('/services') ? 'บริการ' : 'ผลงาน', item: url(path.startsWith('/services') ? '/services' : '/portfolio') }];
  if (path.split('/').length > 2) breadcrumbs.push({ '@type': 'ListItem', position: 3, name: title, item: canonical });
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumbs }).replace(/</g, '\u003c');
  const html = `<!doctype html>
<html lang="th"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} | A2 ART PLUS</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)} | A2 ART PLUS">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}"><meta property="og:image" content="${esc(socialImage)}">
<link rel="icon" type="image/jpeg" href="/logo/logo-a2-red.jpg">
<script type="application/ld+json">${schema}</script>
<link rel="stylesheet" href="/seo.css"></head><body>
<header class="site-head"><a class="brand" href="/">A2 <span>ART PLUS</span><b>.</b></a>
<nav aria-label="เมนูหลัก"><a href="/">หน้าแรก</a><a href="/services">บริการ</a><a href="/portfolio">ผลงาน</a><a href="/#contact">ติดต่อ</a></nav></header>
<main>${content}</main>
<footer><strong>A2 ART PLUS</strong><p>ออกแบบ ผลิต และติดตั้งงานป้าย งานพิมพ์ เฟอร์นิเจอร์บิวท์อิน และงานตกแต่งพื้นที่</p>
<div><a href="/services">บริการ</a><a href="/portfolio">ผลงาน</a><a href="/#contact">ติดต่อเรา</a></div></footer></body></html>`;
  const filename = join(out, path === '/' ? 'index.html' : path.slice(1) + '.html');
  mkdirSync(join(filename, '..'), { recursive: true });
  writeFileSync(filename, html);
}

for (const project of PROJECTS) {
  if (!projectSlugs[project.id]) throw new Error(`Missing project slug: ${project.id}`);
  if (!project.images.some(imageExists)) throw new Error(`Project has no images: ${project.id}`);
}
for (const service of SERVICES) {
  if (!serviceSlugs[service.id] || !imageExists(service.image)) throw new Error(`Incomplete service: ${service.id}`);
}
const slugs = [...SERVICES.map(s => `/services/${s.slug}`), ...PROJECTS.map(p => `/portfolio/${p.slug}`)];
if (new Set(slugs).size !== slugs.length) throw new Error('Duplicate service/project slug');
if ([...SERVICES, ...PROJECTS].some(item => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug))) throw new Error('Invalid service/project slug');
const projects = PROJECTS;
const projectImages = (project: typeof PROJECTS[number]) => {
  const specific = project.images.filter(imageExists).filter(path => path.startsWith('/images/ex/'));
  return unique(specific.length ? specific : project.images.filter(imageExists));
};
const card = (href: string, title: string, category: string, picture: string) =>
  `<article class="card"><a href="${esc(href)}" class="card-image">${image(picture, title)}</a><div class="card-copy"><small>${esc(category)}</small><h2><a href="${esc(href)}">${esc(title)}</a></h2></div></article>`;

const serviceCards = SERVICES.filter(service => serviceSlugs[service.id] && imageExists(service.image))
  .map(service => card(`/services/${serviceSlugs[service.id]}`, plainTitle(service.title), 'บริการออกแบบ · ผลิต · ติดตั้ง', service.image)).join('');
page('/services', 'บริการทำป้ายและบิวท์อิน ศรีราชา ชลบุรี',
  'บริการออกแบบ ผลิตและติดตั้งป้ายตัวอักษร ป้ายไฟ LED สติกเกอร์ ไวนิล และเฟอร์นิเจอร์บิวท์อิน โดย A2 ART PLUS ศรีราชา ชลบุรี',
  `<section class="intro"><p class="eyebrow">WHAT WE DO / SRIRACHA · CHONBURI</p><h1>บริการของเรา<span>.</span></h1><p class="lead">A2 ART PLUS ดูแลงานตั้งแต่แนวคิดและออกแบบ ไปจนถึงผลิตและติดตั้ง ทั้งงานป้าย งานพิมพ์ และงานตกแต่งพื้นที่</p></section>
  <section class="shell"><div class="grid">${serviceCards}</div><p class="closing">มีโจทย์เฉพาะหน้างาน? ${link('/#contact', 'คุยรายละเอียดกับเรา')}</p></section>`);

for (const service of SERVICES) {
  const slug = serviceSlugs[service.id];
  if (!slug || !imageExists(service.image)) continue;
  const title = plainTitle(service.title);
  const gallery = unique([service.image, ...service.gallery]).filter(imageExists);
  page(`/services/${slug}`, `${title} ศรีราชา ชลบุรี`,
    `${title} โดย A2 ART PLUS ศรีราชา ชลบุรี: ${service.description}`,
    `<section class="intro"><p class="eyebrow">${link('/services', 'บริการทั้งหมด')}</p><h1>${esc(title)}<span>.</span></h1><p class="lead">${esc(service.description)}</p></section>
    <section class="shell"><div class="feature">${image(service.image, title, true)}<div><h2>ลักษณะงาน</h2><p>${esc(service.article)}</p>${link('/#contact', 'สอบถามงานประเภทนี้', 'button')}</div></div>
    <h2 class="section-title">ภาพงานประเภทนี้</h2><div class="photo-grid">${gallery.map((src, i) => image(src, `${title} ภาพที่ ${i + 1}`)).join('')}</div>
    <p class="closing">${link('/portfolio', 'ดูผลงานรายโปรเจกต์')}</p></section>`, service.image);
}

page('/portfolio', 'ผลงานป้ายและตกแต่งภายใน ศรีราชา ชลบุรี',
  'ชมภาพผลงานป้ายไฟ ป้ายโรงงาน ป้ายร้านค้า และงานตกแต่งภายในของ A2 ART PLUS พร้อมหน้ารายละเอียดของแต่ละโปรเจกต์',
  `<section class="intro"><p class="eyebrow">SELECTED WORK / A2 ART PLUS</p><h1>ผลงานของเรา<span>.</span></h1><p class="lead">รวมผลงานที่มีภาพเฉพาะโปรเจกต์ เลือกเปิดดูรายละเอียดและภาพของงานแต่ละชิ้นได้</p></section>
  <section class="shell"><div class="grid">${projects.map(project => card(projectPath(project.id), project.title, project.category, projectImages(project)[0])).join('')}</div></section>`);

for (const project of projects) {
  const photos = projectImages(project);
  page(projectPath(project.id), project.title,
    `ภาพผลงาน ${project.title} ประเภท${project.category} โดย A2 ART PLUS ดูภาพงานจริงของโปรเจกต์นี้`,
    `<section class="intro"><p class="eyebrow">${link('/portfolio', 'ผลงานทั้งหมด')} / ${esc(project.category)}</p><h1 class="project-title">${esc(project.title)}<span>.</span></h1><p class="lead">${esc(project.title)} เป็นผลงานประเภท ${esc(project.category)} ของ A2 ART PLUS ชมภาพหน้างานจริงด้านล่าง และติดต่อทีมงานเพื่อคุยรูปแบบ วัสดุ ขนาด และรายละเอียดการติดตั้งสำหรับงานของคุณ</p></section>
    <section class="shell"><div class="project-gallery">${photos.map((src, i) => image(src, `${project.title} ภาพที่ ${i + 1}`, i === 0)).join('')}</div>
    <p class="closing">${link('/portfolio', 'กลับไปดูผลงานทั้งหมด')} &nbsp; ${link('/#contact', 'ติดต่อเรา')}</p></section>`, photos[0]);
}

const paths = ['/', '/services', ...SERVICES.filter(s => serviceSlugs[s.id] && imageExists(s.image)).map(s => `/services/${serviceSlugs[s.id]}`),
  '/portfolio', ...projects.map(p => projectPath(p.id))];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `  <url><loc>${url(path)}</loc></url>`).join('\n')}
</urlset>\n`;
writeFileSync(join(out, 'sitemapa2.xml'), sitemap);
console.log(`Generated ${paths.length - 1} static pages and a ${paths.length}-URL sitemap`);

// Render the existing React homepage ahead of time; hydrate the same tree in the browser.
const { render } = await import(new URL('../.ssr/entry-server.js', import.meta.url).href);
const homeFile = join(out, 'index.html');
const home = readFileSync(homeFile, 'utf8');
if (!home.includes('<div id="root"></div>')) throw new Error('Homepage root is missing');
writeFileSync(homeFile, home.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
