import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import emailjs from "emailjs-com";
// vars
const serviceId = import.meta.env.VITE_SERVICE_ID;
const assessmentTemplateId = import.meta.env.VITE_ASSESSMENT_TEMPLATE_ID;
const leadSetterTemplateId = import.meta.env.VITE_LEAD_SETTER_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUB_KEY;

const formatDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);

  return format(date, "EEEE, MMMM do, yyyy", { locale: enUS });
};

///////////////////////////
// Client Assessment Form
///////////////////////////
export const submitAssessmentForm = async (formData) => {
  const { fullName, email, phone, message, address, contactTerms, time, date } =
    formData;

  let formattedPhoneNum = formatPhoneNum(phone);
  let formattedDate = formatDate(date);

  const params = {
    from_name: `${fullName}`,
    cell: formattedPhoneNum,
    email,
    address: `${address}`,
    message,
    date: formattedDate ? formattedDate : "No preferred date",
    time: time ? time : "No preferred time of day",
    contactTerms: `${
      contactTerms
        ? "agreed to be contacted."
        : "did NOT agree to be contacted."
    }`,
    publicKey,
  };

  // Check if any field is empty or undefined
  if (!fullName || !email || !phone || !message || !address || !contactTerms) {
    return { error: "Please fill out all fields" };
  }
  if (!contactTerms) {
    return { noContact: true };
  }
  emailjs
    .send(serviceId, assessmentTemplateId, params, publicKey)
    .then((response) => {
      console.log(`Success!`, response.status, response.text);
    })
    .catch((err) => {
      console.log("Failed...", err);
    });
};
///////////////////////////
// Lead Setter Job Inquiry
///////////////////////////
export const submitLeadSetterInquiry = async (formData) => {
  const { firstName, lastName, email, phone, message } = formData;
  if (!firstName || !lastName || !email || !phone || !message) {
    return { incomplete: true };
  }

  let formattedPhoneNum = formatPhoneNum(phone);
  const params = {
    from_name: `${firstName} ${lastName}`,
    cell: formattedPhoneNum,
    email,
    message,
    publicKey,
  };
  emailjs
    .send(serviceId, leadSetterTemplateId, params, publicKey)
    .then((response) => {
      console.log(`Success!`, response.status, response.text);
    })
    .catch((err) => {
      console.log("Failed...", err);
    });
};

///////////////////////////
// Format Phone Number | Helper
///////////////////////////
const formatPhoneNum = (number) => {
  let part1 = number.slice(0, 3);
  let part2 = number.slice(3, 6);
  let part3 = number.slice(6);

  return `(${part1}) ${part2}-${part3}`;
};


