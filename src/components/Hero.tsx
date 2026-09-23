import React, { useEffect, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type GallerySlide = { src: string; alt: string };

const heroGallery: GallerySlide[] = [
  { src: '/images/letter/img-letter-02.webp', alt: 'ตัวอย่างงานป้ายตัวอักษร' },
  { src: '/images/letter/img-letter-03.webp', alt: 'ตัวอย่างป้ายตัวอักษรอีกแบบ' },
  { src: '/images/letter/img-letter-05.webp', alt: 'ภาพงานป้ายตัวอักษรของ A2 ART PLUS' },
];

const ledGallery: GallerySlide[] = [
  { src: '/images/led/img-led-08.webp', alt: 'ตัวอย่างงานป้ายไฟ LED' },
  { src: '/images/led/img-led-01.webp', alt: 'ตัวอย่างป้ายไฟ LED อีกแบบ' },
  { src: '/images/led/img-led-03.webp', alt: 'ภาพงานป้ายไฟ LED ของ A2 ART PLUS' },
];

const interiorGallery: GallerySlide[] = [
  { src: '/images/bu/img-bu-03.webp', alt: 'ตัวอย่างงานบิวท์อิน' },
  { src: '/images/bu/img-bu-01.webp', alt: 'ตัวอย่างงานบิวท์อินอีกแบบ' },
  { src: '/images/bu/img-bu-05.webp', alt: 'ภาพงานบิวท์อินของ A2 ART PLUS' },
];

const FadingImage: React.FC<{ slides: GallerySlide[]; offset: number; priority?: boolean }> = ({ slides, offset, priority = false }) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    let interval: number;
    const timeout = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
      interval = window.setInterval(() => {
        if (!document.hidden) setIndex((current) => (current + 1) % slides.length);
      }, 6000);
    }, 6000 + offset);
    return () => { window.clearTimeout(timeout); window.clearInterval(interval); };
  }, [reduceMotion, slides, offset]);

  useEffect(() => {
    if (reduceMotion) return;
    const next = new Image();
    next.src = slides[(index + 1) % slides.length].src;
  }, [index, reduceMotion, slides]);

  const slide = slides[index];
  return (
    <AnimatePresence initial={false}>
      <motion.img
        key={slide.src}
        src={slide.src}
        alt={slide.alt}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: 'easeInOut' }}
        fetchPriority={priority && index === 0 ? 'high' : undefined}
        loading={priority && index === 0 ? 'eager' : 'lazy'}
      />
    </AnimatePresence>
  );
};

type HeroProps = {
  onSearch: (query: string) => void;
};

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(search.trim());
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home" className="bg-zinc-950 text-white pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-12 lg:gap-16">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm text-zinc-300 mb-7">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            บริษัท เอทู อาร์ท พลัส จำกัด · ศรีราชา ชลบุรี
          </span>
          <h1 className="text-[clamp(2.7rem,5vw,5rem)] font-black leading-[1.12] tracking-tight max-w-2xl">
            รับทำป้ายที่<span className="text-red-500">โดดเด่น</span><br />
            งานบิวท์อินที่<span className="text-red-500">ลงตัว</span>
          </h1>
          <p className="mt-7 max-w-xl text-zinc-300 text-base md:text-lg leading-8">
            ออกแบบ ผลิต และติดตั้งป้ายตัวอักษร ป้ายไฟ LED สติกเกอร์ ป้ายไวนิล และงานบิวท์อิน เลือกดูบริการและผลงานของ A2 ART PLUS ก่อนคุยรายละเอียดงานกับทีมเรา
          </p>

          <form onSubmit={submitSearch} role="search" className="mt-9 max-w-xl flex items-center bg-white rounded-xl p-1.5 shadow-xl shadow-black/20">
            <Search className="w-5 h-5 text-zinc-400 mx-3 shrink-0" aria-hidden="true" />
            <label className="sr-only" htmlFor="site-search">ค้นหาบริการหรือผลงาน</label>
            <input id="site-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="ค้นหา เช่น ป้ายไฟ สติกเกอร์ คลินิก" className="min-w-0 flex-1 py-3 text-sm md:text-base text-zinc-900 placeholder:text-zinc-400 outline-none" />
            <button type="submit" className="rounded-lg bg-red-600 hover:bg-red-700 px-4 md:px-6 py-3 text-sm font-bold text-white transition-colors">ค้นหา</button>
          </form>
          <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
            {['ป้ายตัวอักษร', 'ป้ายไฟ LED', 'สติกเกอร์', 'ไวนิล', 'บิวท์อิน'].map((term) => (
              <button key={term} type="button" onClick={() => { setSearch(term); onSearch(term); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="rounded-full border border-zinc-700 px-3 py-1.5 text-zinc-300 hover:border-red-500 hover:text-white transition-colors">{term}</button>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-bold hover:bg-red-700 transition-colors">ดูผลงาน <ArrowRight size={18} /></a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-zinc-600 px-6 py-3.5 text-sm font-bold hover:border-white transition-colors">ปรึกษางานกับเรา</a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 min-w-0" aria-label="ภาพตัวอย่างงานของ A2 ART PLUS">
          <div className="col-span-2 relative overflow-hidden rounded-2xl h-56 sm:h-72 lg:h-80">
            <FadingImage slides={heroGallery} offset={0} priority />
            <span className="absolute bottom-4 left-4 rounded-full bg-zinc-950/85 px-4 py-2 text-xs font-bold">SIGNAGE · ป้ายตัวอักษร</span>
          </div>
          <div className="relative overflow-hidden rounded-2xl h-40 sm:h-52 lg:h-56">
            <FadingImage slides={ledGallery} offset={2000} />
          </div>
          <div className="relative overflow-hidden rounded-2xl h-40 sm:h-52 lg:h-56">
            <FadingImage slides={interiorGallery} offset={4000} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
