
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
import { ContactBtnDark } from "../Reusables/Buttons";

//////////////////////
// Services Component
//////////////////////
const Services = () => {
  // Data array with objects for each InfoCard
  const servicesData = [
    {
      icon: <UilSetting className="text-center" size="100" color="#1e3a8a" />,
      title: "Optimized Solar System Design",
      text: "Our solar system design prioritizes maximizing energy output and efficiency by thoroughly evaluating your location, calculating energy needs, selecting top-quality components, and ensuring ideal placement for long-term performance, reliability, and cost savings.",
    },
    {
      icon: <UilUsdCircle className="text-center" size="100" color="#1e3a8a" />,
      title: "Flexible Solar Financing Solutions",
      text: "We offer various financing options, including solar loans, leases, and Power Purchase Agreements (PPAs), to spread out the costs of installation, making solar energy an affordable and accessible option for both homeowners and businesses.",
    },
    {
      icon: <UilHome className="text-center" size="100" color="#1e3a8a" />,
      title: "Rooftop Solar for Sustainable Living",
      text: "Installing solar panels on your roof converts sunlight into electricity, significantly lowering energy bills, reducing dependency on fossil fuels, and contributing to environmental sustainability for both residential and commercial properties.",
    },
    {
      icon: <UilSun className="text-center" size="100" color="#1e3a8a" />,
      title: "Efficient Ground-Mounted Solar Systems",
      text: "Ground-mounted solar systems, installed on open land, are designed to maximize sunlight exposure, allowing for easier maintenance and scalability, making them an efficient solution for generating renewable energy.",
    },
    {
      icon: (
        <UilBatteryBolt className="text-center" size="100" color="#1e3a8a" />
      ),
      title: "Reliable Solar Battery Storage",
      text: "Solar battery storage systems store excess energy generated by your solar panels for use during periods of low sunlight, ensuring a reliable power supply, reducing dependency on the grid, lowering energy bills, and enhancing energy security.",
    },
    {
      icon: <UilPlug className="text-center" size="100" color="#1e3a8a" />,
      title: "Upgrading to a High-Capacity Main Electric Panel",
      text: "Upgrading your main electric panel to a higher-capacity model ensures that your home can safely and efficiently handle modern appliances and solar systems, improving overall energy management and safety.",
    },
    {
      icon: <UilWrench className="text-center" size="100" color="#1e3a8a" />,
      title: "Professional Solar Installation Services",
      text: "Our professional solar installation services include comprehensive site assessment, customized design, permitting, and final installation, ensuring a safe and efficient setup that optimizes energy production and delivers long-term savings.",
    },
    {
      icon: <UilShield className="text-center" size="100" color="#1e3a8a" />,
      title: "Comprehensive Solar System Warranty",
      text: "Our comprehensive solar system warranty offers peace of mind, backed by prompt local service and maintenance in the Sacramento Valley area, ensuring your system's longevity and reliability.",
    },
  ];

  return (
    <>
      {/* Scroll Target */}
      <div id="scroll-to-services" className="relative -top-56"></div>
      {/* Services Section */}
      <section
        id="services"
        className="relative z-30 h-full min-h-screen bg-transparent flex items-center justify-center"
      >
        <div className="relative inset-0 flex items-center justify-center p-8 h-full w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-9/12">
            {servicesData.map((service, index) => (
              <InfoCard
                key={index}
                icon={service.icon}
                title={service.title}
                text={service.text}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

//////////////////////
// InfoCard Component
//////////////////////
export const InfoCard = ({ text, icon, title }) => {
  const formattedTitle = title.split(' ').join('').toLowerCase();
  return (
    <div id={formattedTitle} className="bg-gray-100 flex flex-col justify-around card w-full lg:h-500px text-center rounded-lg p-4">
      {/* Icon */}
      <div className="flex justify-center w-full my-6">{icon}</div>

      {/* Title and Description */}
      <div className="">
        <h3 className="text-blue-900 text-4xl md:text-7xl mb-6">{title}</h3>
        <p className="p-4 text-blue-900 text-2xl md:text-3xl">{text}</p>
      </div>

      {/* Contact Button */}
      <div className="footer my-12">
        <ContactBtnDark text="consult an expert today" />
      </div>
    </div>
  );
};
