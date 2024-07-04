// src/components/Nav.jsx
import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-[#2c68b4] p-4">
      <ul className="flex space-x-4 text-white">
        <li><a href="#landing">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
