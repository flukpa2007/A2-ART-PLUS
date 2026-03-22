import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

// --- 1. Import Swiper และ Modules ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// --- 2. Import Swiper Styles ---
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const marqueeImages = [
    "/images/bu/img-bu-01.jpg",
    "/images/bu/img-bu-03.jpg",
    "/images/bu/img-bu-02.jpg",
    "/images/bu/img-bu-04.jpg",
    "/images/bu/img-bu-05.jpg",
    "/images/bu/img-bu-06.jpg",
    "/images/bu/img-bu-07.jpg",
    "/images/bu/img-bu-08.jpg",
    "/images/bu/img-bu-09.jpg",
    "/images/bu/img-bu-10.jpg"
  ];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white flex items-center pt-32 pb-20 md:pt-10 md:pb-0">
      
      {/* --- ✅ Vertical Marquee (Desktop Only) - ไหลลื่นแบบ Infinity --- */}
      <div className="absolute right-0 top-0 bottom-0 w-[120px] lg:w-[420px] hidden md:block opacity-90 lg:opacity-90 z-0">
        <div className="relative h-full w-full overflow-hidden border-l border-zinc-50 bg-zinc-50/30">
          <motion.div 
            className="flex flex-col gap-4 p-4 absolute top-0 left-0 w-full"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          >
            {[...marqueeImages, ...marqueeImages].map((img, idx) => (
              <div key={idx} className="w-full aspect-[3/4] rounded-sm overflow-hidden border border-white shadow-sm bg-zinc-200">
                <img src={img} className="w-full h-full object-cover" alt="A2 Portfolio" />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white z-10" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* --- ✅ Mobile Swiper Slider (สไลด์เองอัตโนมัติ) --- */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full order-1 md:hidden block mb-4"
          >
            <div className="relative w-full h-[320px]">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={15}
                slidesPerView={1.2} 
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 1500, // สไลด์เปลี่ยนทุก 2.5 วินาที
                  disableOnInteraction: false, // แม้เราจะเอานิ้วไปปัด มันก็จะกลับมาสไลด์ต่อเอง
                }}
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-red-200',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-600'
                }}
                className="w-full h-full hero-swiper"
              >
                {marqueeImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                      <img src={img} className="w-full h-full object-cover" alt="mobile-showcase" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* --- Content Area --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-[65%] text-left lg:-ml-24 z-10 order-2"
          >
            <motion.div
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-zinc-50 border border-zinc-100 text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-10 shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              Premium Quality & Design
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-zinc-900 leading-[0.9] mb-10 uppercase text-left">
              Sign<br /> Furniture<br /> Built-in
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white text-sm font-bold rounded-sm flex items-center justify-center group shadow-xl shadow-red-600/10 transition-all active:scale-95">
                ดูผลงานของเรา <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-900 text-sm font-bold rounded-sm flex items-center justify-center transition-colors hover:bg-zinc-50">
                ติดต่อสอบถาม
              </a>
            </div>
          </motion.div>

          {/* --- Logo --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-[35%] flex justify-center lg:justify-start order-3 md:order-first"
          >
            <img 
              src="/images/logo-a2.png" 
              alt="Logo" 
              className="w-full max-w-[220px] md:max-w-[380px] h-auto object-contain drop-shadow-sm opacity-80 md:opacity-100"
            />
          </motion.div>

        </div>
      </div>
      <div className="absolute bottom-10 left-0 w-full h-[1px] bg-zinc-100" />

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-swiper .swiper-pagination { bottom: 0px !important; }
      `}} />
    </section>
  );
};

export default Hero;