import React from "react";
import HeroVideoBg from "../components/HeroVideoBg";
import Nerds from "../components/Nerds";
import ContactForm from "../components/ContactForm";
import BackButton from "../components/BackButton";
export default function ContactPage() {
  return (
     <>
      <HeroVideoBg>
      <BackButton />
    <div className="w-full">
        {/* <Nerds /> */}
        <ContactForm/>
      </div>
    
 
    </HeroVideoBg>
    </>
  );
}
