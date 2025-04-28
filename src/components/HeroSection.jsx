import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroBoxes from './HeroBoxes';
import heroBoxes from '../data/HeroBoxes';
import { useNavigate } from 'react-router-dom'; // ✅ NEW

export default function HeroSection() {
  const [showBoxes, setShowBoxes] = useState(false);
  const navigate = useNavigate(); // ✅ NEW

  const handleExploreClick = () => setShowBoxes(true);

  const handleBoxClick = (key) => {
    if (key === 'vision') {
      navigate('/mission'); // ✅ Nerds Vision -> Nerd's Mission
    } else if (key === 'services') {
      navigate('/solutions'); // ✅ Nerds Services -> Solutions
    } else if (key === 'team') {
      navigate('/nerds'); // ✅ Meet the Nerds -> Nerds
    }
  };

  return (
    <div id="hero" className="relative w-full min-h-screen overflow-scroll">
      <div className="relative z-20 flex flex-col items-center justify-center text-white min-h-screen text-center px-4">
        <AnimatePresence mode="wait">
          {!showBoxes ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to NerdyLabs
              </h1>
              <p className="text-lg md:text-2xl max-w-xl">
                Building AI-powered solutions for the future.
              </p>
              <button
                onClick={handleExploreClick}
                className="mt-6 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
              >
                Explore Solutions
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="boxes"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <HeroBoxes heroBoxes={heroBoxes} handleBoxClick={handleBoxClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
