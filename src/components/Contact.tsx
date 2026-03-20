import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Side: Header & Primary Contact */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 mb-7 break-words">
                สนใจติดต่อ  
              </h3>
              
              <div className="space-y-10">
                {/* Phone */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">โทรศัพท์</p>
                    <a href="tel:0876349997" className="text-2xl font-bold text-zinc-900 hover:text-red-600 transition-colors">087-634-9997</a>
                  </div>
                </div>

                {/* LINE */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">LINE ID</p>
                    <a href="https://line.me/ti/p/~a2artplus1" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-zinc-900 hover:text-red-600 transition-colors">
                      a2artplus1
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Facebook</p>
                    <a href="https://www.facebook.com/profile.php?id=61566587472075" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-zinc-900 hover:text-red-600 transition-colors">
                      A2 Art Plus : ทำป้าย บิวท์อิน ชลบุรี
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Secondary Contact & Map/Address */}
          <div className="lg:col-span-7 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-50 p-10 md:p-16 rounded-sm border border-zinc-100"
            >
              <div className="grid grid-cols-1 gap-12">
                {/* Email */}
                <div className="flex items-start gap-6">
                  <Mail className="w-8 h-8 md:w-6 md:h-6 text-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">อีเมล</p>
                    <a href="mailto:a2artbuiltin@gmail.com" className="text-xl md:text-2xl font-bold text-zinc-900 break-all">a2artbuiltin@gmail.com</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-6">
                  <MapPin className="w-8 h-8 md:w-6 md:h-6 text-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">ที่อยู่สำนักงาน</p>
                    <a href="https://maps.app.goo.gl/A5mXkBewoCyHbKmT9" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-medium text-zinc-700 leading-relaxed break-words">
                      190/1 หมู่ที่ 11 ตำบลหนองขาม <br className="hidden md:block" />
                      อำเภอศรีราชา จ.ชลบุรี 20230
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-200">
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    เราพร้อมให้คำปรึกษาและประเมินราคาเบื้องต้นฟรี <br />
                    ทีมงานของเราจะติดต่อกลับภายใน 24 ชั่วโมงในวันทำการ
                  </p>
                  <motion.a 
                    href="https://line.me/ti/p/~a2artplus1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center px-10 py-4 bg-zinc-900 text-white font-bold rounded-sm hover:bg-red-600 transition-all shadow-lg"
                  >
                    ทักแชทปรึกษาผ่าน LINE
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
