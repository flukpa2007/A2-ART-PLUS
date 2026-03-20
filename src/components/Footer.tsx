import React from 'react';
import { Facebook, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl font-bold tracking-tighter">
                A2 ART <span className="text-red-600">PLUS</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-10 max-w-xs break-words">
              เรารับออกแบบ ผลิต และติดตั้ง งานป้าย งานสติกเกอร์ <br className="hidden sm:block" /> 
              และงานบิวท์อินสำหรับร้านค้า คลินิก ออฟฟิศ <br className="hidden sm:block" /> 
              และธุรกิจต่าง ๆ โดยดูแลตั้งแต่แนวคิดการออกแบบ <br className="hidden sm:block" /> 
              จนถึงการติดตั้งหน้างาน
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-8 text-white tracking-wide">เมนูหลัก</h5>
            <ul className="space-y-4 text-white/50">
              <li><a href="#home" className="hover:text-red-600 transition-colors">หน้าแรก</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">บริการ</a></li>
              <li><a href="#portfolio" className="hover:text-red-600 transition-colors">ผลงาน</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 text-white tracking-wide">ติดต่อเรา</h5>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-600 shrink-0" /> 
                <a href="tel:0876349997" className="hover:text-red-600 transition-colors break-all">087-634-9997</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-red-600 shrink-0" /> 
                <a href="https://line.me/ti/p/~a2artplus1" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">a2artplus1</a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={18} className="text-red-600 shrink-0" /> 
                <a href="https://www.facebook.com/profile.php?id=61566587472075" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors break-words">A2 Art Plus : ทำป้าย บิวท์อิน ชลบุรี</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-600 shrink-0" /> 
                <a href="mailto:a2artbuiltin@gmail.com" className="hover:text-red-600 transition-colors break-all">a2artbuiltin@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 text-white tracking-wide">ที่อยู่สำนักงาน</h5>
            <a href="https://maps.app.goo.gl/eRDB8YVp3WXDck8v8" target="_blank" rel="noopener noreferrer" className="text-white/50 leading-relaxed flex items-start gap-3 max-w-xs break-words hover:text-red-600 transition-colors">
              <MapPin size={18} className="text-red-600 shrink-0 mt-1" />
              <span>
                190/1 หมู่ที่ 11 ตำบลหนองขาม <br />
                อำเภอศรีราชา จ.ชลบุรี 20230
              </span>
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 text-sm font-medium gap-6">
          <p>© {new Date().getFullYear()} A2 ART PLUS. All rights reserved.</p>
          <p className="uppercase tracking-widest text-xs">Design • Fabrication • Installation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
