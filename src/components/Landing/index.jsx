// src/components/Landing.jsx
import React from 'react';
import { ParallaxBanner,  } from 'react-scroll-parallax';

const Landing = () => {

  return (

      <section id="landing" className="h-screen  flex items-center justify-center fixed w-screen top-0 z-30 bg-[#130a28]">
        <ParallaxBanner
          layers={[
            {
              speed: -20,
              children: (
                <div className="absolute z-0 h-full w-full inset-0 bg-gradient-vertical fade-in-and-up-sky"></div>
              ),
            },
            {
        
              image: '/images/city-bg-no-sky.webp',
        
              scale: [1, 2, 'easeOutCubic'],
              shouldAlwaysCompleteAnimation: true,
              // speed: -20,
              className: 'fade-in-and-up-land absolute top-0',  // Apply fade-in class to image layer
            },
          ]}
          className="h-full w-full "
        >
          <div className="absolute z-20 inset-0 flex flex-col items-center justify-center fade-in-scale-down">
            <h1 className="text-9xl font-bold mb-8 text-white">Fast and Easy Solar</h1>
            <p className="mt-4 text-3xl text-white">See what you could save now!</p>
          </div>
        </ParallaxBanner>
        <div className='absolute w-full h-full bg-gray-800 opacity-40'></div>
      </section>
  
  );
};

export default Landing;
