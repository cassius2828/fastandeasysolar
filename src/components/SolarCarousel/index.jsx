import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInFromBottom } from "../../gsap/useGsapAnimations";
import CarouselNavBtns from "../Reusables/CarouselNavBtns";

const baseURL = `${import.meta.env.VITE_S3_OBJECT_BASE_URL}faes/stock-photos/`;

// const stockPhotos = [
//   {
//     mobile: `${baseURL}img1-W350.webp`,
//     tablet: `${baseURL}img1-W768.webp`,
//     desktop: `${baseURL}img1-W1440.webp`,
//   },
//   {
//     mobile: `${baseURL}img2-W350.webp`,
//     tablet: `${baseURL}img2-W768.webp`,
//     desktop: `${baseURL}img2-W1440.webp`,
//   },
//   {
//     mobile: `${baseURL}img3-W350.webp`,
//     tablet: `${baseURL}img3-W768.webp`,
//     desktop: `${baseURL}img3-W1440.webp`,
//   },
//   {
//     mobile: `${baseURL}img4-W350.webp`,
//     tablet: `${baseURL}img4-W768.webp`,
//     desktop: `${baseURL}img4-W1440.webp`,
//   },
//   {
//     mobile: `${baseURL}img5-W350.webp`,
//     tablet: `${baseURL}img5-W768.webp`,
//     desktop: `${baseURL}img5-W1440.webp`,
//   },
//   {
//     mobile: `${baseURL}img6-W350.webp`,
//     tablet: `${baseURL}img6-W768.webp`,
//     desktop: `${baseURL}img6-W1440.webp`,
//   },
//   {
//     mobile: `${baseURL}img7-W350.webp`,
//     tablet: `${baseURL}img7-W768.webp`,
//     desktop: `${baseURL}img7-W1440.webp`,
//   },
//   {
//     mobile: `${baseURL}img8-W350.webp`,
//     tablet: `${baseURL}img8-W768.webp`,
//     desktop: `${baseURL}img8-W1440.webp`,
//   },
//   {
//     mobile: `${baseURL}img9-W350.webp`,
//     tablet: `${baseURL}img9-W768.webp`,
//     desktop: `${baseURL}img9-W1440.webp`,
//   },
// ];
const stockPhotos_02_24_2025 = [
  {
    tablet: `${baseURL}imgv2-1-W768.webp`,
    desktop: `${baseURL}imgv2-1-W1440.webp`,
  },
  {
    tablet: `${baseURL}imgv2-2-W768.webp`,
    desktop: `${baseURL}imgv2-2-W1440.webp`,
  },
  {
    tablet: `${baseURL}imgv2-3-W768.webp`,
    desktop: `${baseURL}imgv2-3-W1440.webp`,
  },
  {
    tablet: `${baseURL}imgv2-4-W768.webp`,
    desktop: `${baseURL}imgv2-4-W1440.webp`,
  },
  {
    tablet: `${baseURL}imgv2-5-W768.webp`,
    desktop: `${baseURL}imgv2-5-W1440.webp`,
  },
];
const SolarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldPreload, setShouldPreload] = useState(false);
  const carouselRef = useRef(null);
  // preloads images in carousel for all responsive sizes
  const preloadImages = (imagesUrlArray) => {
    return imagesUrlArray?.map((url) => {
      const tabletImg = new Image();
      const desktopImg = new Image();
      tabletImg.src = url.tablet;
      desktopImg.src = url.desktop;
      return { tablet: tabletImg, desktop: desktopImg };
    });
  };
  // waits until component is near viewport to begin preloading carousel images
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldPreload(true);
          console.log("starting preload");
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // preloads images based on shouldPreload state
  useEffect(() => {
    if (shouldPreload) preloadImages(stockPhotos_02_24_2025);
  }, [shouldPreload]);

  useGSAP(() => {
    fadeInFromBottom(".stock-photos-container");
  }, {});
  return (
    <div ref={carouselRef} className="w-screen h-full relative z-30 mb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 md:pb-20 lg:pb-0 lg:pt-20 stock-photos-container">
        {/* <h2 className="capitalize text-6xl font-bold text-blue-800 text-center mb-4">
       A look at what our services can do for you
      </h2> */}
        <div className="relative flex flex-col items-center w-full  mx-auto  text-white">
          <ImgContainer img={stockPhotos_02_24_2025[currentIndex]} />
          {/* Navigation Controls */}
          <div className="mt-6 flex gap-3 w-72 px-5 lg:px-0 justify-between absolute bottom-8 z-30">
            <CarouselNavBtns
              array={stockPhotos_02_24_2025}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              typeOfCarousel="stockPhotos"
            />
          </div>
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
          {/* Mobile / Tablet */}
          <img
            src={img.tablet}
            alt="Solar panels on a home"
            className="object-cover w-full h-full"
            style={{ aspectRatio: "16 / 9" }}
          />
        </picture>
      </div>
    </div>
  );
}
