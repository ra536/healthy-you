const express = require('express');
const router = express.Router();
const db = require('../db/index')
const user = require('../db/models/user');
const doctor = require('../db/models/doctor');
const writer = require('../db/models/writer');
const bcrypt = require('bcrypt')

router.use(express.json());

const doctorCode = "doctor";
const writerCode = "writer";

router.post("/", async (req, res) => {
    const { email, password, firstName, lastName, city, state, birthdate } = req.body
    if (req.body.inviteCode) {
        if (req.body.inviteCode == doctorCode) {
            bcrypt.hash(password, 10).then((hash) => {
                doctor.create({
                    email: email,
                    password: hash,
                    firstName: firstName,
                    lastName: lastName,
                    doctor_name: firstName + " " + lastName,
                    city: city,
                    state: state,
                    birthdate: birthdate,
                    phone: '(609)240-7061'
                })
                .then(() => {
                    res.status(201).json({
                        status: "success",
                    })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        target: "email",
                        status: err.errors,
                    })
                })
            })
        } else if (req.body.inviteCode == writerCode) {
            bcrypt.hash(password, 10).then((hash) => {
                writer.create({
                    email: email,
                    password: hash,
                    firstName: firstName,
                    lastName: lastName,
                    city: city,
                    state: state,
                    birthdate: birthdate
                })
                .then(() => {
                    res.status(201).json({
                        status: "success",
                    })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        target: "email",
                        status: err.errors,
                    })
                })
            })
        } else {
            res.json({
                target: "inviteCode",
                status: "Invalid invite code!",
            })
        }
    } else {
        bcrypt.hash(password, 10).then((hash) => {
            user.create({
                email: email,
                password: hash,
                firstName: firstName,
                lastName: lastName,
                city: city,
                state: state,
                birthdate: birthdate
            })
            .then(() => {
                res.status(201).json({
                    status: "success",
                })
            })
            .catch((err) => {
                console.log(err)
                res.json({
                    target: "email",
                    status: err.errors,
                })
            })
        })
    }
})

// router.post("/", async (req, res) => {
//     // Express JSON middleware allows for results to be in body
//     const uniqueID = uuid()
//     try {
//         const userdata = await user.create({
            
//             user_id: uniqueID,
//             email: req.body.email,
//             password: req.body.password,
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             city: req.body.city,
//             state: req.body.state,
//             birthdate: req.body.birthdate,
//             role: req.body.role

//         })
//         console.log(userdata.dataValues)

//         if (req.body.role === "Doctor"){
//             doctorFullName = userdata.dataValues.firstName + " " + userdata.dataValues.lastName
//             console.log("what is this?",userdata.dataValues.firstName )
//             const specialtyArray = ['Cosmetic'];

//             const doctor = await doctorUser.create({

//                 doctor_id: uniqueID,
//                 doctor_name: doctorFullName,
//                 specialty: specialtyArray

//             })
//             console.log(doctor.dataValues)
//         }


//         res.status(201).json({
//             status: "success",
//             data: {

//                 email: req.body.email,
//                 password: req.body.password,
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 city: req.body.city,
//                 state: req.body.state,
//                 birthday: req.body.birthday,
//                 role: req.body.role

//             }
//         })
//     }
//     catch (err) {
//       console.log(err)
//     }
// });

module.exports = router;

