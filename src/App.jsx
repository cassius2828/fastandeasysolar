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

const App = () => {
  return (
    <>
      <Nav />
      <Landing />
      <Background />
      <div id="gap" className="h-screen w-screen "></div>
      <Form />
      <Services />{" "}
      <ProgramProvider>
        <Programs />
        <About />
        <Footer />
      </ProgramProvider>
    </>
  );
};

export default App;
