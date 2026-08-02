
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
    const subject = "Welcome to MS Bank – Your Account Has Been Created";

    const text = `Dear ${name},

Welcome to MS Bank!

We are delighted to inform you that your account has been successfully registered.

At MS Bank, we are committed to providing you with a secure, reliable, and seamless banking experience. You can now access our services and enjoy the features available to our valued customers.

If you did not create this account, please contact our support team immediately.

Thank you for choosing MS Bank. We look forward to serving you.

Best regards,

MS Bank Team
Secure • Trusted • Reliable`;

    const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width:600px; margin:auto; padding:30px; border:1px solid #e5e5e5; border-radius:10px; background:#ffffff;">
        
        <h2 style="color:#1E3A8A; margin-bottom:20px;">
            Welcome to MS Bank
        </h2>

        <p>Dear <strong>${name}</strong>,</p>

        <p>
            We are delighted to welcome you to <strong>MS Bank</strong>.
            Your account has been successfully registered.
        </p>

        <p>
            At MS Bank, our mission is to provide a secure, reliable, and convenient
            banking experience. We are excited to have you as part of our growing community.
        </p>

        <div style="background:#F3F4F6; padding:15px; border-radius:8px; margin:20px 0;">
            <strong>✔ Registration Status:</strong> Successful
        </div>

        <p>
            If you did not create this account, please contact our support team immediately.
        </p>

        <p>
            Thank you for choosing <strong>MS Bank</strong>. We look forward to serving you.
        </p>

        <hr style="border:none; border-top:1px solid #ddd; margin:30px 0;">

        <p style="margin:0;"><strong>Best Regards,</strong></p>
        <p style="margin:5px 0;"><strong>MS Bank Team</strong></p>

        <p style="font-size:12px; color:#666; margin-top:20px;">
            This is an automated email. Please do not reply to this message.
        </p>
    </div>`;

    await sendEmail(userEmail, subject, text, html);
};

module.exports = {
    sendRegisterationEmail
}




