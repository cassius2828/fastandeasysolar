import emailjs from "emailjs-com";
const serviceId = import.meta.env.VITE_SERVICE_ID;
const assessmentTemplateId = import.meta.env.VITE_ASSESSMENT_TEMPLATE_ID;
const leadSetterTemplateId = import.meta.env.VITE_LEAD_SETTER_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUB_KEY;
///////////////////////////
// Client Assessment Form
///////////////////////////
export const submitAssessmentForm = (formData) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    message,
    zipcode,
    address,
    contactTerms,
  } = formData;
  let formattedPhoneNum = formatPhoneNum(phone);
  const params = {
    from_name: `${firstName} ${lastName}`,
    cell: formattedPhoneNum,
    email,
    address: `${address}, ${zipcode}`,
    message,
    contactTerms: `${
      contactTerms
        ? "agreed to be contacted."
        : "did NOT agree to be contacted."
    }`,
    publicKey,
  };
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
export const submitLeadSetterInquiry = (formData) => {
  const { firstName, lastName, email, phone, message } = formData;
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
  console.log(part1, part2, part3);
  return `(${part1}) ${part2}-${part3}`;
};

console.log(formatPhoneNum("7075674000"));
