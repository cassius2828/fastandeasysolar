import About from "./components/About";
import Affiliates from "./components/Affiliates";
import Background from "./components/Background";
import Book from "./components/Book";
import Careers from "./components/Careers";
import {FAQList} from "./components/FAQ";
import Form from "./components/Form";
import Landing from "./components/Landing";
import OverviewGrid from "./components/OverviewGrid";
import Programs from "./components/Programs";
import Services from "./components/Services";
import { WhatWeDo } from "./components/WhatWeDo";

const Body = () => {
  return (
    <>
      <Landing />
      <Background />
      {/* gap */}
      <div id="gap" className="h-screen w-screen "></div>
      <Form />
      {/* gap */}
      <div className="h-[30rem] w-screen"></div>
      <Book />
      <OverviewGrid />
      <Services />
      <Programs />
      <About />
      <WhatWeDo />
      <FAQList />
      <Affiliates />
      <Careers />
    </>
  );
};
export default Body;
