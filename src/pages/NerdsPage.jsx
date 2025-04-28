import React from "react";
import HeroVideoBg from "../components/HeroVideoBg";
import Nerds from "../components/Nerds";
import ContactForm from "../components/ContactForm";
import BackButton from "../components/BackButton";
export default function NerdsPage() {
  return (
   <> <HeroVideoBg>
      <div>
      <BackButton />
        <div className="relative z-100">
        <Nerds />
      
      </div>
    
      </div> 
    </HeroVideoBg>
    </>
  );
}
