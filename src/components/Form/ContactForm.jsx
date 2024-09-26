import React, { useState } from "react";
import axios from "axios";
import { useFormContext } from "../../context/useFormContext";
import { submitAssessmentForm } from "../../service/handleForms";
import Alert from "../Reusables/Alert";

//////////////////////
// InputGroupContact Component
////////////////////
export const InputGroupContact = () => {
  // Context
  const { handleUpdateForm, prevStep, form, formErrors, resetForm } =
    useFormContext();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  //////////////////////
  // Handle Submit
  //////////////////////
  // const handleSubmit = async () => {
  //   if (Object.values(form).some((value) => !value)) {
  //     return alert("Please fill out all fields to submit the form");
  //   }

  //   const url = "/.netlify/functions/sendForm";
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify(form),
  //   };

  //   try {
  //     const response = await axios(url, options);
  //     const data = response.data;
  //     console.log("Success:", data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      submitAssessmentForm(form);
      setSuccess("Assessment Inquiry Successfully Sent!");
      resetForm();
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(
        "Form Submission Failed. Please reach out directly to either Fastandeasysolar@gmail.com or text (916) 320-7022 with the information requested in the form to request a free assessment if this form is not working"
      );
      console.log(`Unable to submit assesssment form`);
    }
  };

  return (
    <div className={`input-group`}>
      {/* First Name */}
      <div className={`my-6`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          First Name*
        </label>
        <input
          required
          className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 ${
            formErrors.firstName && "border-red-500"
          } text-xl lg:text-2xl`}
          type="text"
          name="firstName"
          placeholder="First Name*"
          value={form.firstName}
          onChange={handleUpdateForm}
        />
      </div>
      {/* Last Name */}
      <div className={`my-6`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          Last Name*
        </label>
        <input
          required
          className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 ${
            formErrors.lastName && "border-red-500"
          } text-xl lg:text-2xl`}
          type="text"
          name="lastName"
          placeholder="Last Name*"
          value={form.lastName}
          onChange={handleUpdateForm}
        />
      </div>
      {/* Email */}
      <div className={`my-6`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          Email*
        </label>
        <input
          required
          className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 ${
            formErrors.email && "border-red-500"
          } text-xl lg:text-2xl`}
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleUpdateForm}
        />
      </div>
      {/* Phone */}
      <div className={`my-6`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          Phone*
        </label>
        <input
          required
          className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 ${
            formErrors.phone && "border-red-500"
          } text-xl lg:text-2xl`}
          type="text"
          name="phone"
          placeholder="Phone*"
          value={form.phone}
          onChange={handleUpdateForm}
        />
      </div>
      {/* Address */}
      <div className={`my-6`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          Street Address*
        </label>
        <input
          required
          className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 ${
            formErrors.phone && "border-red-500"
          } text-xl lg:text-2xl`}
          type="text"
          name="address"
          placeholder="123 Main St, Stockton CA*"
          value={form.address}
          onChange={handleUpdateForm}
        />
      </div>
      {/* Zip Code */}
      <div className={`my-6`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          Zip Code*
        </label>
        <input
          required
          className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 ${
            formErrors.phone && "border-red-500"
          } text-xl lg:text-2xl`}
          type="text"
          name="zipcode"
          placeholder="Zip Code*"
          value={form.zipcode}
          onChange={handleUpdateForm}
        />
      </div>
      {/* Message */}
      <div className={`my-4`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          Message
        </label>
        <textarea
          placeholder="Message"
          className={`w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 ${
            formErrors.message && "border-red-500"
          } text-xl lg:text-2xl`}
          name="message"
          value={form.message}
          onChange={handleUpdateForm}
        ></textarea>
      </div>
      {/* contact terms */}
      <div className={`my-4`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          By checking this box you agree to receive a phone call from us at the
          number you provided
        </label>
        <div className="flex items-center justify-start gap-4 mt-5">
          <input type="checkbox" name="contactTerms" id="contactTerms" />{" "}
          <span className="text-xl">I agree</span>
        </div>
      </div>
      <div className={`flex space-x-4`}>
        {/* Submit Button */}
        <div className={`my-6 w-1/2 lg:w-1/3`}>
          <button
            onClick={handleSubmit}
            className={`uppercase px-2 py-2 text-xl tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:-translate-y-1 transition-all duration-150 ease-in-out hover:shadow-lg`}
          >
            Send Message
          </button>
        </div>
      </div>
      {success && <Alert message={success} success />}
      {error && <Alert message={error} handleClose={() => setError("")} />}
    </div>
  );
};
// full address

//office locaiton:
