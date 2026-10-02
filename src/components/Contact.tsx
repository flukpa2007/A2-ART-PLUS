import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';

const facebookPage = 'https://www.facebook.com/profile.php?id=61566587472075';

function FacebookTimeline() {
  const holder = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(300);

  useEffect(() => {
    if (!holder.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.max(180, Math.min(500, Math.floor(entry.contentRect.width))));
    });
    observer.observe(holder.current);
    return () => observer.disconnect();
  }, []);

  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPage)}&tabs=timeline&width=${width}&height=650&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;
  return <div ref={holder} className="w-full max-w-[500px] mx-auto">
    <iframe key={width} title="โพสต์ล่าสุดจาก Facebook A2 ART PLUS" src={src} width={width} height="650"
      className="block max-w-full mx-auto rounded-xl" style={{ border: 0, overflow: 'hidden' }}
      scrolling="no" loading="lazy" allow="encrypted-media" />
  </div>;
}

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* ฝั่งซ้าย: ข้อมูลติดต่อหลัก + แผนที่ (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 mb-10">
                สนใจติดต่อ  
              </h3>
              
              <div className="space-y-10">
                {/* โทรศัพท์ */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-normal text-zinc-400 mb-1">โทรศัพท์</p>
                    <a href="tel:0876349997" className="text-2xl font-bold text-zinc-900 hover:text-red-600 transition-colors">087-634-9997</a>
                  </div>
                </div>

                {/* LINE */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">LINE official</p>
                    <a href="https://lin.ee/S48LXeM" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-zinc-900 hover:text-red-600 transition-colors">
                      A2 ART PLUS
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

            <div className="space-y-8 border-t border-zinc-200 pt-10">
              <div className="flex items-start gap-6">
                <Mail className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-zinc-400 mb-2">อีเมล</p>
                  <a href="mailto:a2artbuiltin@gmail.com" className="text-xl font-bold text-zinc-900 break-all">a2artbuiltin@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-zinc-400 mb-2">ที่อยู่สำนักงาน</p>
                  <a href="https://maps.app.goo.gl/qXvMbfMvwwV8X8Zp9" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-zinc-700 leading-relaxed hover:text-red-600 transition-colors">
                    190/1 หมู่ที่ 11 ตำบลหนองขาม<br />อำเภอศรีราชา จ.ชลบุรี 20230
                  </a>
                </div>
              </div>
              <div className="border-t border-zinc-200 pt-7">
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">เราพร้อมให้คำปรึกษาและประเมินราคาเบื้องต้นฟรี<br />ทีมงานของเราจะติดต่อกลับภายใน 24 ชั่วโมงในวันทำการ</p>
                <a href="https://lin.ee/S48LXeM" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white font-bold rounded-sm hover:bg-red-600 transition-colors shadow-lg">ทักแชทปรึกษาผ่าน LINE</a>
              </div>
            </div>

            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full h-[300px] rounded-sm overflow-hidden border border-zinc-100 shadow-sm"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.2618999333554!2d101.0022067!3d13.1458296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c85d967dc671%3A0x87e3b86320fb80a2!2sA2%20ART%20PLUS%20%3A%20%E0%B8%97%E0%B8%B3%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%A2%20%E0%B8%9A%E0%B8%B4%E0%B8%A7%E0%B8%97%E0%B9%8C%E0%B8%AD%E0%B8%B4%E0%B8%99%20%E0%B8%8A%E0%B8%A5%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5!5e0!3m2!1sth!2sth!4v1711282800000!5m2!1sth!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A2 ART PLUS Map"
              ></iframe>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pt-24">
            <div className="bg-zinc-50 p-6 md:p-12 rounded-sm border border-zinc-100">
              <p className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-3">Facebook / Latest work</p>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-7">อัปเดตผลงานจากเพจ</h3>
              <FacebookTimeline />
              <a href={facebookPage} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-semibold text-zinc-700 underline underline-offset-4 hover:text-red-600">ดูโพสต์ทั้งหมดบน Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
