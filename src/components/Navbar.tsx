import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'หน้าแรก', href: '#home' },
    { name: 'บริการ', href: '#services' },
    { name: 'ผลงาน', href: '#portfolio' },
    { name: 'ติดต่อเรา', href: '#contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[60] bg-black/90 backdrop-blur-md shadow-md flex items-center transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-white">
              A2 ART <span className="text-red-500">PLUS</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold uppercase tracking-widest transition-colors text-white hover:text-red-500"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu & Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay (z-40) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu (z-50) */}
            <motion.div 
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 w-full h-screen bg-black text-white z-50 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {/* Close Button inside menu for better UX as requested */}
              <button 
                className="absolute top-6 right-6 text-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>

              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-red-500 transition-colors tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
