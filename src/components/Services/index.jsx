import { UilSun } from "@iconscout/react-unicons";

// src/components/About.jsx
import React, { useState } from "react";
import { ContactBtn } from "../Reusables/Buttons";

const Services = () => {
  return (
    <>
      <div id="scroll-to-services" className="relative -top-56 "></div>
      <section
        id="services"
        className="relative z-30 h-full min-h-screen bg-transparent  flex items-center justify-center"
      >
        <div className="relative inset-0 flex items-center justify-center p-8 h-full w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-9/12">
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

export const InfoCard = () => {
  return (
    <div className=" bg-gray-200 flex flex-col justify-around card  w-full lg:h-[50rem] text-center rounded-lg ">
      <div className="flex justify-center w-full my-6">
        <UilSun className="text-center" size="100" color="#1e3a8a" />
      </div>

      <div className="">
        <h3 className="text-blue-900 text-7xl mb-6">title</h3>
        <p className="p-4 text-blue-900 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consequuntur eos omnis tempora asperiores ratione fuga culpa obcaecati
          ea. Est fugit neque similique animi amet vel quisquam assumenda
          inventore! Ipsum.
        </p>
      </div>
      <div className="footer my-12">
        <ContactBtn text="consult an expert today" propColor={`blue`} />
      </div>
    </div>
  );
};
