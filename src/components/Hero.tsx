import React, { useEffect, useState } from 'react';
import { ArrowRight, Facebook, MessageCircle, Phone } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const featuredProjectGroups = [
  [10, 13, 11],
  [9, 2, 1],
  [5, 6, 7],
  [7, 12, 3],
  [12, 4, 10],
].map((ids) => ids
  .map((id) => PROJECTS.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project)));

const FadingProjectCard: React.FC<{ projects: Project[]; index: number }> = ({ projects, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || projects.length < 2) return;
    let interval: number;
    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
      interval = window.setInterval(() => {
        if (!document.hidden) setActiveIndex((current) => (current + 1) % projects.length);
      }, 6500);
    }, 6500 + index * 1200);
    return () => { window.clearTimeout(timeout); window.clearInterval(interval); };
  }, [index, projects, reduceMotion]);

  const project = projects[activeIndex];
  if (!project) return null;

  return (
    <a
      href="#portfolio"
      className={`group relative block overflow-hidden rounded-2xl bg-zinc-900 ${index === 0 ? 'col-span-2 h-64 sm:h-80 lg:h-auto lg:row-span-2' : 'h-32 sm:h-40 lg:h-auto'}`}
      aria-label={`ดูผลงาน ${project.title}`}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={project.image}
          src={project.image}
          alt={project.title}
          loading={index === 0 && activeIndex === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 && activeIndex === 0 ? 'high' : undefined}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-3 pt-9 text-xs font-semibold leading-snug text-white lg:text-sm">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={project.id}
            className="block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          >{project.title}</motion.span>
        </AnimatePresence>
      </span>
    </a>
  );
};

const Hero: React.FC = () => {
  return (
    <header id="home" className="bg-zinc-950 text-white pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-12 lg:gap-16">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm text-zinc-300 mb-7">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            บริษัท เอทู อาร์ท พลัส จำกัด · ศรีราชา ชลบุรี
          </span>
          <h1 className="text-[clamp(2.5rem,4.3vw,4.5rem)] font-bold leading-[1.3] tracking-normal max-w-2xl">
            รับทำป้ายที่<span className="text-red-500">โดดเด่น</span><br />
            งานบิวท์อินที่<span className="text-red-500">ลงตัว</span>
          </h1>
          <p className="mt-7 max-w-xl text-zinc-300 text-base md:text-lg leading-8">
            ออกแบบ ผลิต และติดตั้งป้ายตัวอักษร ป้ายไฟ LED สติกเกอร์ ป้ายไวนิล และงานบิวท์อิน เลือกดูบริการและผลงานของ A2 ART PLUS ก่อนคุยรายละเอียดงานกับทีมเรา
          </p>

          <div className="mt-9 max-w-xl">
            <p className="mb-3 text-sm font-semibold text-zinc-300">คุยเรื่องงานกับทีมเราได้เลย</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="https://www.facebook.com/profile.php?id=61566587472075" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-bold hover:border-red-500 hover:bg-zinc-800 transition-colors"><Facebook className="h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />Facebook</a>
              <a href="https://lin.ee/S48LXeM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-bold hover:border-red-500 hover:bg-zinc-800 transition-colors"><MessageCircle className="h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />LINE</a>
              <a href="tel:0876349997" className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-bold hover:border-red-500 hover:bg-zinc-800 transition-colors"><Phone className="h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />โทรหาเรา</a>
            </div>
            <p className="mt-3 text-xs text-zinc-400">โทรศัพท์ 087-634-9997 · ศรีราชา ชลบุรี</p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-bold hover:bg-red-700 transition-colors">ดูผลงาน <ArrowRight size={18} /></a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-zinc-600 px-6 py-3.5 text-sm font-bold hover:border-white transition-colors">ปรึกษางานกับเรา</a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 min-w-0 lg:h-[470px]" aria-label="ภาพผลงานของ A2 ART PLUS">
          {featuredProjectGroups.map((projects, index) => (
            <FadingProjectCard key={index} projects={projects} index={index} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
