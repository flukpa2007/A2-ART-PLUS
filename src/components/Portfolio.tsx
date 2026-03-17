import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4">Our Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-tight">
              รวมผลงานจากทุกบริการ
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[16/10] overflow-hidden rounded-sm group cursor-pointer shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-zinc-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-10 text-center">
                <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-3">{project.category}</p>
                <h4 className="text-3xl font-bold text-white mb-6">{project.title}</h4>
                <div className="w-12 h-1 bg-red-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
