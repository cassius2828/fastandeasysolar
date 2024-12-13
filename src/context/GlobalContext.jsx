import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const attachObserverToRef = (ref, setIsLoaded) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref?.current) {
        observer.unobserve(ref.current);
      }
    };
  };
  const freeAssessmentCalendlyUrl =
    "https://calendly.com/fastandeasysolar/free-assessment-for-program-eligibility";
  const handleConversion = (url) => {
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(url);
    } else {
      console.error("gtag_report_conversion function is not available.");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        attachObserverToRef,
        handleConversion,freeAssessmentCalendlyUrl
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
