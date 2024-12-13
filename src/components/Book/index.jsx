import { useState, useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";
import Loader from "../Reusables/Loader";
import { useGlobalContext } from "../../context/useGlobalContext";

const Book = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const sectionRef = useRef(null);
  const { attachObserverToRef, freeAssessmentCalendlyUrl } = useGlobalContext();
  // Use Intersection Observer to load Calendly widget when section is in view
  useEffect(() => {
    attachObserverToRef(sectionRef, setWidgetLoaded);
  }, []);

  return (
    <section id="book" ref={sectionRef} className="w-full relative z-20 mb-96">
      {widgetLoaded ? (
        <InlineWidget url={freeAssessmentCalendlyUrl} />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
    </section>
  );
};

export default Book;
