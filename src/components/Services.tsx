import React, { useState, useEffect } from 'react'; // 1. เพิ่ม useEffect
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  // 2. เพิ่ม State เก็บ Index ของรูปภาพปัจจุบันใน Modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 3. Logic สำหรับสลับรูปภาพอัตโนมัติ (Image Slideshow)
  useEffect(() => {
    // ถ้าไม่ได้เปิด Modal หรือ Service นั้นไม่มีรูปใน Gallery ไม่ต้องทำอะไร
    if (!selectedService || !selectedService.gallery || selectedService.gallery.length <= 1) {
      setCurrentImageIndex(0); // Reset กลับไปรูปแรกทุกครั้งที่ปิด/เปิดใหม่
      return;
    }

    // สร้าง Timer ให้สลับรูปทุกๆ 2 วินาที 2000ms)
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        // ถ้าถึงรูปสุดท้าย ให้วนกลับไปรูปแรก
        (prevIndex + 1) % selectedService.gallery.length
      );
    }, 2000); 

    // สำคัญ: Clean up timer ทุกครั้งที่ Modal ปิด เพื่อไม่ให้ Timer ค้างในเครื่อง
    return () => clearInterval(timer);
  }, [selectedService]); // สั่งให้ทำงานทุกครั้งที่ selectedService เปลี่ยน

  return (
    <section id="services" className="pt-20 pb-32 bg-zinc-900 text-white">
      {/* ... โค้ดส่วน Our Services ด้านบนเหมือนเดิม ... */}
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-zinc-900/95 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                onClick={() => setSelectedService(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-10 p-2 bg-zinc-100 hover:bg-red-600 hover:text-white rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </motion.button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="text-red-600 mb-6">
                    {selectedService.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">{selectedService.title}</h2>
                  <div className="w-16 h-1 bg-red-600 mb-8" />
                  
                  <div className="prose prose-zinc max-w-none">
                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8 break-words">
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
                    className="bg-red-600 text-white px-8 py-4 font-bold rounded-sm hover:bg-zinc-900 transition-all inline-flex items-center shadow-lg shadow-red-600/20"
                  >
                    ปรึกษาเราตอนนี้ <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </div>

                {/* --- ส่วนขวา (รูปภาพ): ที่เราจะทำ Slideshow --- */}
                <div className="bg-zinc-50 p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-sm">รูปภาพตัวอย่างงาน</h4>
                  
                  {/* Container สำหรับรูปภาพ ต้องใส่ overflow-hidden */}
                  <div className="relative w-full aspect-video rounded-sm overflow-hidden shadow-md bg-zinc-100">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        // **สำคัญ:** ใส่ key เพื่อให้ Framer Motion รู้ว่านี่คือรูปใหม่
                        key={selectedService.gallery[currentImageIndex]}
                        src={selectedService.gallery[currentImageIndex]} 
                        alt={selectedService.title}
                        // แอนิเมชัน Fade (opacity)
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    </AnimatePresence>
                  </div>
                  
                  {/* (Optional) ส่วนบ่งชี้ว่ามีกี่รูป และอยู่รูปที่เท่าไหร่ */}
                  {selectedService.gallery && selectedService.gallery.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                        {selectedService.gallery.map((_, idx) => (
                            <div 
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-red-600' : 'bg-zinc-300'}`}
                            />
                        ))}
                    </div>
                  )}
                </div>
                {/* ----------------------------------------------- */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;