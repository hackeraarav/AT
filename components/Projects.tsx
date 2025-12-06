import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, X } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <section id="work" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-sm font-mono text-neon tracking-widest uppercase mb-2">Selected Work</h2>
        <h3 className="text-3xl font-bold text-neutral-200">Creative Output</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="cursor-pointer group relative"
          >
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 relative">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-6 left-6">
                 <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-neon transition-colors">{project.title}</h4>
                 <p className="text-sm text-neutral-400 font-mono">{project.category}</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`project-${selectedId}`}
              className="bg-neutral-900 border border-neutral-800 w-full max-w-3xl rounded-2xl overflow-hidden relative shadow-2xl shadow-neon/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:text-neon transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="aspect-video relative">
                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-90" />
              </div>

              <div className="p-8 -mt-20 relative z-10">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                        <span className="text-neon font-mono text-sm border border-neon/30 px-2 py-1 rounded">
                            {selectedProject.category}
                        </span>
                    </div>
                </div>

                <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                </p>

                <div className="space-y-4">
                    <h5 className="text-sm font-mono text-neutral-500 uppercase">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map(tool => (
                            <span key={tool} className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-800 flex justify-end">
                    <button className="flex items-center gap-2 text-white hover:text-neon transition-colors font-bold">
                        View Live Project <ExternalLink size={18} />
                    </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
