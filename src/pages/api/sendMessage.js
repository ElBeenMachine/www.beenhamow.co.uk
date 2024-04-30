/**
 * @author @ElBeenMachine
 */

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

// Send confirmation email to user
function sendConfirmationEmail(from, name, to) {
    const msg = {
        to,
        from: {
            email: from,
            name: "Website Enquiries",
        },
        subject: "Thank you for your message",
        html: `
            <p>Hi ${name.split(" ")[0]},</br></p>
            <p>Thank you for your message.<br /></p>
            <p>Please be assured that I have received it and will endeavour to get back to you as soon as possible.<br /></p>
            <p>Kind regards,</p>
            <p>Ollie B</p>
        `,
    };

    return sgMail.send(msg);
}

// Send message to owner
function sendToOwner(from, replyTo, name, message) {
    const to = "hello@beenhamow.co.uk";

    const msg = {
        to,
        from: {
            email: from,
            name: "Website Enquiries",
        },
        replyTo,
        subject: "New Form Submission",
        html: `
            <p>Email Address: ${replyTo}</p>
            <p>Name: ${name}</p>
            <p>Message: ${message}</p>    
        `,
    };

    return sgMail.send(msg);
}

// API route to send an email
export default async (req, res) => {
    if (req.method === "POST") {
        const from = "no-reply@mail.beenhamow.co.uk";

        // Get the form data
        const { name, email, message } = JSON.parse(req.body);

        // Send the necessary emails
        try {
            sendConfirmationEmail(from, name, email);
            sendToOwner(from, email, name, message);
            res.status(200).json({ message: "Email sent" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error sending email" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
};
