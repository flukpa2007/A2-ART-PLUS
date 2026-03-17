import React from 'react';
import { motion } from 'motion/react';
import { PROCESS } from '../constants';

const Process = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            เราดูแลคุณในทุกขั้นตอน
          </h3>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6" />
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {PROCESS.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-500">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-red-600 font-bold mr-2">{index + 1}.</span>
                  <h4 className="text-xl font-bold">{step.title}</h4>
                </div>
                <p className="text-white/50 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
