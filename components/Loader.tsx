import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before unmounting
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-t-2 border-r-2 border-neon rounded-full mb-8"
        />
        <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold tracking-[0.2em] mb-2 font-mono">AARAV</h1>
      <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
        <span>System Initialization</span>
        <span>{Math.min(progress, 100)}%</span>
      </div>
    </motion.div>
  );
};

export default Loader;
