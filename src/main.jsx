import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import { ProgramProvider } from "./context/ProgramContext.jsx";
import { FormProvider } from "./context/FormContext.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* global provider */}
    <GlobalProvider>
      {/* form provider */}
      <FormProvider>
        {/* program provider */}
        <ProgramProvider>
          {/*  */}
          <App />
          {/*  */}
        </ProgramProvider>
        {/*  */}
      </FormProvider>
      {/*  */}
    </GlobalProvider>
    {/*  */}
  </React.StrictMode>
);
