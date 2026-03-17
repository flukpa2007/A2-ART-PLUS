import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4">Contact Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-relaxed break-words">
            เริ่มต้นโครงการของคุณกับเราวันนี้
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-sm shadow-sm border border-zinc-100 flex flex-col items-center text-center group transition-all hover:shadow-xl hover:border-red-600/20"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-600/10 translate-x-1 translate-y-1 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative w-16 h-16 bg-zinc-900 rounded-sm flex items-center justify-center shadow-lg">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">โทรศัพท์</p>
            <p className="text-2xl font-bold text-zinc-900">087-637-9997</p>
          </motion.div>

          {/* Line Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-sm shadow-sm border border-zinc-100 flex flex-col items-center text-center group transition-all hover:shadow-xl hover:border-red-600/20"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-600/10 translate-x-1 translate-y-1 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative w-16 h-16 bg-zinc-900 rounded-sm flex items-center justify-center shadow-lg">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">LINE ID</p>
            <p className="text-2xl font-bold text-zinc-900">a2artplus1</p>
          </motion.div>

          {/* Facebook Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-sm shadow-sm border border-zinc-100 flex flex-col items-center text-center group transition-all hover:shadow-xl hover:border-red-600/20"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-600/10 translate-x-1 translate-y-1 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative w-16 h-16 bg-zinc-900 rounded-sm flex items-center justify-center shadow-lg">
                <Facebook className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">FACEBOOK</p>
            <p className="text-xl font-bold text-zinc-900">A2 Art Plus : ทำป้าย บิวท์อิน ชลบุรี</p>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-sm shadow-sm border border-zinc-100 flex flex-col items-center text-center group transition-all hover:shadow-xl hover:border-red-600/20 md:col-span-1"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-600/10 translate-x-1 translate-y-1 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative w-16 h-16 bg-zinc-900 rounded-sm flex items-center justify-center shadow-lg">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">อีเมล</p>
            <p className="text-xl md:text-2xl font-bold text-zinc-900 break-all">a2artbuiltin@gmail.com</p>
          </motion.div>

          {/* Address Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-sm shadow-sm border border-zinc-100 flex flex-col items-center text-center group transition-all hover:shadow-xl hover:border-red-600/20 md:col-span-2"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-600/10 translate-x-1 translate-y-1 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative w-16 h-16 bg-zinc-900 rounded-sm flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">ที่อยู่</p>
            <p className="text-lg md:text-xl font-bold text-zinc-900 max-w-2xl break-words leading-relaxed">
              190/1 หมู่ที่ 11 ตำบลหนองขาม อำเภอศรีราชา จ.ชลบุรี 20230
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
