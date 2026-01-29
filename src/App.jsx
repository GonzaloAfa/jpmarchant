import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainLayout } from './components/templates/MainLayout';
import { NavigationBar } from './components/organisms/NavigationBar';
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
    <MainLayout>
      <div className="max-w-6xl mx-auto px-6">
        <NavigationBar activeSection={activeSection} onSectionChange={setActiveSection} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pb-32"
          >
            {sections[activeSection]}
          </motion.div>
        </AnimatePresence>
      </div>
    </MainLayout>
  );
}

export default App;
