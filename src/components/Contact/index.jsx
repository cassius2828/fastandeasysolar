// src/components/Contact.jsx
import React from "react";
import InfoCard from "./InfoCard";
import Form from "./Form";


const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen relative z-40 bg-gray-100 p-8 flex flex-col items-center justify-center"
    >




      <div className="flex mx-auto  items-center w-screen h-screen">
        {/* <!-- COMPONENT CODE --> */}
        <div className="container flex flex-col-reverse justify-center items-center lg:flex-row mx-auto my-4 px-4 lg:px-20">
          <Form />
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
