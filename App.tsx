import React, { useState, Suspense } from 'react';
import ThreeScene from './components/ThreeScene';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-deep text-white selection:bg-neon selection:text-black font-sans">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
           {/* 3D Background - Fixed Position */}
           <Suspense fallback={null}>
            <ThreeScene />
           </Suspense>

           {/* Navigation */}
           <Navbar />

           {/* Scrollable Content - Overlay */}
           <main className="relative z-10 w-full overflow-x-hidden">
             <Hero />
             <div className="backdrop-blur-[2px] bg-deep/30">
                <About />
                <Skills />
                <Projects />
                <Process />
                <Contact />
             </div>
           </main>
           
           {/* Fixed Grain Overlay for texture */}
           <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
           </div>
        </>
      )}
    </div>
  );
};

export default App;
