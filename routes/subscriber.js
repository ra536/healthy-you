const express = require("express");

const router = express.Router();
const nodemailer = require("nodemailer");
const subscriber = require("../db/models/subscriber.js");

router.use(express.json());

// gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const subscriberResult = await subscriber.create({
      email: req.body.email,
      firstName: firstName,
      lastName: lastName,
    });
    res.status(200).json({
      status: "success",
      data: subscriberResult.email,
    });
  } catch (error) {
    console.log(error.message);
  }

  const mailOptionsAdmin = {
    from: `${firstName} + " " ${lastName}`, // sender address
    to: process.env.EMAIL,
    subject: `${firstName} ${lastName} Has Subscribed to Our Newsletter!`, // Subject line
    text: `${firstName} ${lastName} Has Subscribed to Our Newsletter!`, // plain text body
    replyTo: `${firstName} ${lastName} Has Subscribed to Our Newsletter!`,
  };
  const mailOptionsSubscriber = {
    from: "Healthy You", // sender address
    to: `${req.body.email}`,
    subject: "Thank you for subscribing to our newsletter!", // Subject line
    text: "Thank you for subscribing to our newsletter!", // plain text body
    replyTo: "Thank you for subscribing to our newsletter!",
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptionsAdmin);
  transporter.sendMail(mailOptionsSubscriber);
});

module.exports = router;
