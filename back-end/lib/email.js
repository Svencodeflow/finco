import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);

const defaultMailOptions = {
  to: ["oliver@super-code.de"],
  subject: "Hello",
  html: "Testing <strong>some</strong> Mailgun awesomeness!",
};

export const sendMail = async ({ to, subject, html } = defaultMailOptions) => {
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  console.log({ html });

  return mg.messages
    .create("sandboxedb7fdd1bd784d3e83432639fc248c6c.mailgun.org", {
      from: "You got Mailguned <mailgun@sandboxedb7fdd1bd784d3e83432639fc248c6c.mailgun.org>",
      to,
      subject,
      html,
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.log(err)); // logs any error
};
