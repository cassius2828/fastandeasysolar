import React from "react";
import axios from "axios";
import { useFormContext } from "../../context/useFormContext";

export const InputGroupContact = () => {
  const { handleUpdateForm, prevStep, form } = useFormContext();

  const handleSubmit = async () => {
    const url = '/.netlify/functions/sendForm';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(form), 
    };

    try {
      const response = await axios(url, options);
      const data = response.data;
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="input-group">
      {/* first name */}
      <div className="my-6">
        <label className="block text-gray-700 text-xl lg:text-2xl">First Name*</label>
        <input
          required
          className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline text-xl lg:text-2xl"
          type="text"
          name="firstName"
          placeholder="First Name*"
          value={form.firstName}
          onChange={handleUpdateForm}
        />
      </div>
      {/* last name */}
      <div className="my-6">
        <label className="block text-gray-700 text-xl lg:text-2xl">Last Name*</label>
        <input
          required
          className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline text-xl lg:text-2xl"
          type="text"
          name="lastName"
          placeholder="Last Name*"
          value={form.lastName}
          onChange={handleUpdateForm}
        />
      </div>
      {/* email */}
      <div className="my-6">
        <label className="block text-gray-700 text-xl lg:text-2xl">Email*</label>
        <input
          required
          className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline text-xl lg:text-2xl"
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleUpdateForm}
        />
      </div>
      {/* phone */}
      <div className="my-6">
        <label className="block text-gray-700 text-xl lg:text-2xl">Phone*</label>
        <input
          required
          className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline text-xl lg:text-2xl"
          type="number"
          name="phone"
          placeholder="Phone*"
          value={form.phone}
          onChange={handleUpdateForm}
        />
      </div>
      {/* message */}
      <div className="my-4">
        <label className="block text-gray-700 text-xl lg:text-2xl">Message</label>
        <textarea
          placeholder="Message*"
          className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline text-xl lg:text-2xl"
          name="message"
          value={form.message}
          onChange={handleUpdateForm}
        ></textarea>
      </div>
      <div className="flex space-x-4">
        <div className="my-6 w-1/2 lg:w-1/4">
          <button
            onClick={prevStep}
            className="bg-blue-500 text-white px-8 py-2 text-xl rounded-lg focus:outline-none focus:shadow-outline hover:-translate-y-1 transition-all duration-150 ease-in-out hover:shadow-lg"
          >
            Back
          </button>
        </div>

        <div className="my-6 w-1/2 lg:w-1/3">
          <button onClick={handleSubmit}
            className="uppercase px-2 py-2 text-xl tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:-translate-y-1 transition-all duration-150 ease-in-out hover:shadow-lg"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
