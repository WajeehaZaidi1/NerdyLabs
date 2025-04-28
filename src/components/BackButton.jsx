import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import backAnimation from "../animations/arrow-left-bounce.json"; // Already imported

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // Go back to Home
  };

  return (
    <div
      onClick={handleBackClick}
      className="fixed top-20 left-6 w-12 h-12 cursor-pointer z-50"
      title="Back to Home"
    >
      <Lottie animationData={backAnimation} loop autoplay />
    </div>
  );
};

export default BackButton;
