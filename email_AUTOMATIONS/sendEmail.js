const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail() {
  const user = "manjuanumay9@gmail.com"
  const pass = "Manju@1431";

  if (!user || !pass) {
    console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables.");
    return;
  }

  // Use explicit SMTP settings for Gmail and an app password if your account uses 2FA.
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports (587)
    auth: { user, pass },
    tls: { rejectUnauthorized: false }
  });

  try {
    await transporter.verify(); // verifies connection configuration
    const info = await transporter.sendMail({
      from: user,
      to: "manjuanumay9@gmail.com",
      subject: "Daily Report",
      text: "Hello, here is your automated report!"
    });

    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error("Failed to send email:", err);
  }
}
sendEmail();
