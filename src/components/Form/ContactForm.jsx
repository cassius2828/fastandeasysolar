import { useFormContext } from "../../context/useFormContext";

export const InputGroupContact = () => {
  const { handleUpdateForm, prevStep, form } = useFormContext();

  return (
    <div className="input-group">
      {/* first name */}
      <div className="my-2">
        <label className="block text-gray-700">First Name*</label>
        <input
          required
          className="w-full  bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          name="firstName"
          placeholder="First Name*"
          value={form.firstName}
          onChange={handleUpdateForm}
        />
      </div>
      {/* last name */}
      <div className="my-2">
        <label className="block text-gray-700">Last Name*</label>
        <input
          required
          className="w-full  bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          name="lastName"
          placeholder="Last Name*"
          value={form.lastName}
          onChange={handleUpdateForm}
        />
      </div>
      {/* email */}
      <div className="my-2">
        <label className="block text-gray-700">Email*</label>
        <input
          required
          className="w-full  bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleUpdateForm}
        />
      </div>
      {/* phone */}
      <div className="my-2">
        <label className="block text-gray-700">Phone*</label>
        <input
          required
          className="w-full  bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="phone"
          placeholder="Phone*"
          value={form.phone}
          onChange={handleUpdateForm}
        />
      </div>
      {/* message */}
      <div className="my-4">
        <label className="block text-gray-700">Message</label>
        <textarea
          placeholder="Message*"
          className="w-full  h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          name="message"
          value={form.message}
          onChange={handleUpdateForm}
        ></textarea>
      </div>
      <div className="flex space-x-4">
        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            onClick={(e) => prevStep(e)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Back
          </button>
        </div>

        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
