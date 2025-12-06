import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { Scan, BrainCircuit, Hammer, Share2 } from 'lucide-react';
import { ProcessStep } from '../types';

const icons = [Scan, BrainCircuit, Hammer, Share2];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
            <h2 className="text-sm font-mono text-neon tracking-widest uppercase mb-2">Workflow</h2>
            <h3 className="text-3xl font-bold">The Algorithmic Method</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
                <TiltCard key={step.step} step={step} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

interface TiltCardProps {
    step: ProcessStep;
    index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ step, index }) => {
    const Icon = icons[index % icons.length];
    
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });
    
    // Rotate card based on mouse position
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        // Calculate mouse position relative to center of card
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{ perspective: 1000 }}
            className="h-[320px] w-full cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <motion.div
                style={{ 
                    rotateX, 
                    rotateY, 
                    transformStyle: "preserve-3d" 
                }}
                className="relative w-full h-full bg-[#1a0505]/80 backdrop-blur-md border border-red-900/30 rounded-xl group hover:border-neon/50 transition-colors duration-500 shadow-xl"
            >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

                <div 
                    style={{ transform: "translateZ(50px)" }} 
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20"
                >
                    <motion.div 
                        className="mb-4 p-4 rounded-full bg-black/50 border border-white/10 text-white group-hover:bg-neon group-hover:text-black transition-colors duration-300 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Icon size={28} />
                    </motion.div>
                    
                    <h4 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors duration-300 uppercase tracking-wide">
                        {step.title}
                    </h4>
                    
                    {/* Hidden Description that Pops Up */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                         <div className="overflow-hidden">
                             <p className="text-sm text-neutral-300 mt-4 leading-relaxed bg-black/80 p-3 rounded-lg border border-neon/20 shadow-[0_0_15px_rgba(74,222,128,0.1)]">
                                {step.description}
                             </p>
                         </div>
                    </div>
                </div>

                {/* Background Number (Parallax Layer) */}
                <div 
                    style={{ transform: "translateZ(20px)" }}
                    className="absolute top-4 left-4 text-8xl font-black text-white/5 select-none font-mono group-hover:text-neon/5 transition-colors"
                >
                    {step.step}
                </div>
                
                {/* Tech Deco Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-neon transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-neon transition-colors" />

            </motion.div>
        </motion.div>
    )
}

export default Process;
