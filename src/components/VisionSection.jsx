import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function VisionSection({ onBack }) {
  return (
    <motion.div
      id="vision-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative w-full min-h-[60vh] bg-white text-black p-12"
    >
      {/* Back Arrow */}
      <button
        className="absolute top-4 left-4 text-black hover:text-gray-700 transition flex items-center gap-2"
        onClick={onBack}
      >
        <ArrowLeft size={20} />
        <span className="text-sm">Back</span>
      </button>

      <h2 className="text-4xl font-bold mb-4 text-center">Nerds Vision</h2>
      <p className="text-lg max-w-3xl mx-auto text-center">
        At NerdyLabs, we envision a future where AI empowers everyone—from
        startups to enterprises— by making intelligent technology accessible,
        ethical, and impactful.
      </p>
    </motion.div>
  );
}
