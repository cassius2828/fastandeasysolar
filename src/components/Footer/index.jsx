import React from "react";
import {
  UilInstagram,
  UilLinkedin,
  UilFacebookF,
  UilYoutube,
  UilArrowUp,
} from "@iconscout/react-unicons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-blue-900 p-12 text-center text-white relative z-30">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
        {/* footer col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8">Programs</h4>
          <ul className="text-xl flex flex-col justify-center items-center gap-4">
            <li>Purchase</li>
            <li>Lease</li>
            <li>PPA</li>
          </ul>
        </div>
        {/* footer col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8">Services</h4>
          <ul className="text-xl flex flex-col justify-center items-center gap-4">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
        </div>
        {/* footer col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8">Contact</h4>
          <ul className="text-xl flex flex-col justify-center items-center gap-4">
            <li>Email: fastandeasysolar@gmail.com</li>
            <li>Office: (916) xxx-xxxx</li>
          </ul>
        </div>
        {/* footer col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8">Location</h4>
          <ul className="text-xl flex flex-col justify-center items-center gap-4">
            <li>123 Your Office Blvd</li>
            <li>Vacaville, CA 95687</li>
          </ul>
        </div>
        {/* footer col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8">Social</h4>
          <ul className="text-xl flex flex-col justify-center items-center relative space-y-2 gap-4">
            <li className="flex items-center justify-between  w-1/2">
              <div className="flex items-center">
                <UilInstagram size="24" className="mr-2" />
                Instagram:
              </div>
              <span className="hover:text-blue-300 transition-all duration-200 ease-in-out cursor-pointer ml-1">
                @fastandeasysolar
              </span>
            </li>
            <li className="flex items-center justify-between  w-1/2">
              <div className="flex items-center">
                <UilFacebookF size="24" className="mr-2" />
                Facebook:
              </div>
              <span className="hover:text-blue-300 transition-all duration-200 ease-in-out cursor-pointer ml-1">
                fastandeasysolar
              </span>
            </li>
            <li className="flex items-center justify-between  w-1/2">
              <div className="flex items-center">
                <UilLinkedin size="24" className="mr-2" />
                LinkedIn:
              </div>
              <span className="hover:text-blue-300 transition-all duration-200 ease-in-out cursor-pointer ml-1">
                fastandeasysolar
              </span>
            </li>
            <li className="flex items-center justify-between w-1/2">
              <div className="flex items-center">
                <UilYoutube size="24" className="mr-2" />
                YouTube:
              </div>
              <span className="hover:text-blue-300 transition-all duration-200 ease-in-out cursor-pointer ml-1">
                fastandeasysolar
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex justify-around items-end gap-4">
        <img width="300" src="/images/logo.svg" alt="" />
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </div>

      <div
        onClick={scrollToTop}
        className="flex items-center justify-center fixed bottom-12 right-6 z-50 bg-gray-500 hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-pointer rounded-full p-2"
      >
        <UilArrowUp size="24" />
      </div>
    </footer>
  );
};

export default Footer;
