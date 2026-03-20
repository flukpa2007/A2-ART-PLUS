import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4">About Us</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-8 leading-relaxed break-words">
              A2 ART PLUS <br /> ป้ายดี บิวท์เด่น
            </h3>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed mb-8 break-words">
              หลายร้านต้องจ้างหลายทีม ทั้งช่างป้าย ช่างบิวท์อิน และช่างติดตั้ง <br className="hidden md:block" /> แต่ที่ A2 ART PLUS เราดูแลให้ครบจบในที่เดียว <br className="hidden md:block" /> ช่วยให้ร้านของคุณออกมาดูเป็นสไตล์เดียวกัน ไม่ต้องประสานงานหลายทีม <br className="hidden md:block" /> ประหยัดทั้งเวลาและงบประมาณ
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "ดูแลครบจบในที่เดียว",
                "วัสดุคุณภาพสูง",
                "ทีมติดตั้งมืออาชีพ",
                "รับประกันผลงาน"
              ].map((item) => (
                <motion.div 
                  key={item} 
                  whileHover={{ x: 5 }}
                  className="flex items-center text-zinc-900 font-bold cursor-default"
                >
                  <CheckCircle2 className="w-6 h-6 mr-3 text-red-600" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl border-8 border-zinc-100">
              <img 
                src="/images/A2-profile.png" 
                alt="Fabrication process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-red-600 text-white p-12 rounded-sm hidden md:block shadow-xl">
              <p className="text-6xl font-bold mb-2">100%</p>
              <p className="text-sm uppercase tracking-widest font-bold">Quality Focus</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
