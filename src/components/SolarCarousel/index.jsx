import { useState } from "react";

import { useGSAP } from "@gsap/react";
import { fadeInFromBottom } from "../../gsap/useGsapAnimations";

const baseURL = `${import.meta.env.VITE_S3_OBJECT_BASE_URL}faes/stock-photos/`;

const stockPhotos = [
  {
    mobile: `${baseURL}img1-W350.webp`,
    tablet: `${baseURL}img1-W768.webp`,
    desktop: `${baseURL}img1-W1440.webp`,
  },
  {
    mobile: `${baseURL}img2-W350.webp`,
    tablet: `${baseURL}img2-W768.webp`,
    desktop: `${baseURL}img2-W1440.webp`,
  },
  {
    mobile: `${baseURL}img3-W350.webp`,
    tablet: `${baseURL}img3-W768.webp`,
    desktop: `${baseURL}img3-W1440.webp`,
  },
  {
    mobile: `${baseURL}img4-W350.webp`,
    tablet: `${baseURL}img4-W768.webp`,
    desktop: `${baseURL}img4-W1440.webp`,
  },
  {
    mobile: `${baseURL}img5-W350.webp`,
    tablet: `${baseURL}img5-W768.webp`,
    desktop: `${baseURL}img5-W1440.webp`,
  },
  {
    mobile: `${baseURL}img6-W350.webp`,
    tablet: `${baseURL}img6-W768.webp`,
    desktop: `${baseURL}img6-W1440.webp`,
  },
  {
    mobile: `${baseURL}img7-W350.webp`,
    tablet: `${baseURL}img7-W768.webp`,
    desktop: `${baseURL}img7-W1440.webp`,
  },
  {
    mobile: `${baseURL}img8-W350.webp`,
    tablet: `${baseURL}img8-W768.webp`,
    desktop: `${baseURL}img8-W1440.webp`,
  },
  {
    mobile: `${baseURL}img9-W350.webp`,
    tablet: `${baseURL}img9-W768.webp`,
    desktop: `${baseURL}img9-W1440.webp`,
  },
];

const SolarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stockPhotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? stockPhotos.length - 1 : prev - 1));
  };
  useGSAP(() => {
    fadeInFromBottom(".stock-photos-container");
  }, {});
  return (
    <div className="w-screen h-full relative z-30 mb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 md:pb-20 lg:pb-0 lg:pt-20 stock-photos-container">
        {/* <h2 className="capitalize text-6xl font-bold text-blue-800 text-center mb-4">
       A look at what our services can do for you
      </h2> */}
        <div className="relative flex flex-col items-center w-full  mx-auto  text-white">
          <ImgContainer img={stockPhotos[currentIndex]} />
          {/* Navigation Controls */}
          <div className="mt-6 flex gap-4  w-screen px-5 lg:px-0 md:w-full justify-between absolute top-1/2 -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-800 outline outline-white hover:bg-gray-700 rounded-md"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-800 outline outline-white hover:bg-gray-700 rounded-md"
            >
              ▶
            </button>
          </div>
          <span className="absolute bottom-8 text-blue-950 z-30 text-4xl">
            {currentIndex + 1} / {stockPhotos.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolarCarousel;

function ImgContainer({ img }) {
  return (
    <div className="pb-20">
      <div
        style={{ maxWidth: "80rem", height: "30rem" }}
        className="bg-blue-950  rounded-md p-3  "
      >
        <picture>
          {/* Desktop */}
          <source media="(min-width: 1025px)" srcSet={img.desktop} />
          {/* Tablet */}
          <source media="(min-width: 768px)" srcSet={img.tablet} />
          {/* Mobile */}
          <img
            src={img.mobile}
            alt="Solar panels on a home"
            className="object-cover w-full h-full"
            style={{ aspectRatio: "16 / 9" }}
          />
        </picture>
      </div>
    </div>
  );
}
