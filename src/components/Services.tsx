import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ระบบสลับรูปอัตโนมัติ (เปลี่ยนทุก 4 วินาที)
  useEffect(() => {
    if (!selectedService || !selectedService.gallery || selectedService.gallery.length <= 1) {
      setCurrentImageIndex(0);
      return;
    }

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedService.gallery.length
      );
    }, 4000); 

    return () => clearInterval(timer);
  }, [selectedService]); 

  return (
    <section id="services" className="pt-20 pb-32 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight break-words"
          >
            บริการออกแบบ ผลิต และติดตั้ง
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="bg-zinc-800 rounded-sm overflow-hidden border border-zinc-700 shadow-xl hover:shadow-red-600/10 transition-all group cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-6 left-6 bg-red-600 p-4 rounded-sm shadow-lg text-white">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-10 flex-grow">
                <h4 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">{service.title}</h4>
                <p className="text-zinc-400 leading-relaxed mb-8 line-clamp-3 break-words">
                  {service.description}
                </p>
                <div className="flex items-center text-red-600 font-bold text-sm uppercase tracking-wider">
                  ดูรายละเอียดเพิ่มเติม <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-zinc-900/95 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-7xl max-h-[95vh] overflow-y-auto rounded-md relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                onClick={() => setSelectedService(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-5 right-5 z-20 p-2 bg-zinc-100 hover:bg-red-600 hover:text-white rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* ปรับสัดส่วน Grid ให้รูปกว้างกว่าเนื้อหา */}
              <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr]">
                
                {/* ฝั่งซ้าย: เนื้อหา */}
                <div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-100">
                  <div className="text-red-600 mb-6 scale-125 lg:scale-150 origin-left">
                    {selectedService.icon}
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                    {selectedService.title.split(' (')[0]}
                    <span className="block text-xl md:text-3xl font-medium text-zinc-400 mt-2 tracking-normal normal-case">
                      {selectedService.title.match(/\(([^)]+)\)/)?.[1]}
                    </span>
                  </h2>

                  <div className="w-20 h-1.5 bg-red-600 mb-10" />
                  <div className="prose prose-zinc max-w-none mb-12">
                    <p className="text-zinc-600 text-lg md:text-xl leading-relaxed break-words">
                      {selectedService.article}
                    </p>
                  </div>

                  <motion.button 
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 text-white px-10 py-5 text-lg font-bold rounded-sm hover:bg-zinc-900 transition-all inline-flex items-center shadow-lg shadow-red-600/20 w-fit"
                  >
                    ปรึกษาเราตอนนี้ <ArrowRight className="ml-3 w-6 h-6" />
                  </motion.button>
                </div>

                {/* ฝั่งขวา: รูปภาพ (ขยายพื้นที่สุดๆ) */}
                <div className="bg-zinc-50 p-6 md:p-10 flex flex-col justify-center items-center">
                  <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-5 text-center">
                    Click & Drag to Swipe
                  </p>
                  
                  <div className="relative w-full aspect-square max-h-[70vh] rounded-md overflow-hidden shadow-xl bg-zinc-200 flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-white">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={selectedService.gallery[currentImageIndex]}
                        src={selectedService.gallery[currentImageIndex]} 
                        alt={selectedService.title}
                        
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(_, info) => {
                          const swipeThreshold = 50;
                          if (info.offset.x < -swipeThreshold) {
                            setCurrentImageIndex((prev) => (prev + 1) % selectedService.gallery.length);
                          } else if (info.offset.x > swipeThreshold) {
                            setCurrentImageIndex((prev) => (prev - 1 + selectedService.gallery.length) % selectedService.gallery.length);
                          }
                        }}

                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="absolute inset-0 w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    </AnimatePresence>
                  </div>
                  
                  {/* Indicator ปรับให้ยาวขึ้นดูพรีเมียม */}
                  {selectedService.gallery && selectedService.gallery.length > 1 && (
                    <div className="flex justify-center gap-3 mt-10">
                        {selectedService.gallery.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(idx);
                                }}
                                className={`h-2 transition-all rounded-full ${idx === currentImageIndex ? 'w-12 bg-red-600' : 'w-2.5 bg-zinc-200 hover:bg-zinc-300'}`}
                            />
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;