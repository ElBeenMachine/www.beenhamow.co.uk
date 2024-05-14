/**
 * @author @ElBeenMachine
 */

import type { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

// Send confirmation email to user
function sendConfirmationEmail(from: string, name: string, to: string, message: string) {
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

            <p>Please be assured that I have received your enquiry and will endeavour to get back to you as soon as possible.<br /></p>

            <p>Please find a copy of your message below:<br /><br /></p>

            <blockquote><em>${message}</em><br /><br /></blockquote>

            <em></em>

            <p>Thank you for your interest in my work. To view more of my projects, please feel free to check out my <a href="https://github.beenhamow.co.uk">GitHub</a>.<br /></p>

            <em />

            <p>Kind regards,</p>
            <p>Ollie B</p>

            <p><em>This is an automated message. Please do not reply to this email.</em></p>

        `,
    };

    return sgMail.send(msg);
}

// Send message to owner
function sendToOwner(from: string, replyTo: string, name: string, message: string) {
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
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const from = "no-reply@mail.beenhamow.co.uk";

        // Get the form data
        const { name, email, message } = JSON.parse(req.body);

        // Send the necessary emails
        try {
            sendConfirmationEmail(from, name, email, message);
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
