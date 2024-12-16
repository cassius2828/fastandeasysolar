import { useGSAP } from "@gsap/react";
import {
  UilSun,
  UilSetting,
  UilUsdCircle,
  UilSmile,
  UilBatteryBolt,
  UilPlus,
  UilWrench,
  UilShield,
  UilRulerCombined,
} from "@iconscout/react-unicons";
import { fadeInFromBottom } from "../../gsap/useGsapAnimations";
const features = [
  // New features from the site owner's request
  {
    icon: <UilSun className="text-center" size="40" color="#0b4bb3" />,
    title: "Fast & Easy Process",
    text: "We streamline every step of the solar journey, from your free consultation to the final installation. Our team handles the paperwork, permits, and logistics, ensuring you can start enjoying the benefits of solar energy without any hassle or stress.",
  },
  {
    icon: <UilPlus className="text-center" size="40" color="#0b4bb3" />,

    title: "Partnered with Top Brands",
    text: "Our partnerships with industry-leading solar providers and products, including the Tesla Powerwall 3, ensure you get access to cutting-edge technology. We deliver high-quality solutions that offer reliability, efficiency, and long-term energy savings tailored to your needs.",
  },
  {
    icon: (
      <UilRulerCombined className="text-center" size="40" color="#0b4bb3" />
    ),
    title: "Tailored Solutions",
    text: "We believe that no two homes are the same. That’s why we take the time to analyze your energy consumption, roof design, and specific requirements to create a solar solution that maximizes savings, optimizes energy output, and provides long-term value.",
  },
  {
    icon: <UilSmile className="text-center" size="40" color="#0b4bb3" />,

    title: "Customer-First Service",
    text: "Your satisfaction is at the core of everything we do. From answering your questions to offering ongoing support, our team is committed to guiding you every step of the way. We’re here to ensure your transition to solar energy is smooth, stress-free, and rewarding.",
  },

  // Pre-existing features
  {
    icon: <UilSetting className="text-center" size="40" color="#0b4bb3" />,
    title: "Optimized Solar System Design",
    text: "Our solar system design prioritizes maximizing energy output and efficiency by thoroughly evaluating your location, calculating energy needs, selecting top-quality components, and ensuring ideal placement for long-term performance, reliability, and cost savings.",
  },
  {
    icon: <UilBatteryBolt className="text-center" size="40" color="#0b4bb3" />,
    title: "Tesla Powerwall 3 for Full Home Backup",
    text: "Ensure energy independence with the cutting-edge Tesla Powerwall 3. Store excess solar energy for backup power during outages, keeping your home powered 24/7.",
  },
  {
    icon: <UilUsdCircle className="text-center" size="40" color="#0b4bb3" />,
    title: "Flexible Solar Financing Solutions",
    text: "We offer various financing options, including solar loans, leases, and Power Purchase Agreements (PPAs), to spread out the costs of installation, making solar energy an affordable and accessible option for both homeowners and businesses.",
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
          <div className="mx-auto max-w-3xl lg:text-center">
            <h2 className="service-text text-7xl font-semibold text-deepblue">
              Services
            </h2>
            <p className="service-text mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Switch to Solar the Fast & Easy Way
            </p>
            <p className=" service-text mt-6 text-xl text-gray-600 text-left">
              At Fast and Easy Solar, we make going solar simple, quick, and
              hassle-free for homeowners. Our team specializes in helping you
              save money on energy bills while protecting your home from rising
              utility costs. Here’s why we’re the best choice for your solar
              journey
              <br />
              <br />
              Join the homeowners who’ve made the switch with us and start
              saving today. Get your free solar consultation and home survey
              now!
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
