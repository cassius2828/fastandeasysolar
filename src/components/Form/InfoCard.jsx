import React from "react";
import SocialList from "../Reusables/SocialList";
import { UilPhone } from "@iconscout/react-unicons";
const InfoCard = () => {
  return (
    <div
      style={{ maxWidth: "40rem" }}
      className="w-full px-8 py-12 mb-8 lg:mb-0 bg-blue-900 rounded-2xl"
    >
      <div className="flex flex-col text-white">
        {/* Header */}
        <h1 className="font-bold uppercase text-4xl my-4">
          Contact Us Directly
        </h1>

        {/* Contact Information */}
        <div className="flex my-4 w-2/3 lg:w-1/2 ">
          <div className="flex flex-col">
            <i className="fas fa-phone-alt pt-2 pr-2" />
          </div>
          <div
            className="flex flex-col text-3xl 
text-gray-50 "
          >
            <p className="">
              <span className="flex items-center mb-2">
                Tel:{" "}
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  id="phone"
                >
                  <path d="M13.216 8.064c-.382-4.394-4.966-6.55-5.16-6.638a.974.974 0 0 0-.582-.078c-5.292.878-6.088 3.958-6.12 4.086a.99.99 0 0 0 .02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234a.99.99 0 0 0 .722-.042c.132-.06 3.248-1.528 4.01-6.316a.997.997 0 0 0-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a.977.977 0 0 0-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-.07-.57 1.236-2.572 2.738-4.2a.998.998 0 0 0 .26-.766z"></path>
                </svg>
              </span>
              555-555-5555
            </p>

            <p className="mt-8">
              <span className="flex items-center mb-2">
                Email:{" "}
                <svg
                  fill="#fff"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 96"
                  id="email"
                >
                  <g>
                    <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                  </g>
                </svg>
              </span>
              fastandeasysolar@gmail.com
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        {/* <SocialList orientation="x" /> */}
      </div>
    </div>
  );
};

export default InfoCard;
