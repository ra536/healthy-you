require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Sequelize, Op } = require("sequelize");
const nodemailer = require("nodemailer");
const review = require("../db/models/review");
const doctor = require("../db/models/doctor");
const { isDefined } = require("../db");
const { Pool } = require("pg");

router.use(express.json());

router.post("/getDoctor", async (req, res) => {
  try {
    const findReview = await review.findByPk(req.body.review_id);
    const doctor_id = findReview.doctor_id;
    console.log("\n\n\n", doctor_id);
    const findDoctor = await doctor.findByPk(doctor_id);
    console.log("\n\n\nFOUND!!!");
    res.status(200).json({
      status: "success",
      data: findDoctor,
    });
    console.log("SENT!!!");
  } catch (err) {
    //
  }
});

router.post("/findAllForDoctor", async (req, res) => {
  try {
    const reviewResults = await review.findAll({
      where: {
        doctor_id: req.body.doctor_id,
      },
      raw: true,
    });
    res.status(200).json({
      status: "success",
      data: reviewResults,
    });
  } catch (err) {
    // console.log(req.body);
    // console.log(err)
    // console.log("THERE IS AN ERROR!");
  }
});

router.post("/findAll", async (req, res) => {
  try {
    const reviewResults = await review.findAll({
      order: [["status", "DESC"]],
      raw: true,
    });
    res.status(200).json({
      status: "success",
      data: reviewResults,
    });
  } catch (err) {
    // console.log(req.body);
    // console.log(err)
    // console.log("THERE IS AN ERROR!");
  }
});

router.post("/getAllInviteCodes", async (req, res) => {
  try {
    const results = await review.findAll({
      attributes: ["review_id"],
      where: {
        status: {
          [Op.or]: {
            [Op.ne]: "COMPLETED",
            [Op.ne]: "APPROVED",
          },
        },
      },
    });
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (err) {
    //
  }
});

router.post("/create", async (req, res) => {
  const reviewIDs = [];
  try {
    for (const email of req.body.emails) {
      const newReview = await review
        .create({
          doctor_id: req.body.doctor_id,
          email: email,
          status: "SENT",
        })
        .then((revObject) => reviewIDs.push(revObject.review_id));
    }
    res.status(200).json({
      status: "success",
      ids: reviewIDs,
    });
  } catch (err) {
    res.send(err);
  }
  console.log("Successfully created reviews!");
});

router.post("/approve", async (req, res) => {
  try {
    const approveReview = await review.findByPk(req.body.review_id);
    approveReview.status = "APPROVED";
    await approveReview.save();

    const theDoctor = await doctor.findByPk(req.body.doctor_id);
    const currNumRatings = theDoctor.num_ratings;
    const currRating = theDoctor.rating;
    const currBedside = theDoctor.bedside;
    const currWaitTime = theDoctor.wait_time;
    const currAvail = theDoctor.availability;

    if (currNumRatings == 0) {
      theDoctor.rating = approveReview.overall_rating;
      theDoctor.bedside = approveReview.bedside_manner;
      theDoctor.wait_time = approveReview.wait_time;
      theDoctor.availability = approveReview.availability;
      theDoctor.num_ratings = 1;
    } else {
      const nextNumRatings = currNumRatings + 1;

      const interRating = currRating * (currNumRatings / nextNumRatings);
      const newRating =
        interRating + approveReview.overall_rating / nextNumRatings;
      theDoctor.rating = newRating;

      const interBedside = currBedside * (currNumRatings / nextNumRatings);
      const newBedside =
        interBedside + approveReview.bedside_manner / nextNumRatings;
      theDoctor.bedside = newBedside;

      const interWait = currWaitTime * (currNumRatings / nextNumRatings);
      const newWait = interWait + approveReview.wait_time / nextNumRatings;
      theDoctor.wait_time = newWait;

      const interAvail = currAvail * (currNumRatings / nextNumRatings);
      const newAvail = interAvail + approveReview.availability / nextNumRatings;
      theDoctor.availability = newAvail;

      theDoctor.num_ratings = nextNumRatings;
      // calculate average
    }

    await theDoctor.save();

    res.status(200).json({
      status: "success",
      data: theDoctor,
    });
    // const review = newReview.review_id;
    // console.log(review);
  } catch (err) {
    //
  }
});

router.post("/leaveReview", async (req, res) => {
  try {
    const result = await review.findByPk(req.body.review_id);
    console.log(result);
    result.name = req.body.name;
    result.full_review = req.body.review;
    result.overall_rating = req.body.overall;
    result.bedside_manner = req.body.bedside;
    result.wait_time = req.body.wait;
    result.availability = req.body.availability;
    result.status = "COMPLETED";
    result.publication_date = Sequelize.fn("NOW");

    await result.save();
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({
    status: "success",
  });
});

router.post("/sendInvite", async (req, res) => {
  const { emails, ids } = req.body;
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

  const base = process.env.REVIEW_BASE_LINK || "http://localhost:3000/leaveReview/";

  const emailResponse = [];
  for (let i = 0; i < emails.length; i += 1) {
    const mailOptions = {
      from: '"Healthy You" <ra536@njit.edu>', // sender address
      to: emails[i], // list of receivers
      subject: "Please leave a review for your last appointment!", // Subject line
      text: `Click this link to leave a review for the doctor from your latest appointment: <a href="${base}${ids[i]}"> Leave a review! </a>`, // plain text body
      html: `Click this link to leave a review for the doctor from your latest appointment: <a href="${base}${ids[i]}"> Leave a review! </a>`,
    };
    // send mail with defined transport object
    const info = transporter.sendMail(mailOptions);
    emailResponse.push(info);
  }

  res.status(200).json({
    status: "sent!",
    data: emailResponse,
  });
  console.log("Successfully emailed review!");
  // console.log(emails.length);
});

module.exports = router;
