const express = require("express");

const router = express.Router();
const appointment = require("../db/models/appointment");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const appointmentResults = await appointment.findAll({
      raw: true,
    });
    // console.log(appointmentResults);
    res.status(200).json({
      status: "success",
      data: appointmentResults,
    });
  } catch (err) {
    // console.error(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const appointments = await appointment.create({
      date: req.body.date,
      time: req.body.time,
      status: 1,
    });
    // console.log(appointments.dataValues);
    res.status(201).json({
      status: "success",
      data: {
        date: appointments.dataValues.date,
        time: appointments.dataValues.time,
        status: appointments.dataValues.status,
      },
    });
  } catch (err) {
    // console.log(err);
  }
});

module.exports = router;
