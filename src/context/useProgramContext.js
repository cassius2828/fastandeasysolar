import { useContext } from "react";
import { ProgramContext } from "./ProgramContext";


export const useProgramContext = () => {
    const context = useContext(ProgramContext);
    if (!context) {
      throw new Error('useProgramContext must be used within a FormProvider');
    }
    return context;
  };