// src/pages/Mission.jsx
import React from "react";
import { motion } from "framer-motion";
import HeroVideoBg from "../components/HeroVideoBg";
import BackButton from "../components/BackButton";

const Mission = () => {
  return (
      <HeroVideoBg>
            <BackButton />
          <div className="relative w-full h-screen overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
        {/* Animated Text */}
        <motion.div
          className="text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Shaping the Future with Intelligent Innovation
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
            At NerdyLabs, we don't just embrace technology — we craft intelligent solutions
            that revolutionize industries, empower businesses, and inspire the future.  
            Your vision, powered by our expertise.
          </p>
        </motion.div>
      </div>
      </div>
      </HeroVideoBg>
  );
};

export default Mission;
