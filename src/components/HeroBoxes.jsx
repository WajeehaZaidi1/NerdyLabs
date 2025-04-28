import React from "react";
import Lottie from "lottie-react";
import aiAnimation from "../animations/idea.json"; // For Nerds Vision
import servicesAnimation from "../animations/Devops (1).json"; // For Nerds Services
import teamAnimation from "../animations/team.json"; // For Meet the Nerds

// Lottie animation mapping
const animationMap = {
  vision: aiAnimation,
  services: servicesAnimation,
  team: teamAnimation,
};

export default function HeroBoxes({ heroBoxes, handleBoxClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-5xl px-4">
      {heroBoxes.map((box, index) => (
        <div
          key={index}
          className="relative bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white flex flex-col justify-between items-center aspect-square hover:bg-opacity-20 transition"
        >
          {/* 🔥 Dynamically assign Lottie animation based on box key */}
          <div className="absolute top-0 left-2 w-12 h-12">
            <Lottie animationData={animationMap[box.key]} loop={true} autoplay={true} />
          </div>

          <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
          <p className="text-sm mb-4 text-center">{box.description}</p>
          <button
            className="text-sm mt-auto px-4 py-1 border border-white rounded-full hover:bg-white hover:text-black transition"
            onClick={() => handleBoxClick(box.key)}
          >
            {box.linkText}
          </button>
        </div>
      ))}
    </div>
  );
}
