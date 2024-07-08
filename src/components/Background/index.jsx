import React from "react";
import useWindowWidth from "../../customHooks/useWindowWidth";

//////////////////////
// Background Component
////////////////////
const Background = () => {
  //////////////////////
  // Get Window Width
  //////////////////////
  const windowWidth = useWindowWidth();

  return (
    <section
      id="Background"
      className="h-screen w-screen flex items-center justify-center fixed top-0 z-20 bg-[#130a28]"
    >
      {/* Gradient Background */}
      <div className="absolute z-0 h-full w-full inset-0 bg-gradient-vertical fade-in-and-up-sky"></div>
      
      {/* Conditional Background Image */}
      <picture className="absolute z-0 h-full w-full">
        {windowWidth <= 599 ? (
          <img
            className="absolute top-0 left-0"
            src="/images/city-bg-tall.webp"
            alt="City Background for small screens"
          />
        ) : (
          <img
            className="fade-in-and-up-land absolute top-0 left-0"
            src="/images/city-bg-no-sky.webp"
            alt="City Background for large screens"
          />
        )}
      </picture>

      {/* Overlay */}
      <div className="absolute w-full h-full bg-gray-800 opacity-40"></div>
    </section>
  );
};

export default Background;
