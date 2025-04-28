import React from "react";
import HeroVideoBg from "../components/HeroVideoBg";
import HeroSection from "../components/HeroSection";
import BackButton from "../components/BackButton";

export default function HeroPage()
{
  return (
    <HeroVideoBg>
      <HeroSection />
    </HeroVideoBg>
  );
}
