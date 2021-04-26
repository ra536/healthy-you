const express = require("express");

const router = express.Router();
const { Sequelize, Op } = require("sequelize");
const nodemailer = require("nodemailer");

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
//   const testAccount = await nodemailer.createTestAccount();

// create reusable transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.ETHEREAL_EMAIL, // generated ethereal user
//     pass: process.env.ETHEREAL_PASSWORD, // generated ethereal password
//   },
// });

// gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

router.post("/sendInvite", async (req, res) => {
  const { name, email, subject, body } = req.body;
  const emailResponse = [];
  const mailOptions = {
    from: `${name} <${email}>`, // sender address
    to: "healthy.you.511@gmail.com",
    subject: subject, // Subject line
    text: body, // plain text body
  };
  // send mail with defined transport object
  const info = transporter.sendMail(mailOptions);
  emailResponse.push(info);

  res.status(200).json({
    status: "sent!",
    data: emailResponse,
  });
  console.log("Successfully sent email!");
  // console.log(emails.length);
});

module.exports = router;
