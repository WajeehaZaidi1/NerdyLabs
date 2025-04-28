// import React from "react";
// import Lottie from "lottie-react";
// import boxes from "../data/solutionBoxData";

// export default function SolutionBoxes() {

//   return (
//     <div className="w-full max-w-7xl px-6 mt-12 relative">

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//         {boxes.map((box, i) => (
//           <div
//             key={i}
//             className="relative bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white flex flex-col justify-between items-center aspect-square hover:scale-105 transform transition-all duration-300"
//           >
//             <div className="absolute top-0 left-2 w-10 h-10">
//               <Lottie animationData={box.animation} loop autoplay />
//             </div>
//             <h3 className="text-lg font-semibold mt-4">{box.title}</h3>
//             <p className="text-sm text-center mt-2">{box.description}</p>
//             <button className="text-xs mt-auto px-3 py-1 border border-white rounded-full hover:bg-white hover:text-black transition mt-4">
//               {box.linkText}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import Lottie from "lottie-react";
import boxes from "../data/solutionBoxData";
import "./AnimatedBox.css"; // External animation styles

export default function SolutionBoxes() {
  return (
    <div className="w-full max-w-7xl px-6 py-8 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {boxes.map((box, i) => (
        <div
          key={i}
          className="animated-box group bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white flex flex-col justify-between items-center aspect-square hover:bg-opacity-20 transition"
        >
          <img src={box.backgroundImage} alt="" className="box-bg-image" />
          {/* Overlay on hover */}
          <div className="background-overlay group-hover:bg-black/30 absolute inset-0 transition duration-300" />

          {/* Top-left Lottie Animation */}
          <div className="absolute -top-6 -left-6 w-20 h-20 z-10">
            <Lottie animationData={box.animation} loop autoplay />
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col h-full justify-top items-center text-center p-4">
            <h3 className="text-lg font-bold font-sans">{box.title}</h3>
            <p className="text-sm mt-2">{box.description}</p>

            {/* Button on hover */}
            <button className="explore-button group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 px-3 py-1 border border-white rounded-full hover:bg-white hover:text-black">
              {box.linkText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
