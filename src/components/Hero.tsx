import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const marqueeImages = [
    "/images/bu/img-bu-01.webp",
    "/images/bu/img-bu-03.webp",
    "/images/bu/img-bu-02.webp",
    "/images/bu/img-bu-04.webp",
    "/images/bu/img-bu-05.webp",
    "/images/bu/img-bu-06.webp",
    "/images/bu/img-bu-07.webp",
    "/images/bu/img-bu-08.webp",
    "/images/bu/img-bu-09.webp",
    "/images/bu/img-bu-10.webp"
  ];

  return (
    <header id="home" className="relative min-h-screen w-full overflow-hidden bg-white flex items-center pt-32 pb-20 md:pt-10 md:pb-0">
      
      <div className="absolute right-0 top-0 bottom-0 w-[min(25vw,400px)] hidden lg:block opacity-90 z-0">
        <div className="relative h-full w-full overflow-hidden border-l border-zinc-50 bg-zinc-50/30">
          <motion.div 
            className="flex flex-col gap-4 p-4 absolute top-0 left-0 w-full"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          >
            {[...marqueeImages, ...marqueeImages].map((img, idx) => (
              <div key={idx} className="w-full aspect-[3/4] rounded-sm overflow-hidden border border-white shadow-sm bg-zinc-200">
                <img src={img} className="w-full h-full object-cover" alt="ตัวอย่างงานบิวท์อินและตกแต่งภายในของ A2 ART PLUS" />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white z-10" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:pr-[min(27vw,430px)] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          

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
                  delay: 1500, 
                  disableOnInteraction: false, 
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
  <div className="w-full h-full rounded-sm overflow-hidden border border-white shadow-sm bg-zinc-200 select-none">
    <img 
      src={img} 
      className="w-full h-full object-cover" 
      alt="ตัวอย่างงานบิวท์อินและตกแต่งภายในของ A2 ART PLUS" 
      loading="eager" 
      fetchPriority="high" 
    />
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
            className="w-full lg:w-[48%] min-w-0 text-left z-10 order-2 lg:py-16"
          >
            <motion.div
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-medium mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              บริษัท เอทู อาร์ท พลัส จำกัด
            </motion.div>

            <h1 className="text-[clamp(2.75rem,4.2vw,4.5rem)] font-extrabold tracking-tight text-zinc-900 leading-[1.14] mb-6 text-left">
              ป้ายที่ใช่<br />พื้นที่ที่<span className="text-red-600">ลงตัว</span><br /><span className="text-zinc-500">ในศรีราชา</span>
            </h1>

            <p className="max-w-lg border-l-4 border-red-600 pl-5 text-zinc-600 text-sm sm:text-base leading-7 mb-8">A2 ART PLUS รับออกแบบ ผลิต และติดตั้งป้ายตัวอักษร ป้ายไฟ LED สติกเกอร์ ป้ายไวนิล และงานบิวท์อิน ในศรีราชา ชลบุรี ดูผลงานจริงแล้วคุยรูปแบบงานที่เหมาะกับพื้นที่ของคุณ</p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white text-sm font-bold rounded-lg flex items-center justify-center group shadow-xl shadow-red-600/10 transition-all hover:bg-red-700 active:scale-95">
                ดูผลงานของเรา <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-300 text-zinc-900 text-sm font-bold rounded-lg flex items-center justify-center transition-colors hover:bg-zinc-50">
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
              src="/logo/logo-a2.png" 
              alt="โลโก้ A2 ART PLUS" 
              className="w-full max-w-[220px] md:max-w-[380px] h-auto object-contain drop-shadow-sm opacity-80 md:opacity-100"
            />
          </motion.div>

        </div>
      </div>
      <div className="absolute bottom-10 left-0 w-full h-[1px] bg-zinc-100" />

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-swiper .swiper-pagination { bottom: 0px !important; }
      `}} />
    </header>
  );
};

export default Hero;
