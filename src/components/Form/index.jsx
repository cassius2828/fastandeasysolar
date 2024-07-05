// src/components/Contact.jsx
import React from "react";
import InfoCard from "./InfoCard";
import Form from "./Form";
import { FormProvider } from "../../context/FormContext";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen relative z-40 bg-trasnsparent p-8 flex flex-col items-center justify-center"
    >
      <div className="flex mx-auto  items-center w-screen h-screen">
        {/* <!-- COMPONENT CODE --> */}
        <div className=" flex flex-col-reverse justify-center items-center lg:flex-row mx-auto my-4 px-4 ">
          <FormProvider>
            <Form />
          </FormProvider>
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
