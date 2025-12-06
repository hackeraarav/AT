import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Beyond the <br/><span className="text-neutral-500">pixels.</span>
          </h3>
          <p className="text-neutral-400 mb-6 text-lg leading-relaxed">
            I don't just build websites; I build digital habitats. My work sits at the intersection of aesthetic precision and algorithmic chaos.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed">
            By leveraging Artificial Intelligence as a collaborator rather than a replacement, I explore new frontiers in visual storytelling. From generative 3D environments to reactively animated interfaces, my goal is to make the screen feel alive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-red-900/30 bg-red-900/10 backdrop-blur-sm group"
        >
            {/* "Nano Banana" Photo Representation */}
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
              alt="Visionary AI Art"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-overlay"
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="text-5xl font-bold text-white/90 group-hover:text-white transition-colors duration-500 select-none drop-shadow-lg tracking-widest">
                    FUTURE
                </div>
                <p className="mt-4 text-red-200/80 max-w-xs text-sm font-mono tracking-wide leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  Expanding the boundaries of digital perception through neural networks and human intuition.
                </p>
            </div>
            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
