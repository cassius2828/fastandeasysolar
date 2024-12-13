import { UilArrowUp } from "@iconscout/react-unicons";
import { useGlobalContext } from "../../context/useGlobalContext";

//////////////////////
// Footer Component
////////////////////
const Footer = () => {
  //////////////////////
  // Scroll To Top
  //////////////////////
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { handleConversion, freeAssessmentCalendlyUrl } = useGlobalContext();
  return (
    <footer className="bg-blue-900 p-12 text-center text-white relative z-30">
      <div className="flex flex-col md:flex-row justify-around gap-8">
        {/* programs col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8 font-bold">Programs</h4>
          <ul className="text-2xl flex flex-col justify-center items-center gap-4">
            <li>
              <a href="#programs">Purchase</a>
            </li>
            <li>
              <a href="#programs">Lease</a>
            </li>
            <li>
              <a href="#programs">PPA</a>
            </li>
          </ul>
        </div>

        {/* services col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8 font-bold">Services</h4>
          <ul className="text-2xl flex flex-col justify-center md:items-start md:text-start gap-8 md:ml-52">
            <li>
              <a href="#optimizedsolarsystemdesign">
                Optimized Solar System Design
              </a>
            </li>
            <li>
              <a href="#flexiblesolarfinancingsolutions">
                Flexible Solar Financing Solutions
              </a>
            </li>
            <li>
              <a href="#rooftopsolarforsustainableliving">
                Rooftop Solar for Sustainable Living
              </a>
            </li>
            <li>
              <a href="#efficientground-mountedsolarsystems">
                Efficient Ground-Mounted Solar Systems
              </a>
            </li>
            <li>
              <a href="#reliablesolarbatterystorage">
                Reliable Solar Battery Storage
              </a>
            </li>
            <li>
              <a href="#upgradingtoahigh-capacitymainelectricpanel">
                Upgrading to a High-Capacity Main Electric Panel
              </a>
            </li>
            <li>
              <a href="#professionalsolarinstallationservices">
                Professional Solar Installation Services
              </a>
            </li>
            <li>
              <a href="#comprehensivesolarsystemwarranty">
                Comprehensive Solar System Warranty
              </a>
            </li>
          </ul>
        </div>

        {/* contact col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8 font-bold ">Contact</h4>
          <ul className="text-2xl flex flex-col justify-center items-center gap-4">
            <li>Email: contact@fastandeasysolar.com</li>
            <li>Office: (916) 320-7022</li>
          </ul>
        </div>

        {/* location col */}
        {/* <div>
          <h4 className="text-3xl text-blue-400 mb-8 font-bold">Location</h4>
          <ul className="text-2xl flex flex-col justify-center items-center gap-4">
            <li>123 Your Office Blvd</li>
            <li>Vacaville, CA 95687</li>
          </ul>
        </div> */}

        {/* business hours col */}
        <div className="lg:col-span-2">
          <h4 className="text-3xl text-blue-400 mb-8 font-bold">
            Business Hours
          </h4>
          <ul className="text-2xl flex flex-col justify-center items-center gap-4">
            <li>Monday: 8am - 8pm</li>
            <li>Tuesday: 8am - 8pm</li>
            <li>Wednesday: 8am - 8pm</li>
            <li>Thursday: 8am - 8pm</li>
            <li>Friday: 8am - 8pm</li>
            <li>Saturday: 10am - 4pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between md:justify-center  items-center gap-4">
        <img
          loading="lazy"
          width="300"
          src="/images/Full_logo.svg"
          alt="company logo with slogan"
        />
        <p>&copy; 2024 Fast and Easy Solar. All rights reserved.</p>
      </div>

      {/* Scroll to Top Button */}
      <div className="flex items-center justify-center gap-4 fixed bottom-2 md:bottom-12 right-2 md:right-6 z-50">
        <a
          onClick={() => handleConversion()}
          href={freeAssessmentCalendlyUrl}
          className="bg-gray-500 hover:bg-blue-500 rounded-full p-3 w-24 transition-colors duration-200 md:text-xl"
        >
          book
        </a>
        <div
          onClick={scrollToTop}
          className="flex items-center justify-center  bg-gray-600 hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-pointer rounded-full p-2"
        >
          <UilArrowUp size="24" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
