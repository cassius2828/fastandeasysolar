// src/components/Contact.jsx
import InfoCard from "./InfoCard";
import Form from "./Form";


const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen relative z-30 bg-trasnsparent  flex flex-col items-center justify-center my-96 "
    >
      <div className="flex mx-auto  items-center w-screen h-screen">
        <div className=" flex flex-col-reverse justify-center items-center lg:flex-row mx-auto my-4 px-4 ">
          <Form />
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
