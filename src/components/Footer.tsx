import React from 'react';
import { Facebook, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-32">
          
          {/* Group 1: Our Services */}
          <div className="flex flex-col">
            <h5 className="text-sm font-black mb-10 text-white uppercase tracking-[0.3em]">Our Services</h5>
            <ul className="space-y-5 text-zinc-500 font-medium">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a 
                    href="#services" 
                    className="hover:text-red-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-red-600 transition-all mr-0 group-hover:mr-2"></span>
                    {service.title.split(' (')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2: Contact Info */}
          <div className="flex flex-col">
            <h5 className="text-sm font-black mb-10 text-white uppercase tracking-[0.3em]">Contact</h5>
            <ul className="space-y-6 text-zinc-400">
              <li className="group">
                <a href="tel:0876349997" className="flex items-center gap-4 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-red-600 transition-all shrink-0">
                    <Phone size={16} />
                  </div>
                  <span className="font-semibold tracking-tight">087-634-9997</span>
                </a>
              </li>
              <li className="group">
                <a href="https://line.me/ti/p/~a2artplus1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-red-600 transition-all shrink-0">
                    <MessageCircle size={16} />
                  </div>
                  <span className="font-semibold tracking-tight">LINE: a2artplus1</span>
                </a>
              </li>
              <li className="group">
                <a href="https://www.facebook.com/profile.php?id=61566587472075" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-red-600 transition-all shrink-0">
                    <Facebook size={16} />
                  </div>
                  <span className="font-semibold tracking-tight">A2 Art Plus</span>
                </a>
              </li>
              <li className="group">
                <a href="mailto:a2artbuiltin@gmail.com" className="flex items-center gap-4 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-red-600 transition-all shrink-0">
                    <Mail size={16} />
                  </div>
                  <span className="font-semibold tracking-tight text-sm">a2artbuiltin@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Group 3: Location */}
          <div className="flex flex-col">
            <h5 className="text-sm font-black mb-10 text-white uppercase tracking-[0.3em]">Location</h5>
            <div className="group">
              <a 
                href="https://maps.app.goo.gl/qXvMbfMvwwV8X8Zp9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 text-zinc-400 hover:text-white transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-red-600 transition-all shrink-0">
                  <MapPin size={16} />
                </div>
                <p className="text-sm leading-relaxed font-medium">
                  190/1 หมู่ที่ 11 ตำบลหนองขาม <br />
                  อำเภอศรีราชา จ.ชลบุรี 20230
                </p>
              </a>
            </div>            
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            © {new Date().getFullYear()} A2 ART PLUS. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-zinc-700 text-[10px] font-black uppercase tracking-[0.3em]">
            <span>Design</span>
            <span className="w-1 h-1 bg-red-600 rounded-full"></span>
            <span>Fabrication</span>
            <span className="w-1 h-1 bg-red-600 rounded-full"></span>
            <span>Installation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;