import { UilArrowUp } from "@iconscout/react-unicons";
import { useProgramContext } from "../../context/useProgramContext";
// import SocialList from "../Reusables/SocialList";

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

  //////////////////////
  // Set Selected Program
  //////////////////////
  const { setSelectedProgram } = useProgramContext();

  return (
    <footer className="bg-blue-900 p-12 text-center text-white relative z-30">
      <div className="flex flex-col md:flex-row justify-around gap-8">
        {/* programs col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8 font-bold">Programs</h4>
          <ul className="text-2xl flex flex-col justify-center items-center gap-4">
            <li onClick={() => setSelectedProgram(1)}>
              <a href="#programs">Purchase</a>
            </li>
            <li onClick={() => setSelectedProgram(2)}>
              <a href="#programs">Lease</a>
            </li>
            <li onClick={() => setSelectedProgram(3)}>
              <a href="#programs">PPA</a>
            </li>
          </ul>
        </div>

        {/* services col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8 font-bold">Services</h4>
          <ul className="text-2xl flex flex-col justify-center md:items-start md:text-start gap-8 md:ml-52">
            <li>
              <a href="#services">Optimized Solar System Design</a>
            </li>
            <li>
              <a href="#services">Flexible Solar Financing Solutions</a>
            </li>
            <li>
              <a href="#services">Rooftop Solar for Sustainable Living</a>
            </li>
            <li>
              <a href="#services">Efficient Ground-Mounted Solar Systems</a>
            </li>
            <li>
              <a href="#services">Reliable Solar Battery Storage</a>
            </li>
            <li>
              <a href="#services">
                Upgrading to a High-Capacity Main Electric Panel
              </a>
            </li>
            <li>
              <a href="#services">Professional Solar Installation Services</a>
            </li>
            <li>
              <a href="#services">Comprehensive Solar System Warranty</a>
            </li>
          </ul>
        </div>

        {/* contact col */}
        <div>
          <h4 className="text-3xl text-blue-400 mb-8 font-bold ">Contact</h4>
          <ul className="text-2xl flex flex-col justify-center items-center gap-4">
            <li>Email: fastandeasysolar@gmail.com</li>
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
        <img width="300" src="/images/logo.svg" alt="" />
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </div>

      {/* Scroll to Top Button */}
      <div
        onClick={scrollToTop}
        className="flex items-center justify-center fixed bottom-12 right-6 z-50 bg-gray-500 hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-pointer rounded-full p-2"
      >
        <UilArrowUp size="24" />
      </div>
    </footer>
  );
};

export default Footer;
