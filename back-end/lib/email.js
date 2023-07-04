import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);

//--------------DEFAULT-MAIL-OPTIONS--------------\\
const defaultMailOptions = {
  to: [process.env.EMAIL_ADRESS],
  subject: "Hello",
  html: "Testing <strong>some</strong> Mailgun awesomeness!",
};

//--------------SEND-MAIL--------------\\
export const sendMail = async ({ to, subject, html } = defaultMailOptions) => {
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  console.log({ html });

  return mg.messages
    .create("sandbox385941dda8d742ca80523df164e90403.mailgun.org", {
      from: "You got Mailguned <mailgun@sandbox385941dda8d742ca80523df164e90403.mailgun.org>",
      to,
      subject,
      html,
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.log(err)); // logs any error
};
