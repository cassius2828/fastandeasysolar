// src/App.jsx
import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  return (
    <ParallaxProvider>
      {/* <Nav /> */}
      <Landing />
      <div id="gap" className="h-screen w-screen "></div>
      <Contact />
      <About />
      <div className="h-screen w-screen bg-gray-200 relative z-30"></div>

      <Footer />
    </ParallaxProvider>
  );
};

export default App;
