//////////////////////////////
// Import and Initial State //
//////////////////////////////

import React, { createContext, useState } from "react";

////////////////////////
// Initial Form Data //
////////////////////////

const initialFormData = {
  formStep: 1,
  //   qual section
  bill: "",
  location: "",
  program: "",
  //   contact section
 fullName:'',
  email: "",
  phone: "",
  zipcode: "",
  address: "",
  message: "",
  contactTerms: false,
};

//////////////////////////////
// Initial Form Error Data //
//////////////////////////////

const initialFormErrorData = {

  //   contact section
fullName:false,
  email: false,
  phone: false,
  message: false,
  address:false
};

/////////////////////////
// Form Context Setup //
/////////////////////////

export const FormContext = createContext();

/////////////////////////////
// Form Provider Component //
/////////////////////////////

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrorData);

  /////////////////////////
  // Email Validation   //
  /////////////////////////

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  //////////////////////////
  // Phone Number Validation //
  //////////////////////////

  const validatePhoneNumber = (phoneNumber) => {
    // Remove all non-digit characters
    const digits = phoneNumber.replace(/\D/g, "");
    // Check if there are at least 10 digits
    return digits.length === 10;
  };

  /////////////////////////////////////////
  // Form Validation and State Handling //
  /////////////////////////////////////////

  const handleUpdateForm = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (name === "message") {
      setFormErrors({ ...formErrors, message: false });
    } else if (value.length < 1) {
      setFormErrors({ ...formErrors, [name]: true });
    } else if (name === "email" && !validateEmail(value)) {
      setFormErrors({ ...formErrors, email: true });
    } else if (name === "phone" && !validatePhoneNumber(value)) {
      setFormErrors({ ...formErrors, phone: true });
    } else {
      setFormErrors({ ...formErrors, [name]: false, message: false });
    }
  };
const resetForm = () => {
  setForm(initialFormData)
}
  //////////////////////
  // Next Step Handler //
  //////////////////////

  const nextStep = (e) => {
    e.preventDefault();

    if (form.formStep === 1) {
      // Check if there are any errors in the formErrors object
      if (formErrors.bill || formErrors.location || formErrors.program) {
        alert("Please correct the errors before proceeding.");
        return;
      }

      setForm({ ...form, formStep: 2 });
    }
  };

  //////////////////////
  // Previous Step Handler //
  //////////////////////

  const prevStep = (e) => {
    e.preventDefault();
    if (form.formStep === 2) {
      setForm({ ...form, formStep: 1 });
    }
  };

  ///////////////////////////
  // Context Provider Setup //
  ///////////////////////////

  return (
    <FormContext.Provider
      value={{ form, formErrors, handleUpdateForm, nextStep, prevStep,resetForm }}
    >
      {children}
    </FormContext.Provider>
  );
};
