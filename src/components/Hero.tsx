import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern office signage" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 border border-red-600/50 text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-8 rounded-full bg-red-600/5"
          >
            Premium Quality & Design
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1] mb-8 uppercase">
            Sign <span className="text-red-600">•</span> Furniture <span className="text-red-600">•</span> Built-in
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-70 mb-12 font-light leading-relaxed">
            เรารับออกแบบ ผลิต และติดตั้ง งานป้าย งานสติกเกอร์ และงานบิวท์อินสำหรับร้านค้า คลินิก ออฟฟิศ และธุรกิจต่าง ๆ โดยดูแลตั้งแต่แนวคิดการออกแบบจนถึงการติดตั้งหน้างาน
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href="#portfolio" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-4 bg-red-600 text-white font-bold rounded-sm hover:bg-red-700 transition-all flex items-center justify-center group shadow-xl shadow-red-600/20"
            >
              ดูผลงานของเรา
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#18181b" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-4 border-2 border-white text-white font-bold rounded-sm transition-all"
            >
              ติดต่อสอบถาม
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[2px] h-12 bg-red-600 mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
