import React, { useEffect, useState } from 'react';
import { ArrowRight, Facebook, MessageCircle, Phone } from 'lucide-react';
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

const Hero: React.FC = () => {
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
