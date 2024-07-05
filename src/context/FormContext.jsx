import React, { createContext, useState } from "react";

const initialFormData = {
  formStep: 1,
  //   qual section
  bill: "",
  location: "",
  program: "",
  //   contact section
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState(initialFormData);

  const handleUpdateForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  };
  const nextStep = (e) => {
    e.preventDefault();
    if (form.formStep === 1) {
      setForm({ ...form, formStep: 2 });
    }
  };
  const prevStep = (e) => {
    e.preventDefault();
    if (form.formStep === 2) {
      setForm({ ...form, formStep: 1 });
    }
  };
  return (
    <FormContext.Provider
      value={{ form, handleUpdateForm, nextStep, prevStep }}
    >
      {children}
    </FormContext.Provider>
  );
};
