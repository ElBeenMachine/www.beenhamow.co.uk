const sgMail = require("@sendgrid/mail");

require("dotenv").config();
console.log(process.env.SENDGRID_KEY);

sgMail.setApiKey(process.env.SENDGRID_KEY);
const msg = {
    to: "beenhamow@gmail.com", // Change to your recipient
    from: "no-reply@mail.beenhamow.co.uk", // Change to your verified sender
    subject: "Test",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

sgMail
    .send(msg)
    .then(() => {
        console.log("Email sent");
    })
    .catch((error) => {
        console.error(error.response.body);
    });
