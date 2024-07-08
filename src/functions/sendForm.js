import { MailtrapClient } from "mailtrap";
import { useFormContext } from "../context/useFormContext";

const TOKEN = import.meta.env.VITE_MT_TOKEN;
const ENDPOINT = "https://send.api.mailtrap.io/";

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
const { form } = useFormContext();
client
  .send({
    from: sender,
    to: recipients,
    template_uuid: "f78399a9-d00f-461e-a15b-9e6ab4447827",
    template_variables: {
      bill: form.bill,
      location: form.location,
      program: form.program,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      message: form.message,
    },
  })
  .then(console.log, console.error);
