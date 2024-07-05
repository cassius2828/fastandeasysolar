// src/components/Landing.jsx
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const Background = () => {
  return (
    <section
      id="Background"
      className="h-screen w-screen flex items-center justify-center fixed  top-0 z-30 bg-[#130a28]"
    >
      <div className="absolute z-0 h-full w-full inset-0 bg-gradient-vertical fade-in-and-up-sky"></div>
      <img
        className="fade-in-and-up-land absolute top-0"
        src="/images/city-bg-no-sky.webp"
        alt=""
      />

      <div className="absolute w-full h-full bg-gray-800 opacity-40"></div>
    </section>
  );
};

export default Background;
