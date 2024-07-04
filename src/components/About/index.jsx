import { UilSun } from "@iconscout/react-unicons";

// src/components/About.jsx
import React, { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const About = () => {
  const [cardToFlip, setCardToFlip] = useState(0);
  return (
    <section
      id="about"
      className="relative z-30 h-full min-h-screen bg-white  flex items-center justify-center"
    >
      <img
        className="absolute w-full top-0 hidden lg:block"
        src="/images/circle-spread.svg"
        alt=""
      />
   
      <div className="relative inset-0 flex items-center justify-center p-8 h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 w-9/12">
          <InfoCard cardToFlip={cardToFlip} setCardToFlip={setCardToFlip} />
          <InfoCard cardToFlip={cardToFlip} setCardToFlip={setCardToFlip} />
          <InfoCard cardToFlip={cardToFlip} setCardToFlip={setCardToFlip} />
          <InfoCard cardToFlip={cardToFlip} setCardToFlip={setCardToFlip} />
        </div>
      </div>
      {/* <ParallaxBanner
        layers={[
          {
            speed: 15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center bg-white p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 w-9/12">
                  <InfoCard
                    cardToFlip={cardToFlip}
                    setCardToFlip={setCardToFlip}
                  />
                  <InfoCard
                    cardToFlip={cardToFlip}
                    setCardToFlip={setCardToFlip}
                  />
                  <InfoCard
                    cardToFlip={cardToFlip}
                    setCardToFlip={setCardToFlip}
                  />
                  <InfoCard
                    cardToFlip={cardToFlip}
                    setCardToFlip={setCardToFlip}
                  />
                </div>
              </div>
            ),
          },
        ]}
        className="h-full w-full"
      /> */}
    </section>
  );
};

export default About;

export const InfoCard = ({ cardToFlip, setCardToFlip }) => {
  return (
    <div className="card  w-full lg:min-h-[50rem] text-center rounded-lg ">
      <div className="bg-gradient-vertical-infocard card__side card__side--front flex flex-col justify-around">
        <div className="flex justify-center w-full my-12">
          <UilSun className="text-center" size="100" color="#f2f2f2" />
        </div>

        <div className="">
          <h3 className="text-gray-100 text-7xl my-12">title</h3>
        </div>
        <div className="footer my-12">
          <button className="p-4 border border-gray-100 text-gray-100 hover:bg-gray-50 hover:opacity-90 hover:text-[#5e565e] transition-all duration-300 ease-in-out text-3xl rounded-lg">
            learn more
          </button>
        </div>
      </div>
      <div className="card__side card__side--back flex items-center justify-center p-4 text-gray-200 text-2xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          laboriosam perspiciatis ducimus odio porro dolore esse voluptates vero
          corrupti sit saepe impedit ut repellat vel, voluptatem numquam cum
          ratione animi!
        </p>
      </div>
    </div>
  );
};
