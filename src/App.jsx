// src/App.jsx
import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Programs from "./components/Programs";

const App = () => {
  return (
    <>
      {/* <Nav /> */}
      <Landing />
      <Background />
      <div id="gap" className="h-screen w-screen "></div>
      <Form />
      <About />
      <Programs/>
      <Footer />
    </>
  );
};

export default App;
