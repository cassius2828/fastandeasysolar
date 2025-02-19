import { lazy, Suspense } from "react";
import Background from "./components/Background";
import Loader from "./components/Reusables/Loader";
import AboutV2 from "./components/About/AboutV2";
import TestimonialCarousel from "./components/Testimonials";
// Lazy loading all components
const Affiliates = lazy(() => import("./components/Affiliates"));
const Book = lazy(() => import("./components/Book"));
const FAQList = lazy(() =>
  import("./components/FAQ").then((module) => ({ default: module.FAQList }))
);
const Form = lazy(() => import("./components/Form"));
const ProgramsV2 = lazy(() => import("./components/Programs/ProgramsV2"));
const ServicesFullPage = lazy(() =>
  import("./components/Services/ServicesFullPage")
);
const WhatWeDo = lazy(() =>
  import("./components/WhatWeDo").then((module) => ({
    default: module.WhatWeDo,
  }))
);

const Body = () => {
  return (
    <>
      <Background />
      <Suspense
        fallback={
          <div className="h-screen w-screen">
            <Loader />
          </div>
        }
      >
        <AboutV2 />
        <ServicesFullPage />
        <ProgramsV2 />
        <WhatWeDo />
        <FAQList />
        <Affiliates />
        <TestimonialCarousel/>
        <Form />
        <div style={{ height: "30rem" }} className=" w-screen"></div>
        <Book />
      </Suspense>
    </>
  );
};
export default Body;
