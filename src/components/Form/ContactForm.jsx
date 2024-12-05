// Library Imports
import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// Context Imports
import { useFormContext } from "../../context/useFormContext";
// Component Imports
import Alert from "../Reusables/Alert";
import AutocompleteErrorBoundary from "../../ErrorBoundaries/AutocompleteErrorBoundry";
// Service Imports
import { submitAssessmentForm } from "../../service/handleForms";

//////////////////////
// InputGroupContact Component
////////////////////
export const InputGroupContact = () => {
  // Local State
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [hasSomeErrors, setHasSomeErrors] = useState(false);
  const [success, setSuccess] = useState("");

  // Context Destructuring
  const {
    form,
    formErrors,
    handleToggleCheckbox,
    handleUpdateAddress,
    handleUpdateForm,
    resetForm,
  } = useFormContext();

  ///////////////////////////
  // Get Place Details | Full Address saved to state
  ///////////////////////////
  async function getPlaceDetails(placeId) {
    if (!placeId) return;
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );

    return new Promise((resolve, reject) => {
      service.getDetails(
        {
          placeId: placeId,
          fields: ["name", "formatted_address", "address_component"],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log("Place details:", place);
            if (place.formatted_address) {
              console.log(place.formatted_address, " formatted addy");
              resolve({ formatted_address: place.formatted_address });
            }
          } else {
            console.error("Failed to retrieve place details:", status);
            reject({ error: "Failed to retrieve place details:", status });
          }
        }
      );
    });
  }

  ///////////////////////////
  // Handle Autocomplete Zipcode Retrieval
  ///////////////////////////
  const handleGetFullAddress = async (place) => {
    try {
      if (!place || !place?.value?.place_id) return;
      const data = await getPlaceDetails(place?.value?.place_id);
      console.log(data, " <-- data");
      console.log(place?.value?.place_id, " <-- placeid");

      if (data.formatted_address) {
        setAddress(data.formatted_address);
      }
    } catch (err) {
      console.error(
        `Unable to get formatted_address from Google Places API`,
        err
      );
    }
  };

  const test = (place) => {
    setAddress(place)
  }

  ///////////////////////////
  // Validate Form Errors
  ///////////////////////////
  const validateFormErrors = (formErrors) => {
    const hasErrors = Object.values(formErrors).some((error) => error === true);
    return hasErrors;
  };

  //////////////////////
  // Handle Submit
  //////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if form errors exist, setError then return
      if (hasSomeErrors) {
        setError("Please ensure all fields meet the required input criteria.");
        return;
      }
      // if form.contactTerms is false then service fn returns with {noContact:true}
      const data = await submitAssessmentForm(form);
      if (data?.noContact) {
        setError(
          "Please agree to be contacted by checking the box below to send the form. Otherwise, you should call us directly at (916) 320-7022 or email us at fastandeasysolar@gmail.com with your information. Thank you."
        );
        return;
      } else if (data?.error) {
        setError(data.error);
        return;
      } else {
        setSuccess("Assessment Inquiry Successfully Sent!");
        resetForm();
        setAddress("");
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setError(
        "Form Submission Failed. Please reach out directly to either Fastandeasysolar@gmail.com or text (916) 320-7022 with the information requested in the form to request a free assessment if this form is not working"
      );

      console.log(`Unable to submit assesssment form`);
    }
  };

  ///////////////////////////
  // Sync local address state with context form state
  ///////////////////////////
  // * local
  useEffect(() => {
    handleUpdateAddress(address);
    console.log(address, ' <-- address')
  }, [address]);

  // * context
  useEffect(() => {
    if (!form.address) setAddress("");
  }, [form.address]);

  // validate form errors on every form change
  useEffect(() => {
    setHasSomeErrors(validateFormErrors(formErrors));
  }, [form]);

  return (
    <div className={`input-group`}>
      {/* Full Name */}
      <ContactFormInput
        title="Full Name"
        name="fullName"
        value={form.fullName}
        errorState={formErrors.fullName}
        handleChange={handleUpdateForm}
      />
      {/* Email */}
      <ContactFormInput
        title="Email"
        name="email"
        value={form.email}
        errorState={formErrors.email}
        handleChange={handleUpdateForm}
      />
      {/* Phone */}
      <ContactFormInput
        title="Phone"
        name="phone"
        value={form.phone}
        errorState={formErrors.phone}
        handleChange={handleUpdateForm}
      />

      {/* Address */}
      <AutocompleteInput
        handleGetFullAddress={handleGetFullAddress}
        address={address}
        setAddress={setAddress}
      />
      <input value={address} onChange={()=>test(address)} type="text" name="test" id="test" />
      {/* Date */}
      <div className="my-6">
        <label className="block text-gray-700 text-xl lg:text-2xl">
          Preferred Date*
        </label>
        <input
          required
          className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 hover:border-[#b3b3b3] text-xl lg:text-2xl"
          type="date"
          name="date"
          id="date"
          placeholder="Select Date"
          onChange={handleUpdateForm}
          value={form.date}
        />
      </div>
      {/* Time */}
      <TimeInput handleUpdateForm={handleUpdateForm} time={form.time} />

      {/* Message */}
      <TextareaInput
        errorMessage={formErrors.message}
        value={form.message}
        handleChange={handleUpdateForm}
      />

      {/* contact terms */}
      <div className={`my-4`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          By checking this box you agree to be contacted to get more information
          about how our services can help you save today
        </label>
        <div className="flex items-center justify-start gap-4 mt-5">
          <label htmlFor="contactTerms" className="sr-only">
            I agree to be contacted
          </label>
          <input
            onChange={handleToggleCheckbox}
            checked={form.contactTerms}
            type="checkbox"
            name="contactTerms"
            id="contactTerms"
          />{" "}
          <span className="text-xl">I agree to be contacted</span>
        </div>
      </div>

      {/* Submit Button */}
      <div className={`flex space-x-4`}>
        <div className={`my-6 w-1/2 lg:w-1/3`}>
          <button
            onClick={handleSubmit}
            className={`uppercase px-2 py-2 text-xl tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:-translate-y-1 transition-all duration-150 ease-in-out hover:shadow-lg`}
          >
            Send Message
          </button>
        </div>
      </div>
      {/* Alerts */}
      {success && <Alert message={success} success />}
      {error && <Alert message={error} handleClose={() => setError("")} />}
    </div>
  );
};

///////////////////////////
// Contact Form Input
///////////////////////////
export const ContactFormInput = ({
  title,
  name,
  errorState,
  value,
  handleChange,
}) => {
  return (
    <div className={`my-6`}>
      <label className={`block text-gray-700 text-xl lg:text-2xl`}>
        {title}*
      </label>
      <input
        required
        className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 hover:border-[#b3b3b3]  ${
          errorState && "border-red-500"
        } text-xl lg:text-2xl`}
        type={name}
        name={name}
        placeholder={`${title}*`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

///////////////////////////
// Autocomplete Input
///////////////////////////
export const AutocompleteInput = ({
  address,
  setAddress,
  handleGetFullAddress,
}) => {
  const { addClearAutocompleteInputBtn } = useFormContext();
  useEffect(() => {
    // ensures the clear btn is always added to the DOM when the address changes
    addClearAutocompleteInputBtn(setAddress);
  }, [address]);
  return (
    <div className={`my-6 autocomplete-container`}>
      <label className={`block text-gray-700 text-xl lg:text-2xl`}>
        Street Address*
      </label>
      <AutocompleteErrorBoundary>
        <GooglePlacesAutocomplete
          selectProps={{
            value: address ? { label: address } : null,
            onChange: handleGetFullAddress,
          }}
          apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
        />
      </AutocompleteErrorBoundary>
    </div>
  );
};

///////////////////////////
// Time Input
///////////////////////////
export const TimeInput = ({ handleUpdateForm, time }) => {
  return (
    <div className="my-6">
      <label className="block text-gray-700 text-xl lg:text-2xl">
        Preferred Time
        <span className="block text-sm text-gray-500">
          For guaranteed availability, please book through the "Book" button or
          Calendly widget below.
        </span>
      </label>
      <select
        required
        className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 hover:border-[#b3b3b3] text-xl lg:text-2xl"
        name="time"
        id="time"
        onChange={handleUpdateForm}
        value={time}
      >
        <option value="" disabled selected>
          Select Time of Day
        </option>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
    </div>
  );
};

///////////////////////////
// Text Area Input
///////////////////////////
export const TextareaInput = ({ errorMessage, value, handleChange }) => {
  return (
    <div className={`my-4`}>
      <label className={`block text-gray-700 text-xl lg:text-2xl`}>
        Message
      </label>
      <textarea
        placeholder="Message"
        className={`w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 hover:border-[#b3b3b3] ${
          errorMessage && "border-red-500"
        } text-xl lg:text-2xl`}
        name="message"
        value={value}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
