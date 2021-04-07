const express = require("express");
const { check } = require("prettier");

const router = express.Router();
const db = require('../db/index')
const appointment = require('../db/models/appointment')
const doctor = require('./doctor');
const { Op } = require("sequelize");

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

router.post("/saveAppt", async (req, res) => {
  try {
    const checkIfExists = await appointment.count({
      where: {
        doctor_id: req.body.doctor_id,
        [Op.or]: {
          start_time: {
            [Op.and]: [{
              [Op.gte]: req.body.start,
              [Op.lte]: req.body.end
            }]
          },
          end_time: {
            [Op.and]: [{
              [Op.gte]: req.body.start,
              [Op.lte]: req.body.end
            }]
          }
        },
      }
    })
    console.log(checkIfExists)
    if (checkIfExists == 0) {
      const appts = await appointment.create(
        {
          doctor_id: req.body.doctor_id,
          start_time: req.body.start,
          end_time: req.body.end,
          status: 0
        }
      );
      // console.log(req.body)
      res.status(200).json({
        status: "success",
        data: {
          appointment_id: appts.dataValues.appointment_id,
          start_time: req.body.start,
          end_time: req.body.end,
          doctor_id: req.body.doctor_id,
          status: 0,
        }
      })
    }
  }
  catch (err) {
    console.log(err)
  }
});

router.post("/getAllAppts", async (req, res) => {
  try {
    const appointmentResults = await appointment.findAll({
      raw: true,
      where: { doctor_id: req.body.doctor_id }
    });
    // console.log(appointmentResults);
    res.status(200).json({
      status: "success",
      data: appointmentResults
    })
  }
  catch (err) {
    console.error(err);
  }
});

router.post("/getApptInfo", async (req, res) => {
  try {
    const appointmentResults = await appointment.findAll({
      raw: true,
      where: {
        appointment_id: req.body.appointment_id
      }
    });
    // console.log(appointmentResults);
    res.status(200).json({
      status: "success",
      data: appointmentResults
    })
  }
  catch (err) {
    console.error(err);
  }
});

router.post("/cancelAppt", async (req, res) => {
  try {
    const appointmentResults = await appointment.destroy({
      raw: true,
      where: {
        appointment_id: req.body.appointment_id
      }
    });
    // console.log(appointmentResults);
    res.status(200).json({
      status: "success",
      data: appointmentResults
    })
  }
  catch (err) {
    console.error(err);
  }
});


module.exports = router;
