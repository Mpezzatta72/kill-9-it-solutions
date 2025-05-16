const nodemailer = require('nodemailer');

const sendEmail = async (formData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'kill-9networking@gmail.com',
        subject: 'New Customer Interest Form Submission',
        text: `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nServices/Problem: ${formData.services}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;