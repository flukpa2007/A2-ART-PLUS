import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

// --- Import Swiper.js ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// --- Import Swiper Styles ---
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ServiceCard: React.FC<{ service: Service; index: number; onClick: () => void }> = ({ service, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && service.gallery && service.gallery.length > 1) {
      interval = setInterval(() => {
        setPreviewIndex((prev) => (prev + 1) % service.gallery.length);
      }, 1200);
    } else {
      setPreviewIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, service.gallery]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer flex flex-col snap-center shrink-0 w-[85%] md:w-full border border-zinc-100"
    >
      <div className="relative h-72 overflow-hidden shrink-0 bg-zinc-100">
        <AnimatePresence mode="wait">
          <motion.img 
            key={isHovered ? service.gallery[previewIndex] : service.image}
            src={isHovered ? service.gallery[previewIndex] : service.image} 
            alt={service.title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: isHovered ? 1.15 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
        
        <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-sm shadow-md">
           <span className="text-[10px] font-bold text-white uppercase tracking-wider">
             {service.title.match(/\(([^)]+)\)/)?.[1] || 'Portfolio'}
           </span>
        </div>
      </div>
      
      <div className="p-8 md:p-10 flex-grow flex flex-col">
        <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300 text-zinc-900 leading-tight">
          {service.title.split(' (')[0]}
        </h4>
        <p className="text-zinc-500 leading-relaxed mb-3 line-clamp-2 text-sm">
          {service.description}
        </p>
        <div className="mt-auto pt-4 border-t border-zinc-50 flex items-center justify-between">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Explore More</span>
          <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <section id="services" className="pt-15 pb-10 bg-[#f8f8f8] text-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* ... Header Section ... */}
        <div className="mb-15 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our services</motion.span>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">ออกแบบ ผลิต และติดตั้งครบจบในที่เดียว</motion.h3>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} onClick={() => setSelectedService(service)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-zinc-900/95 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-6xl h-[90vh] md:h-[85vh] overflow-hidden rounded-xl relative shadow-2xl flex flex-col-reverse lg:flex-row border border-zinc-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 z-50 p-2 bg-white/80 backdrop-blur-md hover:bg-red-600 hover:text-white rounded-full transition-all border border-zinc-100 shadow-sm"><X className="w-5 h-5" /></button>

              {/* ฝั่งรูปภาพ (ฉบับคลีน 100%) */}
              <div 
                className="w-full h-[45%] lg:h-full lg:w-[60%] relative group/swiper order-2 lg:order-2 overflow-hidden"
                data-lenis-prevent
              >
                <Swiper
                  modules={[Pagination, Autoplay, EffectFade]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  pagination={{ 
                    clickable: true,
                    dynamicBullets: true 
                  }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={selectedService.gallery.length > 1}
                  className="w-full h-full"
                >
                  {selectedService.gallery.map((img, idx) => (
                    // 🔥 เอาพื้นหลังเทาและ Padding ออกหมด
                    <SwiperSlide key={idx} className="flex items-center justify-center bg-white">
                      <img 
                        src={img} 
                        alt={`${selectedService.title} ${idx + 1}`} 
                        className="w-full h-full object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ฝั่งเนื้อหา */}
              <div className="w-full h-[55%] lg:h-full lg:w-[40%] p-6 md:p-12 bg-white flex flex-col order-1 lg:order-1 overflow-y-auto custom-scrollbar-hide" data-lenis-prevent>
                <div className="flex-grow">
                  <h2 className="text-2xl md:text-4xl font-black text-zinc-900 mb-4 lg:mb-6 leading-tight uppercase">
                    {selectedService.title.split(' (')[0]}
                  </h2>
                  <span className="block text-sm md:text-lg font-medium text-zinc-400 mb-4 lg:mb-6 uppercase tracking-wider">
                    {selectedService.title.match(/\(([^)]+)\)/)?.[1] || 'Portfolio'}
                  </span>
                  <div className="w-12 md:w-16 h-1 md:h-1.5 bg-red-600 mb-6 lg:mb-10 rounded-full" />
                  <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-6 lg:mb-8">{selectedService.article}</p>
                </div>
                
                <div className="mt-auto pt-4">
                   <button 
                    onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 md:py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-zinc-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
                   >
                     เริ่มโปรเจกต์กับเรา <ArrowRight size={18} />
                   </button>
                </div>
              </div>

              <style dangerouslySetInnerHTML={{ __html: `
                .swiper-pagination-bullet-active { background: #dc2626 !important; }
                .swiper-pagination-bullet { background: #a1a1aa; opacity: 0.5; }
                .swiper-pagination { bottom: 15px !important; }
                
                .custom-scrollbar-hide::-webkit-scrollbar { display: none; }
                .custom-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
              `}} />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;