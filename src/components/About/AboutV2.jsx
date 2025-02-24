import { useGSAP } from "@gsap/react";
import { fadeInFromSide } from "../../gsap/useGsapAnimations";

const aboutDetails = [
  {
    title: "What We Do",
    subtitle: "Seamless Solutions",
    description:
      "At Apex Solar Solutions, we provide a streamlined process for transitioning to solar energy. From consultation to installation, we handle every step with precision and transparency. Our team works closely with you to create a tailored solar solution that fits your energy needs and budget, ensuring a smooth and efficient journey to clean energy.",
  },
  {
    title: "Why Choose Us",
    subtitle: "Unmatched Value",
    description:
      "We stand out by offering innovative technology, exceptional service, and personalized solutions. Our commitment to quality and transparency ensures you receive the best possible solar experience. With Apex Solar Solutions, you're not just investing in energy savings—you're partnering with a team dedicated to your success and sustainability.",
  },
  {
    title: "Let Us Show You",
    subtitle: "Take the Next Step",
    description:
      "Ready to go solar? Let us guide you every step of the way. Contact us today for a free consultation and see how simple and rewarding solar energy can be. Together, we can achieve your energy goals and create a cleaner, more efficient future for everyone.",
  },
];

const AboutV2 = () => {
  useGSAP(() => {
    fadeInFromSide(".about-details-item", { side: -50 });
  }, {});
  return (
    <section id="about" className="relative z-30 bg-white pb-32 pt-20">
      {/* Hero section */}
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-blue-100/20 pt-14">
        <div
          id="skewHero"
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-full origin-top-right  bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-balance text-6xl font-semibold tracking-tight text-blue-950 sm:text-8xl lg:col-span-2 xl:col-auto fade-in-and-up">
              Welcome to Apex Solar Solutions
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-pretty text-xl md:text-2xl font-medium text-gray-600 fade-in-and-up">
                Apex Solar Solutions is committed to simplifying the journey to
                clean energy for homeowners and businesses in California. We believe solar
                power should be accessible, affordable, and hassle-free. By
                combining cutting-edge technology, industry expertise, and
                exceptional customer service, we aim to help you save on energy
                costs while making a positive impact on the planet. Join us in
                building a brighter, more sustainable future.
              </p>
            </div>
            <img
              style={{ aspectRatio: "6/6" }}
              alt="Sun appearing over solar panels"
              srcSet={`
    ${
      import.meta.env.VITE_S3_OBJECT_BASE_URL
    }faes/logos/ApexSolarLogoW350NoBuff.webp 150w,
    ${
      import.meta.env.VITE_S3_OBJECT_BASE_URL
    }faes/logos/ApexSolarLogoW768NoBuff.webp 320w
  `}
              sizes="(max-width: 500px) 150px, 320px"
              src={`${
                import.meta.env.VITE_S3_OBJECT_BASE_URL
              }faes/logos/faes/logos/ApexSolarLogoW768NoBuff.webp`}
              className=" fade-in-and-up w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 "
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Timeline section */}
      <div className="mx-auto -mt-8 max-w-1200px px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {aboutDetails.map((item) => (
            <div className="about-details-item" key={item.title}>
              <span className="flex items-center text-xl md:text-2xl font-semibold text-blue-600">
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 size-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.title}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </span>
              <p className="mt-6 text-xl md:text-2xl font-semibold tracking-tight text-blue-950 ">
                {item.subtitle}
              </p>
              <p className="mt-1 text-lg md:text-xl text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-16">
        <a
          href="#contact"
          type="button"
          className=" fade-in-and-up rounded-md bg-blue-600 max-w-64 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Contact Us Today!
        </a>
      </div>
    </section>
  );
};
export default AboutV2;
