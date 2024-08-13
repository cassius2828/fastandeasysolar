
import {
  UilRulerCombined,
  UilProcess,
  UilClipboardAlt,
  UilBolt,
  UilWrench,
  UilMonitor,
} from "@iconscout/react-unicons";
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
      icon: (
        <UilProcess className="text-center" size="50" color="#172554" />
      ),
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
    <div className="w-full md:w-1/2 mx-auto flex flex-col items-center justify-center py-10 relative z-20 bg-gray-100 mb-96">
      <h2 className="text-6xl font-bold mb-8 text-blue-900">What We Do</h2>
      <div className="w-full md:w-3/4">
        {services.map((service, index) => (
          <WhatWeDoItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};
