import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10"
      >
        <h2 className="text-neon text-sm md:text-base tracking-[0.4em] uppercase mb-4 font-mono">
          Creative Technologist
        </h2>
        
        <div 
          className="relative cursor-pointer group inline-block" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.h1 
            layout
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-white group-hover:text-neon transition-colors duration-500 select-none drop-shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.span
                  key="full"
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="block"
                >
                  AARAV TATIYA
                </motion.span>
              ) : (
                <motion.span
                  key="short"
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="block"
                >
                  A T
                </motion.span>
              )}
            </AnimatePresence>
          </motion.h1>
          
          {/* Threaded/Underline effect with Glow */}
          <motion.div 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-neon rounded-full shadow-[0_0_15px_#4ade80]"
            initial={{ width: "20%" }}
            animate={{ width: isExpanded ? "100%" : "20%" }}
            whileHover={{ width: isExpanded ? "100%" : "40%" }}
            transition={{ duration: 0.5, ease: "anticipate" }}
          />
        </div>

        <p className="text-neutral-400 max-w-xl mx-auto text-lg md:text-xl leading-relaxed font-light mt-4">
          I design immersive digital experiences using <span className="text-white">3D</span>, <span className="text-white">Motion</span>, and <span className="text-white">AI</span>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            <ArrowDown className="text-neutral-500 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
