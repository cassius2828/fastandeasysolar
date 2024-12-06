import { useGSAP } from "@gsap/react";
import CustomHR from "../Reusables/CustomHR";
import EverbrightLogo from "/images/logos/everbright-logo.webp";
import { fadeInFromBottom } from "../../gsap/useGsapAnimations";
const SunrunLogo = `${
  import.meta.env.VITE_S3_OBJECT_BASE_URL
}faes/logos/sunrun-logo.webp`;
const SunnovaLogo = `${
  import.meta.env.VITE_S3_OBJECT_BASE_URL
}faes/logos/sunnova-logo-color-3.webp`;
const SunPowerLogo = `${
  import.meta.env.VITE_S3_OBJECT_BASE_URL
}faes/logos/SunPower.webp`;
const GoodLeapLogo = `${
  import.meta.env.VITE_S3_OBJECT_BASE_URL
}faes/logos/goodleap.webp`;
const EnFinLogo = `${
  import.meta.env.VITE_S3_OBJECT_BASE_URL
}faes/logos/enfin.webp`;
const TeslaLogo2 = "https://v3electric.com/static/images/tesla_logo.png";

const affiliates = [
  { name: "Tesla", logo: TeslaLogo2 },
  { name: "Sunrun", logo: SunrunLogo },
  { name: "Everbright", logo: EverbrightLogo },
  { name: "Sunnova", logo: SunnovaLogo },
  { name: "SunPower", logo: SunPowerLogo },
  { name: "good leap", logo: GoodLeapLogo },
  { name: "En Fin", logo: EnFinLogo },
];

const Affiliates = () => {
  useGSAP(() => {
    fadeInFromBottom(".affiliate-text");
  }, {});
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-3 bg-gray-100 relative z-20">
      <h2 className="affiliate-text text-5xl font-bold mb-0 text-blue-900 text-center">
        Certified Partners and Installers
      </h2>
      <CustomHR gsapSelector={"affiliate-text"} bgColor="#1e3a8a" />
      <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-1 w-full place-items-center mt-12">
        {affiliates.map((affiliate, index) => (
          <div
            key={index}
            className="affiliate-text flex flex-col items-center"
          >
            <img
              loading="lazy"
              src={affiliate.logo}
              alt={`${affiliate.name} logo`}
              className="w-60 md:w-80 mb-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliates;
