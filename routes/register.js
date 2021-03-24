const express = require('express');
const router = express.Router();
const db = require('../db/index')
const user = require('../db/models/user');
const doctorUser = require('../db/models/doctor');
const  { uuid } = require('uuidv4');

router.use(express.json());

router.post("/", async (req, res) => {
    // Express JSON middleware allows for results to be in body
    const uniqueID = uuid()
    try {
        const userdata = await user.create({
            
            user_id: uniqueID,
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
            birthdate: req.body.birthdate,
            role: req.body.role

        })
        console.log(userdata.dataValues)

        if (req.body.role === "Doctor"){
            doctorFullName = userdata.dataValues.firstName + " " + userdata.dataValues.lastName
            console.log("what is this?",userdata.dataValues.firstName )
            const specialtyArray = ['Cosmetic'];

            const doctor = await doctorUser.create({

                doctor_id: uniqueID,
                doctor_name: doctorFullName,
                specialty: specialtyArray

            })
            console.log(doctor.dataValues)
        }


        res.status(201).json({
            status: "success",
            data: {

                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                city: req.body.city,
                state: req.body.state,
                birthday: req.body.birthday,
                role: req.body.role

            }
        })
    }
    catch (err) {
      console.log(err)
    }
});

module.exports = router;

