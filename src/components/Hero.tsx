import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white flex items-center pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Large Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <img 
              src="/images/logo-a2-black.png" 
              alt="A2 ART PLUS Logo" 
              className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/a2art/600/600";
              }}
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold tracking-wider uppercase mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Premium Quality & Design
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 leading-[1.05] mb-8 uppercase">
              Sign<br />
              Furniture<br />
              Built-in
            </h1>

            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-zinc-600 mb-12 leading-relaxed font-normal break-words">
                เรารับออกแบบ ผลิต และติดตั้ง งานป้าย งานสติกเกอร์ <br className="hidden md:block" /> 
                และงานบิวท์อินสำหรับร้านค้า คลินิก ออฟฟิศ และธุรกิจต่าง ๆ <br className="hidden md:block" /> 
                โดยดูแลตั้งแต่แนวคิดการออกแบบจนถึงการติดตั้งหน้างาน
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-5">
              <motion.a 
                href="#portfolio" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all flex items-center justify-center group shadow-lg shadow-red-600/20"
              >
                ดูผลงานของเรา
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61566587472075"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 bg-white border border-zinc-900 text-zinc-900 font-bold rounded-lg hover:bg-zinc-900 hover:text-white transition-all flex items-center justify-center"
              >
                ติดต่อสอบถาม
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1.5 bg-red-600/10" />
    </section>
  );
};

export default Hero;
