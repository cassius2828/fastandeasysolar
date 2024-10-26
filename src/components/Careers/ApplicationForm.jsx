import { useState } from "react";
import { useFormContext } from "../../context/useFormContext";
import { submitLeadSetterInquiry } from "../../service/handleForms";
import Alert from "../Reusables/Alert";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  message: "",
};

const initalFormErrors = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  message: false,
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { validateEmail, validatePhoneNumber, containsLetters } =
    useFormContext();

  ///////////////////////////
  // Handle Change
  ///////////////////////////
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  ///////////////////////////
  // Validate Fields
  ///////////////////////////
  const validateField = (name, value) => {
    if (value.length < 1) {
      setFormErrors({ ...formErrors, [name]: true });
    } else if (name === "email" && !validateEmail(value)) {
      setFormErrors({ ...formErrors, email: true });
    } else if (
      (name === "phone" && !validatePhoneNumber(value)) ||
      containsLetters(value)
    ) {
      setFormErrors({ ...formErrors, phone: true });
    } else {
      setFormErrors({ ...formErrors, [name]: false });
    }
  };

  const allFieldsValidated = (fields) => {
    const hasErrors = Object.values(fields).some(
      (inputError) => inputError === true
    );
    return hasErrors;
  };
  ///////////////////////////
  // Handle Submit
  ///////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if errors exist setError and return
      if (allFieldsValidated(formErrors)) {
        setError("Please ensure all fields meet the required input criteria.");
        return;
      }

      const data = await submitLeadSetterInquiry(formData);
      if (data?.incomplete) {
        setError(
          `All fields are required. Please fill out the remaining inputs to submit the form.`
        );
        return;
      } else {
        setSuccess("Application Sent Successfully!");
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setError(
        "Form Submission Failed. Please reach out directly to either Fastandeasysolar@gmail.com or text (916) 320-7022 with the information requested in the form to submit your application if this form is not working"
      );

      console.log(`Unable to send job applicaiton form data`);
    }

    // Reset the form
    setFormData(initialFormData);
    setFormErrors(initalFormErrors);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Interested in a becoming a top lead setter?
        </h2>
        <div className="flex flex-col space-y-4">
          {/* First Name */}
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            handleChange={handleChange}
            errorKey={formErrors.firstName}
            placeholder="First Name"
          />{" "}
          {/* Last Name */}
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            handleChange={handleChange}
            errorKey={formErrors.lastName}
            placeholder="Last Name"
          />
          {/* Email */}
          <Input
            type="email"
            name="email"
            value={formData.email}
            handleChange={handleChange}
            errorKey={formErrors.email}
            placeholder="Email"
          />
          {/* Phone */}
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            handleChange={handleChange}
            errorKey={formErrors.phone}
            placeholder="Phone Number"
          />
          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us why you're a great fit for this role"
            className={`p-3 text-xl border rounded-md h-32 ${
              formErrors.message ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-md text-xl hover:bg-blue-500 transition"
          >
            Submit Application
          </button>
        </div>
      </form>

      {success && <Alert message={success} success />}
      {error && <Alert message={error} handleClose={() => setError("")} />}
    </>
  );
};
export default ApplicationForm;

export const Input = ({
  value,
  handleChange,
  errorKey,
  name,
  type,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`p-3 text-xl border rounded-md ${
        errorKey ? "border-red-500" : "border-gray-300"
      }`}
      required
    />
  );
};
