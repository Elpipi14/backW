// // server.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,
// };
// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//     host: 'smtp.ferozo.com',
//     port: 465, 
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: 'info@widuweb.com', // Your SMTP email
//         pass: 'AleAndresLauLuke24@/' // Your SMTP password
//     }
// });

// app.post('/send-email', (req, res) => {
//     const { first_name, last_name, email, phone_number, message } = req.body;

//     // Email options with styled HTML
//     const mailOptions = {
//         from: 'info@widuweb.com',
//         to: 'info@widuweb.com', // Your email
//         subject: 'New Contact Form Submission',
//         html: `
//             <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
//                 <h3 style="color: #4CAF50; text-align: center;">New Contact Form Submission</h3>
//                 <p style="color: #333; font-size: 1.1em;">You have received a new contact form submission. Here are the details:</p>
//                 <div style="background-color: #fff; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0;">
//                     <p style="color: #333; font-size: 1.1em;"><strong>First Name:</strong> ${first_name}</p>
//                     <p style="color: #333; font-size: 1.1em;"><strong>Last Name:</strong> ${last_name}</p>
//                     <p style="color: #333; font-size: 1.1em;"><strong>Email:</strong> ${email}</p>
//                     <p style="color: #333; font-size: 1.1em;"><strong>Phone Number:</strong> ${phone_number}</p>
//                     <p style="color: #333; font-size: 1.1em;"><strong>Message:</strong> ${message}</p>
//                 </div>
//             </div>
//         `
//     };

//     const sentmailOptions = {
//         from: 'info@widuweb.com',
//         to: email, // Client's email
//         subject: 'Message Sent',
//         html: `
//             <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
//                 <h3 style="color: #4CAF50; text-align: center;">Message Sent</h3>
//                 <p style="color: #333; font-size: 1.1em;">Your message has been sent successfully!</p>
//                 <p style="color: #333; font-size: 1.1em;">We will contact you very soon!</p>
//             </div>
//         `
//     };

//     // Send email to yourself
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             return res.status(500).json({ message: 'Failed to send email' });
//         }
//         console.log('Email sent:', info.response);
//         res.status(200).json({ message: 'Email sent successfully' });
//     });

//     // Send confirmation email to the client
//     transporter.sendMail(sentmailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             return res.status(500).json({ message: 'Failed to send email' });
//         }
//         console.log('Confirmation email sent:', info.response);
//     });

//     // Clear form fields
//     req.body = {};
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
    origin: 'http://widuweb.com',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'c2670112.ferozo.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'info@widuweb.com', // Your SMTP email
        pass: 'S@nnicolas14' // Your SMTP password
    }
});

app.post('/send-email', (req, res) => {
    const { first_name, last_name, email, phone_number, message } = req.body;

    // Email options with styled HTML
    const mailOptions = {
        from: 'info@widuweb.com',
        to: 'info@widuweb.com', // Your email
        subject: 'New Contact Form Submission',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                <h3 style="color: #4CAF50; text-align: center;">New Contact Form Submission</h3>
                <p style="color: #333; font-size: 1.1em;">You have received a new contact form submission. Here are the details:</p>
                <div style="background-color: #fff; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #333; font-size: 1.1em;"><strong>First Name:</strong> ${first_name}</p>
                    <p style="color: #333; font-size: 1.1em;"><strong>Last Name:</strong> ${last_name}</p>
                    <p style="color: #333; font-size: 1.1em;"><strong>Email:</strong> ${email}</p>
                    <p style="color: #333; font-size: 1.1em;"><strong>Phone Number:</strong> ${phone_number}</p>
                    <p style="color: #333; font-size: 1.1em;"><strong>Message:</strong> ${message}</p>
                </div>
            </div>
        `
    };

    const sentmailOptions = {
        from: 'info@widuweb.com',
        to: email, // Client's email
        subject: 'Message Sent',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h3 style="color: #4CAF50; text-align: center;">Mensaje Enviado</h3>
        <p style="color: #333; font-size: 1.1em;">¡Tu mensaje ha sido enviado con éxito!</p>
        <p style="color: #333; font-size: 1.1em;">¡Nos pondremos en contacto contigo muy pronto!</p>
        
        <!-- Footer with logo -->
        <div style="text-align: center; margin-top: 20px;">
            
            <p style="color: #777; font-size: 0.9em; margin-top: 10px;">Gracias por contactarnos</p>
        </div>
    </div>
        `
    };

    // Send email to yourself
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            
            // Send confirmation email to the client
            transporter.sendMail(sentmailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending confirmation email:', error);
                    return res.status(500).json({ message: 'Failed to send confirmation email' });
                }
                console.log('Confirmation email sent:', info.response);
                return res.status(200).json({ message: 'Email sent successfully' });
            });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});