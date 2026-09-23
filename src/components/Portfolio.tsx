import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');
  const categories = ['ทั้งหมด', ...new Set(PROJECTS.map((project) => project.category))];
  const visibleProjects = activeCategory === 'ทั้งหมด'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeCategory);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, closeLightbox]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t-2 border-zinc-900 pt-6 md:pt-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="text-red-600 font-bold tracking-[0.22em] uppercase text-xs">A2 ART PLUS / SELECTED WORKS</span>
              <h2 className="mt-4 text-[clamp(3.5rem,9vw,8rem)] leading-[0.95] font-black tracking-tight text-zinc-950">PORTFOLIO<span className="text-red-600">.</span></h2>
            </div>
            <p className="max-w-sm text-zinc-600 leading-relaxed lg:pb-2">ตัวอย่างงานป้ายไฟ LED ป้ายไวนิล และงานตกแต่งภายในของ A2 ART PLUS เลือกหมวดที่สนใจแล้วกดภาพเพื่อดูตัวอย่างเพิ่มเติม</p>
          </div>
        </div>
        <div className="mt-12 mb-9 flex flex-wrap gap-2" aria-label="เลือกหมวดผลงาน">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === category ? 'border-zinc-950 bg-zinc-950 text-white' : 'border-zinc-300 text-zinc-700 hover:border-red-600 hover:text-red-600'}`}>{category}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-12 md:gap-y-16">
          {visibleProjects.map((project, index) => (
            <motion.button
              type="button"
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.1, duration: 0.5 }}
              onClick={() => openLightbox(project)}
              className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
              aria-label={`ดูภาพผลงาน ${project.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-white text-zinc-950 transition-colors group-hover:bg-red-600 group-hover:text-white"><ArrowUpRight size={20} aria-hidden="true" /></span>
              </div>
              <div className="mt-5 border-t border-zinc-300 pt-4 flex items-start gap-4">
                <span className="pt-1 text-xs font-bold tabular-nums text-red-600">{String(index + 1).padStart(2, '0')}</span>
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-950 group-hover:text-red-600 transition-colors">{project.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{project.category}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center"
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-red-600 transition-colors p-2 z-50"
              >
                <X size={32} />
              </button>
              <div className="relative w-full aspect-[16/10] bg-zinc-900 rounded-lg overflow-hidden shadow-2xl">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={selectedProject.images.length > 1}
                  centeredSlides={true}
                  grabCursor={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ 
                    type: 'fraction',
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  className="w-full h-full portfolio-swiper"
                >
                  {selectedProject.images.map((img, idx) => (
                    <SwiperSlide key={idx} className="flex items-center justify-center">
                      <img
                        src={img}
                        alt={`${selectedProject.title} ภาพที่ ${idx + 1}`}
                        className="w-full h-full object-contain select-none"
                        referrerPolicy="no-referrer"
                      />
                    </SwiperSlide>
                  ))}

                  {selectedProject.images.length > 1 && (
                    <>
                      <div className="swiper-button-prev !text-white !after:text-2xl hover:!text-red-600 transition-colors"></div>
                      <div className="swiper-button-next !text-white !after:text-2xl hover:!text-red-600 transition-colors"></div>
                    </>
                  )}
                </Swiper>
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <h4 className="text-white text-xl md:text-2xl font-bold mb-2 uppercase tracking-tight">
                  {selectedProject.title}
                </h4>
                <p className="text-red-500 text-xs font-bold uppercase tracking-[0.2em]">
                  {selectedProject.category}
                </p>
              </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{ __html: `
              .portfolio-swiper .swiper-pagination-fraction {
                color: rgba(255, 255, 255, 0.6) !important;
                bottom: 20px !important;
                font-weight: bold;
                font-size: 0.875rem;
              }
              .swiper-button-prev:after, .swiper-button-next:after {
                font-size: 24px !important;
              }
            `}} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
