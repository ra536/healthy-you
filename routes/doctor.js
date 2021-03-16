const express = require('express');
const router = express.Router();
const db = require('../db/index')
const doctor = require('../db/models/doctor')

router.use(express.json());

// Doctors should be able to:
// CREATE specialties, practices, appointments, bio
// READ everything in their dashboard
// UPDATE bio and maybe appointments, profile pictures
// DELETE specialties, practices, appointments,

// router.post("/create", async (req, res) => {
//     try {
//         if(req.body.practiceName != "" && req.body.doctor != ""){
//             const pid = await practice.findOne({
//                 where: {name: req.body.practiceName}
//             });
//             if(pid != null){
//                 //Array type to hold more than one specialty per doctor
//                 var specialties = [];
//                 specialties.push(req.body.specialty);
//                 const doctors = await doctor.create({
//                     practice_id: pid.practice_id,
//                     doctor_name: req.body.doctor,
//                     rating: req.body.rating,
//                     profile_picture: req.body.profilePic,
//                     specialty: specialties,
//                     bio: req.body.bio
//                 })
//                 console.log(doctors.dataValues)
//                 res.status(201).json({
//                     status: "success",
//                     data: {
//                         practice_id: doctors.dataValues.practice_id,
//                         doctor_name: doctors.dataValues.doctor_name,
//                         rating: doctors.dataValues.rating,
//                         profile_picture: doctors.dataValues.profilePic,
//                         specialty: doctors.dataValues.specialty,
//                         bio: doctors.dataValues.bio
//                     }
//                 })
//             }
//         }
//     }
//     catch (err) {
//       console.log(err)
//     }
// });

// router.get("/", async (req, res) => {
//     try {
//         const doctorResults = await doctor.findAll({
//             raw: true
//         });
//         console.log(doctorResults);
//         res.status(200).json({
//           status: "success",
//           data: doctorResults
//         })
//       } 
//     catch (err) {
//         console.error(err.message);
//     }
// });

// router.post("/", async (req, res) => {
//     try {
//         const doctors = await doctor.create({
//             doctor_name: req.body.doctor_name,
//             rating: req.body.rating,
//         })
//         console.log(doctors.dataValues)
//         res.status(201).json({
//             status: "success",
//             data: {
//                 doctor_name: doctors.dataValues.doctor_name,
//                 rating: doctors.dataValues.rating
//             }
//         })
//     }
//     catch (err) {
//       console.log(err)
//     }
// });

module.exports = router;