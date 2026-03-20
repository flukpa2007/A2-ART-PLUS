import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

// --- Component ย่อย: การ์ดสไตล์ Octopus (Hover แล้วเล่นรูป + ซูม) ---
const ServiceCard = ({ service, index, onClick }: { service: Service, index: number, onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  // Logic สลับรูปตอน Hover (ฟีลแบบส่องดูผลงานเร็วๆ)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && service.gallery && service.gallery.length > 1) {
      interval = setInterval(() => {
        setPreviewIndex((prev) => (prev + 1) % service.gallery.length);
      }, 1200); // ความเร็วในการเปลี่ยนรูป (1.2 วินาทีกำลังดีครับ)
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
      {/* ส่วนรูปภาพ: หัวใจของ Octopus Style คือการ Zoom & Switch */}
      <div className="relative h-72 overflow-hidden shrink-0 bg-zinc-100">
        <AnimatePresence mode="wait">
          <motion.img 
            key={isHovered ? service.gallery[previewIndex] : service.image}
            src={isHovered ? service.gallery[previewIndex] : service.image} 
            alt={service.title}
            // แอนิเมชันตอนเปลี่ยนรูป (Fade + Scale)
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: isHovered ? 1.15 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Overlay จางๆ ให้ดูแพง */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

        {/* ป้าย Tag เล็กๆ บอกชื่อภาษาอังกฤษ (ถ้ามี) */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
           <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">
             {service.title.match(/\(([^)]+)\)/)?.[1] || 'Portfolio'}
           </span>
        </div>
      </div>
      
      {/* เนื้อหาด้านล่าง: เน้นความสะอาดตา */}
      <div className="p-8 flex-grow flex flex-col">
        <h4 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
          {service.title.split(' (')[0]}
        </h4>
        <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2">
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

// --- Main Component ---
const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedService || !selectedService.gallery || selectedService.gallery.length <= 1) {
      setCurrentImageIndex(0);
      return;
    }
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedService.gallery.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [selectedService]); 

  return (
    <section id="services" className="pt-24 pb-32 bg-[#f8f8f8] text-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Our services 
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900"
          >
            ออกแบบ ผลิต และติดตั้งครบจบในที่เดียว
          </motion.h3>
        </div>

        {/* สไลด์มือถือ / Grid คอม */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible scrollbar-hide">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              onClick={() => setSelectedService(service)} 
            />
          ))}
        </div>
      </div>

      {/* Modal - ใช้ระบบ Drag & Contain เหมือนเดิมที่ตกลงกันไว้ */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-zinc-900/95 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-7xl max-h-[95vh] overflow-y-auto rounded-xl relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedService(null)} className="absolute top-5 right-5 z-20 p-2 bg-zinc-100 hover:bg-red-600 hover:text-white rounded-full transition-all">
                <X className="w-5 h-5" />
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr]">
                <div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-100">
                  <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                    {selectedService.title.split(' (')[0]}
                    <span className="block text-xl md:text-3xl font-medium text-zinc-400 mt-2">{selectedService.title.match(/\(([^)]+)\)/)?.[1]}</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-red-600 mb-10" />
                  <p className="text-zinc-600 text-lg leading-relaxed">{selectedService.article}</p>
                </div>
                <div className="bg-zinc-50 p-6 md:p-10 flex flex-col justify-center items-center">
                  <p className="text-zinc-400 text-[10px] font-bold mb-5 tracking-widest uppercase text-center">Drag to see more</p>
                  <div className="relative w-full aspect-square max-h-[75vh] rounded-lg overflow-hidden bg-white shadow-inner flex items-center justify-center cursor-grab active:cursor-grabbing">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={selectedService.gallery[currentImageIndex]}
                        src={selectedService.gallery[currentImageIndex]} 
                        alt={selectedService.title}
                        drag="x" dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -50) setCurrentImageIndex((p) => (p + 1) % selectedService.gallery.length);
                          else if (info.offset.x > 50) setCurrentImageIndex((p) => (p - 1 + selectedService.gallery.length) % selectedService.gallery.length);
                        }}
                        initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }}
                        className="absolute inset-0 w-full h-full object-contain p-4"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>
                  </div>
                  {selectedService.gallery.length > 1 && (
                    <div className="flex justify-center gap-3 mt-10">
                      {selectedService.gallery.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`h-2 transition-all rounded-full ${idx === currentImageIndex ? 'w-12 bg-red-600' : 'w-2.5 bg-zinc-200'}`} />
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