import { useState } from "react";
import { submitLeadSetterInquiry } from "../../service/handleForms";
import Alert from "../Reusables/Alert";
import Affiliates from "../Affiliates";
const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  message: "",
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      submitLeadSetterInquiry(formData);
      setSuccess("Application Sent Successfully!");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(
        "Form Submission Failed. Please reach out directly to either Fastandeasysolar@gmail.com or text (916) 320-7022 with the information requested in the form to submit your application if this form is not working"
      );
  
      console.log(`Unable to send job applicaiton form data`);
    }

    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Interested in a becoming a top lead setter?
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="p-3 text-xl border border-gray-300 rounded-md"
            required
          />{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="p-3 text-xl border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="p-3 text-xl border border-gray-300 rounded-md"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 text-xl border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us why you're a great fit for this role"
            className="p-3 text-xl border border-gray-300 rounded-md h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-md text-xl hover:bg-blue-500 transition"
          >
            Submit Application
          </button>
        </div>
      </form>
      {success && <Alert message={success} success />}
      {error && <Alert message={error} handleClose={()=>setError('')} />}
    </>
  );
};
export default ApplicationForm;
