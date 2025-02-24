//////////////////////////////
// Import and Initial State //
//////////////////////////////

import { createContext, useState } from "react";

////////////////////////
// Initial Form Data //
////////////////////////

const initialFormData = {
  //   contact section
  fullName: "",
  email: "",
  phone: "",
  address: "",
  message: "",
  date: "",
  time: "",
  contactTerms: false,
};

//////////////////////////////
// Initial Form Error Data //
//////////////////////////////

const initialFormErrorData = {
  //   contact section
  fullName: false,
  email: false,
  phone: false,
  message: false,
  address: false,
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
    // Check if there are at least 10 digits and no letters
    return digits.length === 10 && !containsLetters(phoneNumber);
  };

  /////////////////////////////////////////
  // Form Validation and State Handling //
  /////////////////////////////////////////
  const handleUpdateForm = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    if (name === "message") {
      setFormErrors({ ...formErrors, message: false });
    } else if (name === "email" && !validateEmail(value)) {
      setFormErrors({ ...formErrors, email: true });
    } else if (name === "phone" && !validatePhoneNumber(value)) {
      setFormErrors({ ...formErrors, phone: true });
    } else if (value.length < 1) {
      setFormErrors({ ...formErrors, [name]: true });
    } else {
      setFormErrors({ ...formErrors, [name]: false, message: false });
    }
  };

  ///////////////////////////
  // Contains Letters Regex
  ///////////////////////////
  function containsLetters(input) {
    const letterRegex = /[a-zA-Z]/;
    return letterRegex.test(input);
  }
  ///////////////////////////
  // Handle Update Address
  ///////////////////////////
  const handleUpdateAddress = (value) => {
    setForm({ ...form, address: value });
    if (value < 1) {
      setFormErrors({ ...formErrors, address: true });
    } else {
      setFormErrors({ ...formErrors, address: false });
    }
  };

  const handleToggleCheckbox = () => {
    setForm((prev) => ({ ...prev, contactTerms: !prev.contactTerms }));
  };

  const resetForm = () => {
    setForm(initialFormData);
  };

  ///////////////////////////
  // Add Clear Address Btn
  ///////////////////////////
  const addClearAutocompleteInputBtn = (setState) => {
    const autocompleteLastDiv = document.querySelector(
      ".autocomplete-container > div > div > div:last-child > div"
    );

    if (autocompleteLastDiv) {
      autocompleteLastDiv.style.padding = "0";
      autocompleteLastDiv.style.margin = "0";
    }

    // Check if the clear button already exists by class or ID
    let clearBtn = document.querySelector(".clear-btn");

    if (!clearBtn) {
      clearBtn = document.createElement("button");
      clearBtn.innerText = "Clear";
      clearBtn.className = "clear-btn";
      clearBtn.style.padding = "3px 6px";
      clearBtn.style.color = "#9ca3af";
      clearBtn.addEventListener("click", (e) => {
        e.preventDefault();
        setState("");
      });
      if (autocompleteLastDiv) {
        autocompleteLastDiv.appendChild(clearBtn);
      }
    }
  };

  return (
    <FormContext.Provider
      value={{
        form,
        formErrors,
        containsLetters,
        handleUpdateForm,
        handleUpdateAddress,
        handleToggleCheckbox,
        validateEmail,
        validatePhoneNumber,
        resetForm,
        addClearAutocompleteInputBtn,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
