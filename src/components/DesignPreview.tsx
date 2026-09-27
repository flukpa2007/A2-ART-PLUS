import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Facebook, Menu, X } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { PROJECTS, SERVICES } from '../constants';
import { Project } from '../types';
import './design-preview.css';
import Logo3D from './Logo3D';

const featured = [9, 10, 12].map(id => PROJECTS.find(project => project.id === id)).filter((project): project is Project => Boolean(project));
const gallery = PROJECTS.filter(project => project.image).slice(0, 11);
const galleryTwo = [...PROJECTS].reverse().filter(project => project.image).slice(0, 11);

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduce ? 0 : 0.7, delay }}>{children}</motion.div>;
};

const ContactButton = ({ children = 'คุยเรื่องงานกับเรา' }: { children?: string }) => <a className="dp-contact-button" href="#contact">{children}<ArrowUpRight size={19} aria-hidden="true" /></a>;

function PreviewNav() {
  const [open, setOpen] = useState(false);
  const links = [['เกี่ยวกับเรา', '#about'], ['บริการ', '/services'], ['ผลงาน', '/portfolio'], ['ติดต่อ', '#contact']];
  return <nav className="dp-nav" aria-label="เมนูหลัก">
    <a href="#home" className="dp-logo" aria-label="A2 ART PLUS หน้าแรก">A2<span>ART PLUS</span><i>.</i></a>
    <button className="dp-menu-button" type="button" aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <div className={`dp-nav-links ${open ? 'is-open' : ''}`}>{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</div>
  </nav>;
}

function Hero() {
  return <section className="dp-hero" id="home">
    <PreviewNav />
    <div className="dp-hero-heading-wrap"><Reveal><p className="dp-eyebrow">DESIGN · PRODUCTION · INSTALLATION</p><h1 className="dp-display dp-hero-title">ONE STOP <span className="dp-hero-title-accent">SERVICE<span className="dp-dot">.</span></span></h1></Reveal></div>
    <Logo3D />
    <div className="dp-hero-bottom"><Reveal delay={0.15}><p className="dp-hero-statement">ออกแบบ ผลิต และติดตั้ง<br />ป้าย บิวท์อิน และพื้นที่<br />ที่ทำให้แบรนด์เป็นตัวเอง</p></Reveal><Reveal delay={0.3}><ContactButton /></Reveal></div>
    <a className="dp-scroll-cue" href="#selected-work" aria-label="เลื่อนดูผลงาน"><ArrowDown size={18} /></a>
  </section>;
}

function ImageMarquee() {
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end start'] });
  const rowOne = useTransform(scrollYProgress, [0, 1], ['-18%', '0%']);
  const rowTwo = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const reduce = useReducedMotion();
  const row = (projects: Project[], style: React.CSSProperties | object) => <motion.div className="dp-marquee-row" style={reduce ? undefined : style}>{[...projects, ...projects].map((project, index) => <div className="dp-marquee-tile" key={`${project.id}-${index}`}><img src={project.image} alt={index < projects.length ? project.title : ''} loading="lazy" /><span>{project.title}</span></div>)}</motion.div>;
  return <section ref={section} id="selected-work" className="dp-marquee" aria-label="ภาพผลงานของเรา"><p className="dp-section-kicker">A2 ART PLUS / SELECTED WORKS</p>{row(gallery, { x: rowOne })}{row(galleryTwo, { x: rowTwo })}</section>;
}

function About() {
  return <section className="dp-about" id="about"><div className="dp-about-ornament top-left">A2</div><div className="dp-about-ornament bottom-right">+</div><Reveal><p className="dp-section-kicker">WHO WE ARE / SRIRACHA, CHONBURI</p><h2 className="dp-display dp-gradient">มากกว่า<br />งานป้าย<span className="dp-dot">.</span></h2></Reveal><Reveal delay={0.15}><p className="dp-about-copy">เราดูแลตั้งแต่แนวคิด ออกแบบ ผลิต ไปจนถึงติดตั้งจริง ทั้งป้ายตัวอักษร ป้ายไฟ งานพิมพ์ เฟอร์นิเจอร์บิวท์อิน และงานตกแต่งพื้นที่ สำหรับร้านค้า แบรนด์ใหม่ โรงงาน โรงเรียน และสำนักงาน</p></Reveal><Reveal delay={0.25}><ContactButton children="เริ่มคุยโปรเจกต์" /></Reveal></section>;
}

function Services() {
  return <section className="dp-services" id="services"><div className="dp-shell"><Reveal><p className="dp-section-kicker">WHAT WE DO</p><h2 className="dp-display">SERVICES<span className="dp-dot">.</span></h2></Reveal><div className="dp-service-list">{SERVICES.map((service, i) => <Reveal key={service.id} delay={i * 0.06}><a href="/services" className="dp-service-item"><span className="dp-service-no">{String(i + 1).padStart(2, '0')}</span><span className="dp-service-body"><strong>{service.title.replace(/\s*\([^)]*\)/, '')}</strong><span>{service.description}</span></span><ArrowUpRight className="dp-service-arrow" size={25} aria-hidden="true" /></a></Reveal>)}</div><p className="dp-services-note">ออกแบบ · ผลิต · ติดตั้ง ครบในทีมเดียว</p></div></section>;
}

const FeaturedCard: React.FC<{ project: Project; index: number; total: number }> = ({ project, index, total }) => {
  const card = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: card, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * 0.025]);
  const photos = project.images.length >= 3 ? project.images.slice(0, 3) : [project.image, project.image, project.image];
  return <article ref={card} className="dp-sticky-wrap"><motion.div className="dp-project-card" style={{ top: `calc(5.5rem + ${index * 14}px)`, scale: reduce ? 1 : scale }}><div className="dp-project-meta"><span className="dp-project-no">{String(index + 1).padStart(2, '0')}</span><div><span className="dp-project-category">{project.category}</span><h3>{project.title}</h3></div></div><div className="dp-project-images"><div><img src={photos[0]} alt={`${project.title} ภาพที่ 1`} loading="lazy" /><img src={photos[1]} alt={`${project.title} ภาพที่ 2`} loading="lazy" /></div><img src={photos[2]} alt={`${project.title} ภาพที่ 3`} loading="lazy" /></div></motion.div></article>;
};

function Projects() {
  return <section className="dp-projects" id="projects"><div className="dp-shell"><Reveal><p className="dp-section-kicker">SELECTED PROJECTS / 2026</p><h2 className="dp-display dp-gradient">PROJECTS<span className="dp-dot">.</span></h2><p className="dp-project-intro">ผลงานจริงจากหน้างาน เลือกดูรายละเอียดและภาพเพิ่มเติมได้ในแกลเลอรีด้านล่าง</p></Reveal>{featured.map((project, index) => <FeaturedCard key={project.id} project={project} index={index} total={featured.length} />)}<a className="dp-all-work" href="/portfolio">ดูผลงานทั้งหมด <ArrowUpRight size={22} /></a></div></section>;
}

export default function DesignPreview() {
  useEffect(() => { document.body.classList.add('dp-body'); return () => document.body.classList.remove('dp-body'); }, []);
  return <div className="dp-page"><Hero /><ImageMarquee /><About /><Services /><Projects /></div>;
}
