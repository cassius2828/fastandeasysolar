import React from "react";

const InfoCard = () => {
  return (
    <div
      style={{ maxWidth: "40rem" }}
      className="w-full px-8 py-12 mb-8 lg:mb-0 bg-blue-900 rounded-2xl"
    >
      <div className="flex flex-col text-white">
        {/* Header */}
        <h1 className="font-bold uppercase text-4xl my-4">
          Drop in our office
        </h1>

        {/* Description */}
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur vitae
          nibh viverra, auctor turpis sed, scelerisque ex.
        </p>

        {/* Office Location */}
        <div className="flex my-4 w-2/3 lg:w-1/2">
          <div className="flex flex-col">
            <i className="fas fa-map-marker-alt pt-2 pr-2" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">Main Office</h2>
            <p className="text-gray-400">
              5555 Tailwind RD, Pleasant Grove, UT 73533
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex my-4 w-2/3 lg:w-1/2">
          <div className="flex flex-col">
            <i className="fas fa-phone-alt pt-2 pr-2" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">Contact Us</h2>
            <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
            <p className="text-gray-200">Email: fastandeasysolar@gmail.com</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex my-4 w-2/3 lg:w-1/2">
          <a
            href="https://www.facebook.com/ENLIGHTENEERING/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
          >
            <i className="fab fa-facebook-f text-blue-900" />
          </a>
          <a
            href="https://www.linkedin.com/company/enlighteneering-inc-"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
          >
            <i className="fab fa-linkedin-in text-blue-900" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
