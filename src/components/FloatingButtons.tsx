import React from 'react';
import { Phone, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Facebook Button */}
      <motion.a
        href="https://www.facebook.com/profile.php?id=61566587472075"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 transition-all duration-300 group relative"
        aria-label="Contact via Facebook"
      >
        <Facebook size={28} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-zinc-900 text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ทัก Facebook ปรึกษาฟรี
        </span>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:0876379997"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl shadow-black/30 transition-all duration-300 group relative"
        aria-label="Call Us"
      >
        <Phone size={28} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-zinc-900 text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          โทรหาเราเลย
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
