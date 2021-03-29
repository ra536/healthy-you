const express = require('express');
const router = express.Router();
const db = require('../db/index');
const doctor = require('../db/models/doctor');
const { Sequelize } = require('sequelize');
const { validateDoctorToken } = require('../JWT')


router.use(express.json());

// Doctors should be able to:
// CREATE specialties, practices, appointments, bio
// READ everything in their dashboard
// UPDATE bio and maybe appointments, profile pictures
// DELETE specialties, practices, appointments,

router.post("/findDoctor", validateDoctorToken, async (req, res) => {
    try {
        const doctorResult = await doctor.findAll({
            where: {
                doctor_id: req.body.doctor_id
            },
            raw: true
        })
        //console.log(req.body)
        res.status(200).json({
            status: "success",
            data: doctorResult
        })
    }
    catch (err) {
      console.log(err)
    }
});

router.post("/addSpecialty", validateDoctorToken, async (req, res) => {
    try {
        const specialty = await doctor.update(
            {
                specialty: Sequelize.fn('array_append', Sequelize.col('specialty'), req.body.specialty)
            },
            {
                where: {doctor_id: req.body.doctor_id}
            }
           );
        console.log(req.body)
        res.status(200).json({
            status: "success",
            data: {
                specialty: req.body.specialty,
                doctor_id: req.body.doctor_id
            }
        })
    }
    catch (err) {
      console.log(err)
    }
});

router.post("/removeSpecialty", validateDoctorToken, async (req, res) => {
    try {
        const specialty = await doctor.update(
            {
                specialty: Sequelize.fn('array_remove', Sequelize.col('specialty'), req.body.specialty)
            },
            {
                where: {doctor_id: req.body.doctor_id}
            }
           );
        console.log(req.body)
        res.status(200).json({
            status: "success",
            data: {
                specialty: req.body.specialty
            }
        })
    }
    catch (err) {
      console.log(err)
    }
});

module.exports = router;