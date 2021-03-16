const express = require('express');
const router = express.Router();
const db = require('../db/index')
const doctor = require('../db/models/doctor')

router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const doctorResults = await doctor.findAll({
            raw: true
        });
        console.log(doctorResults);
        res.status(200).json({
          status: "success",
          data: doctorResults
        })
      } 
    catch (err) {
        console.error(err.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const doctors = await doctor.create({
            doctor_name: req.body.doctor_name,
            rating: req.body.rating,
        })
        console.log(doctors.dataValues)
        res.status(201).json({
            status: "success",
            data: {
                doctor_name: doctors.dataValues.doctor_name,
                rating: doctors.dataValues.rating
            }
        })
    }
    catch (err) {
      console.log(err)
    }
});

module.exports = router;