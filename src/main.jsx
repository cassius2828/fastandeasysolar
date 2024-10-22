import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import { ProgramProvider } from "./context/ProgramContext.jsx";
import { FormProvider } from "./context/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormProvider>
      <ProgramProvider>
        <App />
      </ProgramProvider>
    </FormProvider>
  </React.StrictMode>
);
