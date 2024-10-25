import { useEffect, useState } from "react";
import { useFormContext } from "../../context/useFormContext";
import { submitAssessmentForm } from "../../service/handleForms";
import Alert from "../Reusables/Alert";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import AutocompleteErrorBoundary from "../../ErrorBoundaries/AutocompleteErrorBoundry";
//////////////////////
// InputGroupContact Component
////////////////////

export const InputGroupContact = () => {
  // Context
  const {
    handleUpdateForm,
    handleUpdateAddress,
    handleToggleCheckbox,
    form,
    formErrors,
    resetForm,
    addClearAutocompleteInputBtn,
  } = useFormContext();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [hasSomeErrors, setHasSomeErrors] = useState(false);
  const [address, setAddress] = useState("");

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
      // ! this does not work as expected
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
  // Add Clear Autocomplete Input Btn
  ///////////////////////////

  useEffect(() => {
    addClearAutocompleteInputBtn(setAddress);
  }, []);

  ///////////////////////////
  // Sync local address state with context form state
  ///////////////////////////
  useEffect(() => {
    handleUpdateAddress(address);
  }, [address]);

  useEffect(() => {
    if (!form.address) setAddress("");
    console.log("resetting local address");
    console.log(form.address);
  }, [form.address]);
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
      {/* <div className={`my-6`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          Street Address*
        </label>
        <input
          required
          className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 hover:border-[#b3b3b3] ${
            formErrors.address && "border-red-500"
          } text-xl lg:text-2xl`}
          type="text"
          name="address"
          placeholder="123 Main St, Stockton CA*"
          value={form.address}
          onChange={handleUpdateForm}
        />
      </div> */}
      {/* Autocomplete Input */}
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
      {/* Message */}
      <div className={`my-4`}>
        <label className={`block text-gray-700 text-xl lg:text-2xl`}>
          Message
        </label>
        <textarea
          placeholder="Message"
          className={`w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 hover:border-[#b3b3b3] ${
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
