
const nodemailer = require('nodemailer');

/**
 * * transporter are used to interact with gmail servers like SMTP
 */
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
    },
});

// Verify the connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Error connecting to email server:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});



// Function to send email
const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"MS Bank" <${process.env.EMAIL_USER}>`, // sender address
            to, // list of receivers
            subject, // Subject line
            text, // plain text body
            html, // html body
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


const sendRegisterationEmail = async (userEmail, name) => {
    const subject = "Welcome to MS Bank"
    const text = `Hi ${name}.\n\nThank You for registering your Email at MS Bank.\nWe are excited for you.\n\nBest Regards.\n\nMS Bank Team`
    const html = `
        <p>Hi ${name}.</p>
        <p>Thank You for registering your Email at MS Bank.</p>
        <p>We are excited for you.</p>
        <p>Best Regards.</p>
        <p>MS Bank Team</p>
        `;

}

module.exports = sendEmail;




