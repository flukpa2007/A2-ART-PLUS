import React, { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

const SERVICE_OPTIONS = ['ป้ายตัวอักษร', 'ป้ายไฟ LED', 'งานสติกเกอร์', 'งานไวนิล', 'งานบิวท์อิน', 'อื่น ๆ'];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `ขอประเมินราคา: ${form.get('service')}`;
    const body = [
      `ชื่อ: ${form.get('name')}`,
      `เบอร์โทร: ${form.get('phone')}`,
      `บริการที่สนใจ: ${form.get('service')}`,
      '',
      'รายละเอียดงาน:',
      form.get('details'),
    ].join('\n');

    setSubmitted(true);
    window.location.href = `mailto:a2artbuiltin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* ฝั่งซ้าย: ข้อมูลติดต่อหลัก + แผนที่ (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-50 p-6 sm:p-10 md:p-14 rounded-sm border border-zinc-100"
            >
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">Free consultation</span>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-zinc-900">ขอคำปรึกษาและประเมินราคา</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">กรอกข้อมูลเบื้องต้น ระบบจะเปิดอีเมลพร้อมรายละเอียดให้คุณตรวจสอบก่อนส่งถึงทีมงาน</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-zinc-700">
                    ชื่อผู้ติดต่อ <span className="text-red-600">*</span>
                    <input name="name" required autoComplete="name" className="mt-2 w-full rounded-sm border border-zinc-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/10" placeholder="ชื่อของคุณ" />
                  </label>
                  <label className="block text-sm font-semibold text-zinc-700">
                    เบอร์โทรศัพท์ <span className="text-red-600">*</span>
                    <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+ -]{8,15}" className="mt-2 w-full rounded-sm border border-zinc-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/10" placeholder="08x-xxx-xxxx" />
                  </label>
                </div>
                <label className="block text-sm font-semibold text-zinc-700">
                  บริการที่สนใจ <span className="text-red-600">*</span>
                  <select name="service" required defaultValue="" className="mt-2 w-full rounded-sm border border-zinc-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/10">
                    <option value="" disabled>เลือกประเภทงาน</option>
                    {SERVICE_OPTIONS.map((service) => <option key={service}>{service}</option>)}
                  </select>
                </label>
                <label className="block text-sm font-semibold text-zinc-700">
                  รายละเอียดงาน <span className="text-red-600">*</span>
                  <textarea name="details" required rows={4} className="mt-2 w-full resize-y rounded-sm border border-zinc-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/10" placeholder="ขนาดโดยประมาณ สถานที่ติดตั้ง และช่วงเวลาที่ต้องการ" />
                </label>

                {submitted && (
                  <div role="status" className="flex items-start gap-2 rounded-sm bg-emerald-50 p-3 text-sm text-emerald-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    เปิดแอปอีเมลแล้ว หากไม่พบหน้าต่างใหม่ สามารถส่งข้อมูลผ่าน LINE ได้ทันที
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-red-600 px-6 py-4 font-bold text-white shadow-lg shadow-red-600/15 transition hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    ส่งรายละเอียดทางอีเมล <Send size={18} />
                  </button>
                  <a href="https://lin.ee/S48LXeM" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm border border-zinc-300 bg-white px-6 py-4 font-bold text-zinc-900 transition hover:border-[#06c755] hover:text-[#06a847]">
                    <MessageCircle size={18} /> LINE
                  </a>
                </div>
              </form>

              <div className="mt-8 grid gap-4 border-t border-zinc-200 pt-7 text-sm sm:grid-cols-2">
                <a href="mailto:a2artbuiltin@gmail.com" className="flex items-center gap-3 text-zinc-600 transition hover:text-red-600"><Mail size={17} /> a2artbuiltin@gmail.com</a>
                <a href="https://maps.app.goo.gl/qXvMbfMvwwV8X8Zp9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-600 transition hover:text-red-600"><MapPin size={17} /> หนองขาม ศรีราชา ชลบุรี</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
