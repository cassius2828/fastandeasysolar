import { UilSun } from "@iconscout/react-unicons";

// src/components/About.jsx
import React, { useState } from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-30 h-full min-h-screen bg-transparent  flex items-center justify-center"
    >
      <div className="relative inset-0 flex items-center justify-center p-8 h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 w-9/12">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default About;

export const InfoCard = ({ cardToFlip, setCardToFlip }) => {
  return (
    <div className="bg-gradient-vertical-infocard flex flex-col justify-around card  w-full lg:h-[50rem] text-center rounded-lg ">
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
  );
};
