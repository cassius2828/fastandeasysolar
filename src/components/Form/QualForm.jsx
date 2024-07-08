import { useFormContext } from "../../context/useFormContext";

export const InputGroupQualifications = () => {
  const { handleUpdateForm, nextStep, form } = useFormContext();

  return (
    <div className="input-group flex flex-col justify-between h-full">
      {/* current bill */}
      <div>
        <div className="my-12">
          <label className="block text-gray-700 text-xl lg:text-2xl mb-2">Current Bill</label>
          <input
            required
            onChange={(e) => handleUpdateForm(e)}
            value={form.bill}
            name="bill"
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline text-xl lg:text-2xl"
            type="text"
          />
        </div>
        {/* location */}
        <div className="my-12">
          <label className="block text-gray-700 text-xl lg:text-2xl mb-2">Your Location</label>
          <input
            required
            onChange={(e) => handleUpdateForm(e)}
            value={form.location}
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline text-xl lg:text-2xl"
            type="text"
            name="location"
            placeholder="ex: Vacaville"
          />
        </div>
        {/* program */}
        <div className="my-12">
          <label className="block text-gray-700 text-xl lg:text-2xl my-2">Select a Program</label>
          <select
            required
            onChange={(e) => handleUpdateForm(e)}
            value={form.program}
            name="program"
            id="program"
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline text-xl lg:text-2xl"
          >
            <option value="">Select a program</option>
            <option value="1">Program 1</option>
            <option value="2">Program 2</option>
            <option value="3">Program 3</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 my-4">
        <button
          onClick={(e) => nextStep(e)}
          className="bg-blue-500 text-white px-8 py-2 text-xl rounded-lg focus:outline-none focus:shadow-outline hover:-translate-y-1 transition-all duration-150 ease-in-out hover:shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};
