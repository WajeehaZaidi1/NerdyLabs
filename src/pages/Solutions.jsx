import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import HeroVideoBg from "../components/HeroVideoBg";
import SolutionBoxes from "../components/SolutionBoxes";
import backAnimation from "../animations/arrow-left-bounce.json";

export default function Solutions() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // Go back to home
  };

  return (
    <>
      <HeroVideoBg>
        {/* Fixed Clickable Back Icon in Top-Left */}
        <div
          onClick={handleBackClick}
          className="fixed top-20 left-6 w-12 h-12 cursor-pointer z-50 "
          title="Back to Hero"
        >
          <Lottie animationData={backAnimation} loop autoplay />
        </div>

        <p className="text-md md:text-lg max-w-3xl pt-10">
          From Generative AI to Full-Stack Development — discover how NerdyLabs
          empowers businesses with cutting-edge technology.
        </p>

        <SolutionBoxes />
      </HeroVideoBg>
    </>
  );
}
