// Assuming you have the logos saved in your project, you can import them like this:
import TeslaLogo from "/images/logos/tesla-logo.svg"; // Replace with the actual path
import SunrunLogo from "/images/logos/sunrun-logo.png"; // Replace with the actual path
import EverbrightLogo from "/images/logos/everbright-logo.webp"; // Replace with the actual path
import SunnovaLogo from "/images/logos/sunnova-logo-color-3.png"; // Replace with the actual path
import SunPowerLogo from "/images/logos/SunPower.png"; // Replace with the actual path

const Affiliates = () => {
  const affiliates = [
    { name: "Tesla", logo: TeslaLogo },
    { name: "Sunrun", logo: SunrunLogo },
    { name: "Everbright", logo: EverbrightLogo },
    { name: "Sunnova", logo: SunnovaLogo },
    { name: "SunPower", logo: SunPowerLogo },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 bg-gray-100 relative z-20">
      <h2 className="text-5xl font-bold mb-8 text-blue-900">Partnered With</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-1 w-full place-items-center">
        {affiliates.map((affiliate, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={affiliate.logo}
              alt={`${affiliate.name} logo`}
              className="w-80 mb-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliates;
