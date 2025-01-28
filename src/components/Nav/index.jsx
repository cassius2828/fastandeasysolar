import { useState } from "react";
import { Hamburger } from "./Hamburger";
import { MobileNav } from "./MobileNav";

const Nav = () => {
  //////////////////////
  // State
  //////////////////////
  const [isOpen, setIsOpen] = useState(false);

  //////////////////////
  // Handlers
  //////////////////////
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      id="nav"
      className="bg-gray-100 shadow-lg p-0 m-0 fixed z-40 w-full flex items-center justify-between"
    >
      {/* branding */}
      <div className="flex items-center lg:gap-12">
        <img
          className="w-40 ml-10 lg:ml-40 p-3"
          src={`${
            import.meta.env.VITE_S3_OBJECT_BASE_URL
          }faes/logos/Icon_no-text-w320.webp`}
          alt="logo"
        />
        <h2
          className="text-3xl lg:text-6xl ml-4 text-blue-900 uppercase"
          style={{ textShadow: "2px 2px 0 #93C5FD" }}
        >
          Fast & easy solar
        </h2>
      </div>
      {/* desktop nav */}
      <ul className="space-x-4 text-blue-900 mr-48 text-2xl gap-12 capitalize hidden lg:flex">
        <li onClick={scrollToTop}>
          <a href="#">home</a>
        </li>{" "}
        <li>
          <a href="#about">about</a>
        </li>{" "}
        <li>
          <a href="#scroll-to-services">services</a>
        </li>
        <li>
          <a href="#scroll-to-programs">programs</a>
        </li>
        {/* <li>
          <a href="#careers">careers</a>
          </li> */}
        <li>
          <a href="#book">book</a>
        </li>{" "}
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      {/* mobile nav */}
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <MobileNav setIsOpen={setIsOpen} scrollToTop={scrollToTop} />}
    </nav>
  );
};

export default Nav;
