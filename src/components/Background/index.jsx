// src/components/Landing.jsx
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const Background = () => {
  return (
    <section
      id="Background"
      className="h-screen w-screen flex items-center justify-center fixed  top-0 z-20 bg-[#130a28]"
    >
      <div className="absolute z-0 h-full w-full inset-0 bg-gradient-vertical fade-in-and-up-sky"></div>
      <picture className="absolute z-0 h-full w-full">
        <source
          className=" fade-in-and-up-land absolute top-0 left-0"
          srcSet="/images/city-bg-tall.webp"
          media="(max-width: 599px)"
        />
        <img
          className="fade-in-and-up-land absolute top-0"
          src="/images/city-bg-no-sky.webp"
          alt="City Background"
        />
      </picture>

      <div className="absolute w-full h-full bg-gray-800 opacity-40"></div>
    </section>
  );
};

export default Background;
