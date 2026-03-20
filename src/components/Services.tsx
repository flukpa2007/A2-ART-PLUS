import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

// --- Component ย่อย: การ์ดหน้าหลัก (สไตล์คลีนสีขาว) ---
const ServiceCard = ({ service, index, onClick }: { service: Service; index: number; onClick: () => void }) => {
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
      // ปรับเป็นพื้นหลังขาว และขอบเทาจางๆ ตามรูปครับ
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
        
        {/* Tag สีแดงโดดเด่น */}
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
        <p className="text-zinc-500 leading-relaxed mb-6 line-clamp-2 text-sm">
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

  return (
    <section id="services" className="pt-24 pb-32 bg-[#f8f8f8] text-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* ส่วนหัวจัดกึ่งกลางตามรูปเป๊ะ */}
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

      {/* Modal - แบบเรียงรูปภาพยาว (Locked Info Left / Scroll Gallery Right) */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-zinc-900/95 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-xl relative shadow-2xl flex flex-col lg:flex-row border border-zinc-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)} 
                className="absolute top-5 right-5 z-20 p-2 bg-white hover:bg-red-600 hover:text-white rounded-full transition-all border border-zinc-100 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* ฝั่งซ้าย: เนื้อหา (ล็อคตายตัว) */}
              <div className="w-full lg:w-[40%] p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-100 bg-white flex flex-col shrink-0">
                <div className="overflow-y-auto">
                  <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-6 leading-tight">
                    {selectedService.title.split(' (')[0]}
                  </h2>
                  <span className="block text-lg font-medium text-zinc-400 mb-6 uppercase tracking-wider">
                    {selectedService.title.match(/\(([^)]+)\)/)?.[1] || 'Our Works'}
                  </span>
                  <div className="w-16 h-1.5 bg-red-600 mb-10 rounded-full" />
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8">{selectedService.article}</p>
                </div>
                
                <div className="mt-auto">
                   <button 
                    onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-zinc-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
                   >
                     เริ่มโปรเจกต์กับเรา <ArrowRight size={18} />
                   </button>
                </div>
              </div>

              {/* ฝั่งขวา: แกลเลอรีรูปภาพ (เรียงยาวลงมา) */}
              <div className="w-full lg:w-[60%] bg-zinc-50 overflow-y-auto p-4 md:p-8">
                <div className="flex flex-col gap-6">
                  {selectedService.gallery.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-full rounded-lg overflow-hidden bg-white shadow-sm border border-zinc-100"
                    >
                      <img 
                        src={img} 
                        alt={`${selectedService.title} ${idx + 1}`} 
                        className="w-full h-auto object-contain p-1"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="py-12 text-center">
                  <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em]">End of Portfolio</p>
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