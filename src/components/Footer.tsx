import React from 'react';
import { Facebook, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8 flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="A2 ART PLUS Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-3xl font-bold tracking-tighter">
                A2 ART <span className="text-red-600">PLUS</span>
              </span>
            </div>
            <p className="text-white/40 leading-relaxed mb-10">
              เรารับออกแบบ ผลิต และติดตั้ง งานป้าย งานสติกเกอร์ และงานบิวท์อินสำหรับร้านค้า คลินิก ออฟฟิศ และธุรกิจต่าง ๆ โดยดูแลตั้งแต่แนวคิดการออกแบบจนถึงการติดตั้งหน้างาน
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-8 text-white">เมนูหลัก</h5>
            <ul className="space-y-5 text-white/40">
              <li><a href="#home" className="hover:text-red-600 transition-colors">หน้าแรก</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">บริการ</a></li>
              <li><a href="#portfolio" className="hover:text-red-600 transition-colors">ผลงาน</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 text-white">ติดต่อเรา</h5>
            <ul className="space-y-5 text-white/40">
              <li className="flex items-center"><Phone size={18} className="mr-3 text-red-600" /> 087-637-9997</li>
              <li className="flex items-center"><MessageCircle size={18} className="mr-3 text-red-600" /> a2artplus1</li>
              <li className="flex items-center"><Facebook size={18} className="mr-3 text-red-600" /> A2 Art Plus</li>
              <li className="flex items-center"><Mail size={18} className="mr-3 text-red-600" /> a2artbuiltin@gmail.com</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 text-white">ที่อยู่</h5>
            <p className="text-white/40 leading-relaxed flex items-start">
              <MapPin size={18} className="mr-3 mt-1 text-red-600 shrink-0" />
              190/1 หมู่ที่ 11 ตำบลหนองขาม อำเภอศรีราชา จ.ชลบุรี 20230
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 text-sm font-medium">
          <p>© {new Date().getFullYear()} A2 ART PLUS. All rights reserved.</p>
          <p className="mt-5 md:mt-0 uppercase tracking-widest">Design • Fabrication • Installation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
