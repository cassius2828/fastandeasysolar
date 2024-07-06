// src/components/Nav.jsx
import React from "react";

const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav
      id="nav"
      className=" bg-gray-100 shadow-lg p-0 m-0 fixed z-50 w-full flex items-center justify-end h-52"
    >
      <img
        className=" w-96 absolute left-0 "
        src="/images/logo.svg"
        alt="logo"
      />
      <ul className="flex space-x-4 text-blue-900 mr-48 text-2xl gap-12 capitalize">
        <li onClick={scrollToTop}>
          <a href="">home</a>
        </li>
        <li>
          <a href="#scroll-to-services">services</a>
        </li>
        <li>
          <a href="#scroll-to-programs">programs</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
