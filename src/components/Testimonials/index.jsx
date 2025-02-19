import { useState } from "react";
import CustomHR from "../Reusables/CustomHR";

const testimonials = [
  {
    text: "I had an amazing experience with Apex Solar Solution! Brandon was incredibly knowledgeable and took the time to explain everything in detail. He made the whole process seamless, from the initial consultation to installation. Now, my energy bill has dropped significantly, and I couldn’t be happier. Highly recommend Apex Solar for anyone looking to go solar!",
    name: "Brandon's Client",
  },
  {
    text: "Jose and the team at Apex Solar Solution were fantastic to work with! He was always available to answer my questions and made sure I understood every step of the process. The installation was quick, efficient, and done with great professionalism. If you’re thinking about switching to solar, this is the company to go with!",
    name: "Jose's Client",
  },
  {
    text: "I can’t say enough good things about Apex Solar Solution! Mathew made sure we got the best system for our needs and budget. The entire process was smooth, and the installation team did a flawless job. We’re already seeing savings on our electric bill, and I love knowing we’re using clean energy. Thank you, Mathew and Apex Solar!",
    name: "Mathew's Client",
  },
  {
    text: "Jose from Apex Solar Solution was a pleasure to work with. He was professional, patient, and extremely knowledgeable. He walked us through every step and made sure we were comfortable with our decision. Our solar system was installed quickly, and it’s already making a difference. Highly recommend!",
    name: "Jose's Client",
  },
  {
    text: "Jason and the Apex Solar Solution team were amazing! They handled everything from permits to installation, making the transition to solar stress-free. The customer service was top-notch, and we’re already seeing lower electricity bills. If you’re considering solar, go with Apex Solar and ask for Jason!",
    name: "Jason's Client",
  },
  {
    text: "Apex Solar Solution exceeded my expectations! Jose was incredibly helpful and made sure everything went smoothly. He answered all my questions with patience and expertise. The installation was fast and professional, and my system is performing better than I expected. I’m thrilled with the results—thanks, Jose and Apex Solar!",
    name: "Jose's Client",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-8 md:pb-20 lg:pb-0 lg:pt-20">
      <div className="relative flex flex-col items-center w-full  mx-auto p-6 text-white rounded-lg shadow-md  z-30">
      <h2 className="wwdtext text-6xl font-bold text-gray-100">
       Testimonials
      </h2>
      <CustomHR gsapSelector={"wwdtext"} bgColor="#fff" />

        <Testimonial
          img={testimonials[currentIndex].img}
          name={testimonials[currentIndex].name}
          text={testimonials[currentIndex].text}
        />
        {/* Navigation Controls */}
        <div className="mt-6 flex gap-4  w-screen px-5 lg:px-0 md:w-full justify-between absolute top-1/2 -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-800 outline outline-white hover:bg-gray-700 rounded-md"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-800 outline outline-white hover:bg-gray-700 rounded-md"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

function Testimonial({ text }) {
  return (
    <div className="pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-blue-950 rounded-md p-3 pb-20 sm:pb-24 xl:pb-0 xl:h-[38rem]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="relative h-full hidden xl:block  -mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="absolute translate-y-1/3  aspect-[2/1] h-auto lg:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                alt="Apex Solar Logo"
                src="/images/ApexSolarLogoW350NoBuff.webp"
                srcSet="
    /images/ApexSolarLogoW350NoBuff.webp 350w,
    /images/ApexSolarLogoW768NoBuff.webp 768w
  "
                sizes="(max-width: 767px) 350px, 768px"
                className=" inset-0  rounded-2xl bg-gray-200 object-contain shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 fade-in">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                fill="none"
                viewBox="0 0 162 128"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <path
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                />
                <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
              </svg>
              <blockquote className="xl:h-[38rem] text-2xl leading-8  text-white ">
                <p>{text}</p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
