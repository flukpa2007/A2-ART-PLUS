import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <section id="portfolio" className="py-20 md:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">ผลงานที่<span className="text-red-600">เล่าเรื่องได้</span></h2>
            <p className="mt-5 max-w-2xl text-zinc-600 leading-relaxed">ตัวอย่างงานตกแต่งภายในสำหรับคลินิก คาเฟ่ ห้องประชุม และออฟฟิศ เลือกดูภาพเพิ่มเติมได้ในแต่ละโครงการ</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openLightbox(project)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

              </div>
              <div className="p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-600">{project.category}</p>
                <h3 className="mt-1 text-xl font-bold text-zinc-900">{project.title}</h3>
                <p className="mt-3 text-sm font-semibold text-zinc-500 group-hover:text-red-600 transition-colors">ดูภาพโครงการเพิ่มเติม →</p>
              </div>
            </motion.div>
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
