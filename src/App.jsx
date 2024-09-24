// src/App.jsx

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
import OverviewGrid from "./components/OverviewGrid";
import Careers from "./components/Careers";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <>
      <Nav />
      <Landing />
      <Background />
      <div id="gap" className="h-screen w-screen "></div>
      <Form />
      <div className="h-[30rem] w-screen"></div>
      <div className="w-full relative z-20  mb-96">
        <InlineWidget url="https://calendly.com/fastandeasysolar/free-assessment-for-program-eligibility" />
      </div>
      <OverviewGrid />
      <Services />

      {/* program provider */}
      <ProgramProvider>
        <Programs />
        <About />
        <WhatWeDo />
        <FAQList />
        <Affiliates />
        <Careers />
        <Footer />
      </ProgramProvider>
    </>
  );
};

export default App;
