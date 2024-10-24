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

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  };
  return (
    <GlobalContext.Provider
      value={{
        attachObserverToRef,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
