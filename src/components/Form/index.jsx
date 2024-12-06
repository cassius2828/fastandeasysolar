// src/components/Contact.jsx
import InfoCard from "./InfoCard";
import Form from "./Form";
import { useGSAP } from "@gsap/react";
import { fadeInFromBottom } from "../../gsap/useGsapAnimations";


const Contact = () => {
  useGSAP(() => {
fadeInFromBottom('form-animation')
  },{})
  return (
    <section
      id="contact"
      className="h-screen relative z-30 bg-trasnsparent  flex flex-col items-center justify-center my-96 "
    >
      <div className="flex mx-auto items-center w-screen h-screen">
        <div className="form-animation flex flex-col-reverse gap-12 justify-center items-center lg:flex-row mx-auto my-4 px-4 ">
          <Form />
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
