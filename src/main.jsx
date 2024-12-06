import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import { FormProvider } from "./context/FormContext.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* global provider */}
    <GlobalProvider>
      {/* form provider */}
      <FormProvider>
          {/*  */}
          <App />
          {/*  */}
        {/*  */}
      </FormProvider>
      {/*  */}
    </GlobalProvider>
    {/*  */}
  </React.StrictMode>
);
