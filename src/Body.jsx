import { lazy, Suspense } from "react";
import Background from "./components/Background";
import Landing from "./components/Landing";
import Loader from "./components/Reusables/Loader";

// Lazy loading all components
const About = lazy(() => import("./components/About"));
const Affiliates = lazy(() => import("./components/Affiliates"));
const Book = lazy(() => import("./components/Book"));
const Careers = lazy(() => import("./components/Careers"));
const FAQList = lazy(() =>
  import("./components/FAQ").then((module) => ({ default: module.FAQList }))
); // Named export handling
const Form = lazy(() => import("./components/Form"));
const OverviewGrid = lazy(() => import("./components/OverviewGrid"));
const Programs = lazy(() => import("./components/Programs"));
const Services = lazy(() => import("./components/Services"));
const WhatWeDo = lazy(() =>
  import("./components/WhatWeDo").then((module) => ({
    default: module.WhatWeDo,
  }))
); // Named export handling

const Body = () => {
  return (
    <>
      <Landing />
      <Background />
      <Suspense
        fallback={
          <div className="h-screen w-screen">
            <Loader />
          </div>
        }
      >
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
      </Suspense>
    </>
  );
};
export default Body;
