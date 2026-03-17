import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

const ChatPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-6 w-72 bg-white rounded-2xl shadow-2xl border border-zinc-100 p-5 z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">A2 ART PLUS</p>
                <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Online Now</p>
              </div>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message Body */}
          <div className="bg-zinc-50 rounded-xl p-3 mb-5">
            <p className="text-sm text-zinc-700 leading-relaxed">
              สวัสดีครับ สนใจงานป้ายหรือบิวท์อิน ทักมาปรึกษาได้เลยครับ ยินดีให้บริการครับ 🙏
            </p>
          </div>

          {/* Action Button */}
          <a
            href="https://line.me/ti/p/~a2artplus1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-green-500 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 active:scale-95"
          >
            <MessageCircle size={18} />
            แอด LINE ปรึกษาฟรี
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatPopup;
