// import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { useGSAP } from "@gsap/react";
import {
  UilSun,
  UilSetting,
  UilUsdCircle,
  UilHome,
  UilBatteryBolt,
  UilPlug,
  UilWrench,
  UilShield,
} from "@iconscout/react-unicons";
import { fadeInFromBottom } from "../../gsap/useGsapAnimations";
const features = [
  {
    icon: <UilSetting className="text-center" size="40" color="#0b4bb3" />,
    title: "Optimized Solar System Design",
    text: "Our solar system design prioritizes maximizing energy output and efficiency by thoroughly evaluating your location, calculating energy needs, selecting top-quality components, and ensuring ideal placement for long-term performance, reliability, and cost savings.",
  },
  {
    icon: <UilUsdCircle className="text-center" size="40" color="#0b4bb3" />,
    title: "Flexible Solar Financing Solutions",
    text: "We offer various financing options, including solar loans, leases, and Power Purchase Agreements (PPAs), to spread out the costs of installation, making solar energy an affordable and accessible option for both homeowners and businesses.",
  },
  {
    icon: <UilHome className="text-center" size="40" color="#0b4bb3" />,
    title: "Rooftop Solar for Sustainable Living",
    text: "Installing solar panels on your roof converts sunlight into electricity, significantly lowering energy bills, reducing dependency on fossil fuels, and contributing to environmental sustainability for both residential and commercial properties.",
  },
  {
    icon: <UilSun className="text-center" size="40" color="#0b4bb3" />,
    title: "Efficient Ground-Mounted Solar Systems",
    text: "Ground-mounted solar systems, installed on open land, are designed to maximize sunlight exposure, allowing for easier maintenance and scalability, making them an efficient solution for generating renewable energy.",
  },
  {
    icon: <UilBatteryBolt className="text-center" size="40" color="#0b4bb3" />,
    title: "Reliable Solar Battery Storage",
    text: "Solar battery storage systems store excess energy generated by your solar panels for use during periods of low sunlight, ensuring a reliable power supply, reducing dependency on the grid, lowering energy bills, and enhancing energy security.",
  },
  {
    icon: <UilPlug className="text-center" size="40" color="#0b4bb3" />,
    title: "Upgrading to a High-Capacity Main Electric Panel",
    text: "Upgrading your main electric panel to a higher-capacity model ensures that your home can safely and efficiently handle modern appliances and solar systems, improving overall energy management and safety.",
  },
  {
    icon: <UilWrench className="text-center" size="40" color="#0b4bb3" />,
    title: "Professional Solar Installation Services",
    text: "Our professional solar installation services include comprehensive site assessment, customized design, permitting, and final installation, ensuring a safe and efficient setup that optimizes energy production and delivers long-term savings.",
  },
  {
    icon: <UilShield className="text-center" size="40" color="#0b4bb3" />,
    title: "Comprehensive Solar System Warranty",
    text: "Our comprehensive solar system warranty offers peace of mind, backed by prompt local service and maintenance in the Sacramento Valley area, ensuring your system's longevity and reliability.",
  },
];

export default function Services() {
  useGSAP(() => {
    fadeInFromBottom(".service-text");
  }, {});
  return (
    <>
      <div id="scroll-to-services" className="relative -top-56"></div>

      <section
        id="services"
        className="bg-gray-100 py-24 sm:py-32 relative z-30"
      >
        <div className="mx-auto max-w-1400px px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="service-text text-7xl font-semibold text-deepblue">
              Services
            </h2>
            <p className=" service-text mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              What we can provide to you
            </p>
            <p className=" service-text mt-6 text-lg/8 text-gray-600 text-left">
              At Fast and Easy Solar, we act as the essential bridge between
              residents and the companies performing solar installations and
              services. Leveraging our expertise in all things solar, we
              efficiently guide customers through the process, connecting them
              with the best programs, tools, and services to meet their energy
              needs. 
              <br/>
              <br/>
              We simplify decision-making by consulting on the most
              cost-effective solutions to reduce monthly energy bills, ensuring
              our customers fully understand their options. With Fast and Easy
              Solar, you gain a trusted partner dedicated to maximizing your
              savings and making the switch to solar effortless.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <ServiceCard key={feature.name} feature={feature} />
              ))}
            </dl>
          </div>
        </div>
        {/* <svg className="relative top-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0b4bb3"
          fillOpacity="1"
          d="M0,224L60,192C120,160,240,96,360,80C480,64,600,96,720,128C840,160,960,192,1080,202.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}
      </section>
    </>
  );
}

export const ServiceCard = ({ feature }) => {
  useGSAP(() => {
    fadeInFromBottom(".service-card");
  }, {});
  return (
    <div className="service-card bg-white flex flex-col rounded-md p-5 shadow-md hover:shadow-deepblue transition-shadow duration-200">
      <dt className="flex items-center gap-x-2 font-semibold text-gray-900 text-3xl">
        <div className="flex justify-center w-full my-6">{feature.icon}</div>
        <span className="w-full">{feature.title}</span>
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-2xl text-gray-600">
        <p className="flex-auto">{feature.text}</p>
        <p className="mt-6">
          <a href={"#contact"} className="text-xl font-semibold text-deepblue">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </p>
      </dd>
    </div>
  );
};
