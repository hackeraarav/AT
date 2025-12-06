import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Cpu, Globe, Eye } from 'lucide-react';
import { SKILLS } from '../constants';

const iconMap: Record<string, React.ElementType> = {
  Clapperboard, Cpu, Globe, Eye
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 relative z-10 bg-deep/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-neon tracking-widest uppercase mb-2">Capabilities</h2>
          <h3 className="text-3xl font-bold">The Toolkit</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Globe; // Fallback
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="p-8 border border-neutral-800 bg-neutral-900/40 rounded-xl cursor-pointer transition-colors group"
              >
                <div className="mb-6 p-4 bg-neutral-800/50 rounded-lg w-fit group-hover:text-neon transition-colors">
                  <Icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                <p className="text-sm text-neutral-500 mb-4">{skill.description}</p>
                <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-neon/50" 
                    />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
