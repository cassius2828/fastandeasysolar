import { useState } from "react";
import { useFormContext } from "../../context/useFormContext";

export const InputGroupQualifications = () => {
  const { handleUpdateForm, nextStep, form } = useFormContext();

  return (
    <div className="input-group">
      <div className="my-2">
        <label className="block text-gray-700">Current Bill</label>
        <input
        required
          onChange={(e) => handleUpdateForm(e)}
          value={form.bill}
          name="bill"
          className="w-full   bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
        />
      </div>
      <div className="my-2">
        <label className="block text-gray-700">Your Location</label>
        <input
        required
          onChange={(e) => handleUpdateForm(e)}
          value={form.location}
          className="w-full   bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          name="location"
          placeholder="ex: Vacaville"
        />
      </div>
      <div className="my-2">
        <label className="block text-gray-700">Select a Program</label>
        <select
        required
          onChange={(e) => handleUpdateForm(e)}
          value={form.program}
          name="program"
          id="program"
          className="w-full   bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a program</option>
          <option value="">Program 1</option>
          <option value="">Program 2</option>
          <option value="">Program 3</option>
        </select>
      </div>
      <div className="flex space-x-4 my-4">
        <button
          onClick={(e) => nextStep(e)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
};
