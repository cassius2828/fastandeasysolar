import { MailtrapClient } from "mailtrap";

//////////////////////
// Constants       //
//////////////////////

const TOKEN = process.env.VITE_MT_TOKEN;
const ENDPOINT = "https://send.api.mailtrap.io/";

///////////////////////////////
// Lambda Handler Function //
///////////////////////////////

export const handler = async (event, context) => {
  let formData;

  ////////////////////////////////
  // Validate JSON in Event Body //
  ////////////////////////////////

  try {
    formData = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  ///////////////////////////
  // Validate Form Data    //
  ///////////////////////////

  const requiredFields = [
    "bill",
    "location",
    "program",
    "firstName",
    "lastName",
    "email",
    "phone",
    "message",
  ];

  for (const field of requiredFields) {
    if (!formData[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Missing field: ${field}` }),
      };
    }
  }

  ///////////////////////////
  // Try Sending the Email //
  ///////////////////////////

  try {
    const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

    const sender = {
      email: "mailtrap@demomailtrap.com",
      name: "Mailtrap Test",
    };
    const recipients = [
      {
        email: "cassius2828@gmail.com",
      },
    ];

    await client.send({
      from: sender,
      to: recipients,
      template_uuid: "f78399a9-d00f-461e-a15b-9e6ab4447827",
      template_variables: {
        bill: formData.bill,
        location: formData.location,
        program: formData.program,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
