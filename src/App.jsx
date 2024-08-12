// src/App.jsx
import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Programs from "./components/Programs";
import About from "./components/About";
import { ProgramProvider } from "./context/ProgramContext";
import { FAQList } from "./components/FAQ";
import { WhatWeDo } from "./components/WhatWeDo";
import Affiliates from "./components/Affiliates";

const App = () => {
  return (
    <>
      <Nav />
      <Landing />
      <Background />
      <div id="gap" className="h-screen w-screen "></div>
      <Form />
      <Services />

      {/* program provider */}
      <ProgramProvider>
        <Programs />
        <About />
        <WhatWeDo />
        <FAQList /> <Affiliates />
        <Footer />
      </ProgramProvider>
    </>
  );
};

export default App;
