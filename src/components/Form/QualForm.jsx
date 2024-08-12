import { useFormContext } from "../../context/useFormContext";

export const InputGroupQualifications = () => {
  const { handleUpdateForm, nextStep, form, formErrors } = useFormContext();
  console.log(formErrors);

  return (
    <div className={`input-group flex flex-col justify-between h-full`}>
      {/* Current PG&E Bill */}
      <div>
        <div className={`my-12 relative`}>
          <label className={`block text-gray-700 text-xl lg:text-2xl mb-2`}>Current PG&E Bill</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-xl lg:text-2xl text-gray-600"></span>
            <input
              required
              onChange={(e) => handleUpdateForm(e)}
              value={form.bill}
              name="bill"
              className={`w-full bg-gray-100 text-gray-900 p-3 pl-8 rounded-lg focus:outline-none focus:shadow-outline border-2 ${formErrors.bill && 'border-red-500'} text-xl lg:text-2xl`}
              type="text"
            />
          </div>
        </div>
        
        {/* Your Location */}
        <div className={`my-12`}>
          <label className={`block text-gray-700 text-xl lg:text-2xl mb-2`}>Your Location</label>
          <input
            required
            onChange={(e) => handleUpdateForm(e)}
            value={form.location}
            className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 ${formErrors.location && 'border-red-500'} text-xl lg:text-2xl`}
            type="text"
            name="location"
            placeholder="ex: Vacaville"
          />
        </div>
        {/* logo */}
        <div className="flex flex-col justify-start items-center">
        <img
          className="w-1/2 "
          src="/images/logo-notext.svg"
          alt="logo"
        />
        <h2
          className="text-3xl lg:text-6xl text-blue-900 uppercase text-center"
          style={{ textShadow: "2px 2px 0 #93C5FD" }}
        >
          Fast and easy solar
        </h2>
      </div>
      </div>

      {/* Next Button */}
      <div className={`flex space-x-4 my-4`}>
        <button
          onClick={(e) => nextStep(e)}
          className={`bg-blue-500 text-white px-8 py-2 text-xl rounded-lg focus:outline-none focus:shadow-outline hover:-translate-y-1 transition-all duration-150 ease-in-out hover:shadow-lg`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
