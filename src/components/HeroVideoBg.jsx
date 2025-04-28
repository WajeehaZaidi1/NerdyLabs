import React from "react";
import heroVideo from "../assets/hero.mp4";

export default function HeroVideoBg({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-white min-h-screen text-center px-4">
        {children}
      </div>
    </div>
  );
}
