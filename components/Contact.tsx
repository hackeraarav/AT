import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 relative z-10 bg-deep border-t border-red-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let's build the <span className="text-neon">future</span>.
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
            Currently open for select freelance collaborations and long-term partnerships in the AI/Design space.
          </p>

          <a 
            href="mailto:aaravtatiya9@gmail.com" 
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neon hover:text-black transition-all transform hover:scale-105"
          >
            Start a Conversation
          </a>

          <div className="mt-20 flex justify-center space-x-8 text-neutral-500">
            <a href="https://github.com/hackeraarav" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://x.com/aaravnextgen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter size={24} /></a>
            <a href="https://www.linkedin.com/in/aarav-tatiya-84a6b62a7/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="https://www.instagram.com/aarav.nextgen/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="mailto:aaravtatiya9@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>

          <div className="mt-12 text-sm text-neutral-700 font-mono">
            © {new Date().getFullYear()} AARAV. DIGITAL ARTIFACTS.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
