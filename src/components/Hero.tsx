import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const marqueeImages = [
    "/images/letter/img-letter-01.jpg",
    "/images/led/img-led-01.jpg",
    "/images/stk/img-stk-02.jpg",
    "/images/bu/img-bu-01.jpg",
    "/images/letter/img-letter-03.jpg",
    "/images/led/img-led-02.jpg",
    "/images/stk/img-stk-03.jpg",
    "/images/bu/img-bu-02.jpg",
  ];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white flex items-center pt-32 pb-20 md:pt-10 md:pb-0">
      
      {/* --- Vertical Marquee (แสดงผลเฉพาะจอคอม) --- */}
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
          
          {/* --- ส่วนที่ 1: แถบรูปวิ่งในมือถือ (แสดงเฉพาะ Mobile แทนที่โลโก้เดิม) --- */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            // order-1: ให้ขึ้นก่อนในมือถือ | md:hidden: ซ่อนในคอม
            className="w-full order-1 md:hidden block mb-4"
          >
            <div className="relative h-[250px] w-full overflow-hidden rounded-xl border border-zinc-100 shadow-inner bg-zinc-50">
               <motion.div 
                className="flex gap-4 p-4 absolute left-0"
                animate={{ x: ["0%", "-50%"] }} // ในมือถือให้วิ่งแนวนอนจะดูสวยกว่าครับ
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               >
                 {[...marqueeImages, ...marqueeImages].map((img, idx) => (
                    <div key={idx} className="w-[180px] aspect-square shrink-0 rounded-lg overflow-hidden border-2 border-white shadow-md">
                      <img src={img} className="w-full h-full object-cover" alt="mobile-showcase" />
                    </div>
                 ))}
               </motion.div>
               <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/20 via-transparent to-white/20" />
            </div>
          </motion.div>

          {/* --- ส่วนที่ 2: เนื้อหาหลัก --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            // order-2: อยู่ตรงกลางเสมอ
            className="w-full lg:w-[65%] text-center md:text-left lg:-ml-24 z-10 order-2"
          >
            <motion.div
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-zinc-50 border border-zinc-100 text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-10 mx-auto md:mx-0 shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              Premium Quality & Design
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight text-zinc-900 leading-[0.9] mb-10 uppercase">
              Sign<br /> Furniture<br /> Built-in
            </h1>

            <div className="max-w-md mx-auto md:mx-0">
              <p className="text-sm md:text-lg text-zinc-500 mb-12 leading-relaxed text-center md:text-left">
                เรารับออกแบบ ผลิต และติดตั้ง งานป้าย งานสติกเกอร์ และงานบิวท์อินระดับพรีเมียม
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white text-sm font-bold rounded-sm flex items-center justify-center group shadow-xl shadow-red-600/10">
                ดูผลงานของเรา <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-900 text-sm font-bold rounded-sm flex items-center justify-center">
                ติดต่อสอบถาม
              </a>
            </div>
          </motion.div>

          {/* --- ส่วนที่ 3: โลโก้ (ย้ายมาอยู่ล่างสุดในมือถือ) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            // order-3: ให้มาอยู่ล่างสุดในมือถือ | md:order-none: ในคอมให้กลับไปที่เดิม
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
    </section>
  );
};

export default Hero;