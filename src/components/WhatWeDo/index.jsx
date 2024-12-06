import {
  UilRulerCombined,
  UilProcess,
  UilClipboardAlt,
  UilBolt,
  UilWrench,
  UilMonitor,
} from "@iconscout/react-unicons";
import CustomHR from "../Reusables/CustomHR";
const WhatWeDoItem = ({ title, description, icon }) => {
  return (
    <div className="w-full px-4 py-2 my-12">
      <div>
        {icon}
        <h3 className="text-4xl font-semibold text-blue-900 mb-2">{title}</h3>
      </div>
      <p className="text-2xl text-gray-800">{description}</p>
    </div>
  );
};

export const WhatWeDo = () => {
  const services = [
    {
      title: "Design",
      description:
        "Every home is unique so we provide a custom system design to fit your roof.",
      icon: (
        <UilRulerCombined className="text-center" size="50" color="#172554" />
      ),
    },
    {
      title: "Installation",
      description:
        "We install the solar energy system to ensure maximum energy production.",
      icon: <UilProcess className="text-center" size="50" color="#172554" />,
    },
    {
      title: "Inspections",
      description:
        "We take care of all the paperwork and schedule necessary inspections.",
      icon: (
        <UilClipboardAlt className="text-center" size="50" color="#172554" />
      ),
    },
    {
      title: "Activation",
      description:
        "We work with you, your city, and your local utility provider to get the system up and running.",
      icon: <UilBolt className="text-center" size="50" color="#172554" />,
    },
    {
      title: "Maintenance",
      description:
        "We maintain the solar energy system on your roof with our professionally trained support staff and technicians.",
      icon: <UilWrench className="text-center" size="50" color="#172554" />,
    },
    {
      title: "Monitoring",
      description:
        "We make it easy for you to monitor the system’s performance with our online Account Center and Home energy App.",
      icon: <UilMonitor className="text-center" size="50" color="#172554" />,
    },
  ];

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center pb-10 pt-32  relative z-20 bg-gray-100 ">
      <h2 className="text-6xl font-bold mb-4 text-blue-900">What We Do</h2>
      <CustomHR bgColor="#1e3a8a" />
      <div className="w-full grid grid-cols-1 md:grid-cols-4 md:w-3/4">
        {services.map((service, index) => (
          <WhatWeDoItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <svg
        className="relative top-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0b4bb3"
          fillOpacity="1"
          d="M0,224L60,192C120,160,240,96,360,80C480,64,600,96,720,128C840,160,960,192,1080,202.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
