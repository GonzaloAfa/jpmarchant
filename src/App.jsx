import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import About from './sections/About';
import Work from './sections/Work';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: <About />,
    work: <Work />,
    education: <Education />,
    skills: <Skills />,
    portfolio: <Portfolio />,
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6">
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

        <main className="min-h-[60vh] pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {sections[activeSection]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </Layout>
  );
}

export default App;
