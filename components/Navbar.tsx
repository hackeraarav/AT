import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Cpu, FolderOpen, Workflow, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Cpu, label: 'Skills' },
  { id: 'work', icon: FolderOpen, label: 'Work' },
  { id: 'process', icon: Workflow, label: 'Process' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 1, type: "spring" }}
        className="flex items-center gap-2 bg-[#1a0505]/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-auto"
      >
        {navItems.map((item) => (
          <Tooltip key={item.id} label={item.label}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="p-3 rounded-full hover:bg-white/5 text-neutral-400 hover:text-neon transition-all duration-300 group relative flex items-center justify-center"
            >
              <item.icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-[1px]" />
            </button>
          </Tooltip>
        ))}
      </motion.div>
    </div>
  );
};

const Tooltip = ({ children, label }: { children: React.ReactNode, label: string }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div 
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: -50, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute whitespace-nowrap bg-black border border-white/20 px-3 py-1.5 rounded-lg text-xs font-mono text-neon tracking-widest uppercase shadow-xl"
                    >
                        {label}
                        {/* Tiny triangle */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-white/20 rotate-45 transform" />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </div>
    )
}

export default Navbar;
