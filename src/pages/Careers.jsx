// src/pages/Careers.jsx
import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react"; // You already have Lucide-react icons
import BackButton from "../components/BackButton";
const Careers = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center px-6 py-20">
       <BackButton />
          <div className="text-center space-y-8">
        
        {/* Animated Rocket Icon */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
        >
          <Rocket className="mx-auto w-16 h-16 text-white" />
        </motion.div>

        {/* Main Text */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Careers at NerdyLabs
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Stay updated. We are preparing exciting career opportunities for you!
        </motion.p>

        {/* Subscription Form */}
        <motion.form
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-full outline-none text-gray-800"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-100 transition"
          >
            Notify Me
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Careers;
