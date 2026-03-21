import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  }, [selectedProject]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, closeLightbox, nextImage, prevImage]);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
              ตัวอย่างผลงาน
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
  <motion.div 
    key={project.id}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.02 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    onClick={() => openLightbox(project)}
    className="relative aspect-[16/10] overflow-hidden rounded-sm group cursor-pointer shadow-lg"
  >
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
      referrerPolicy="no-referrer"
      onError={(e) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800";
      }}
    />

    {/*Overlay*/}
    <div className={`
      absolute inset-0 bg-zinc-900/60 flex flex-col justify-center items-center p-6 text-center transition-all duration-500
      
      /* ในมือถือโชว์ตลอด (opacity-100) | ในคอมซ่อนก่อน (md:opacity-0) และโชว์ตอน hover */
      opacity-100 md:opacity-0 md:group-hover:opacity-100
    `}>
      {/* category */}
      <p className="text-red-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 md:mb-3">
        {project.category}
      </p>

      {/* title */}
      <h4 className="text-white text-lg md:text-3xl font-bold mb-4 md:mb-6 leading-tight max-w-[280px]">
        {project.title}
      </h4>

      {/* redline */}
      <div className="w-30 md:w-12 h-0.5 md:h-1 bg-red-600 mb-6" />


    </div>
  </motion.div>
))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-red-600 transition-colors p-2"
              >
                <X size={32} />
              </button>

              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] bg-zinc-900 rounded-lg overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={selectedProject.images[currentIndex]}
                    alt={`${selectedProject.title} - ${currentIndex + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Caption & Counter */}
              <div className="mt-6 text-center">
                <h4 className="text-white text-xl font-bold mb-2">{selectedProject.title}</h4>
                <p className="text-white/50 text-sm font-medium">
                  Image {currentIndex + 1} of {selectedProject.images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
