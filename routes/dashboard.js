const express = require('express');
const router = express.Router();
const db = require('../db/index')
const practice = require('../db/models/practice')
const location = require('../db/models/location');
const doctor = require('../db/models/doctor');
const appointment = require('../db/models/appointment');
const { Op } = require("sequelize");

router.use(express.json());


doctor.belongsTo(practice, {
    foreignKey: 'practice_id',
    targetKey: 'practice_id'
});

practice.hasMany(doctor, {
    foreignKey: 'practice_id',
    sourceKey: 'practice_id'
});

// location.belongsTo(practice, {
//     foreignKey: 'practice_id',
//     targetKey: 'practice_id'
// });

// practice.hasMany(location, {
//     foreignKey: 'practice_id',
//     sourceKey: 'practice_id'
// });


router.get("/", async (req, res) => {
    try {
        const practiceResults = await practice.findAll({
            include: [
                { model: doctor}
            ]
        });
        console.log(practiceResults);
        res.status(200).json({
          status: "success",
          data: practiceResults
        })
    } 
    catch (err) {
        console.error(err.message);
    }
});

router.post("/add_practice", async (req, res) => {
    try {
        if(req.body.practiceName != ""){
            const practices = await practice.create({
                name: req.body.practiceName,
                location: req.body.location,
                website: req.body.website,
                social_media: req.body.socialMedia,
                address: req.body.address,
                phone: req.body.phone,
                fax: req.body.fax
            })
            console.log(practices.dataValues)
            res.status(201).json({
                status: "success",
                data: {
                    name: practices.dataValues.name,
                    location: practices.dataValues.location,
                    website: practices.dataValues.website,
                    social_media: practices.dataValues.social_media,
                    address: practices.dataValues.address,
                    phone: practices.dataValues.phone,
                    fax: practices.dataValues.fax
                }
            })
        }
    }
    catch (err) {
      console.log(err)
    }
});

router.post("/add_doctor", async (req, res) => {
    try {
        if(req.body.practiceName != "" && req.body.doctor != ""){
            const pid = await practice.findOne({
                where: {name: req.body.practiceName}
            });
            if(pid != null){
                //Array type to hold more than one specialty per doctor
                var specialties = [];
                specialties.push(req.body.specialty);
                const doctors = await doctor.create({
                    practice_id: pid.practice_id,
                    doctor_name: req.body.doctor,
                    rating: req.body.rating,
                    profile_picture: req.body.profilePic,
                    specialty: specialties,
                    bio: req.body.bio
                })
                console.log(doctors.dataValues)
                res.status(201).json({
                    status: "success",
                    data: {
                        practice_id: doctors.dataValues.practice_id,
                        doctor_name: doctors.dataValues.doctor_name,
                        rating: doctors.dataValues.rating,
                        profile_picture: doctors.dataValues.profilePic,
                        specialty: doctors.dataValues.specialty,
                        bio: doctors.dataValues.bio
                    }
                })
            }
        }
    }
    catch (err) {
      console.log(err)
    }
});

// (Location merged with practice table)
// router.post("/add_location", async (req, res) => {
//     try {
//         if(req.body.practiceName != "" && req.body.location != "" && req.body.phone != ""){
//             const pid = await practice.findOne({
//                 where: {name: req.body.practiceName}
//             });
//             if(pid != null){
//                 const locations = await location.create({
//                     practice_id: pid.practice_id,
//                     address: req.body.location,
//                     phone: req.body.phone,
//                 })
//                 console.log(locations.dataValues)
//                 res.status(201).json({
//                     status: "success",
//                     data: {
//                         practice_id: locations.dataValues.practice_id,
//                         address: locations.dataValues.address,
//                         phone: locations.dataValues.phone
//                     }
//                 })
//             }
//         }
//     }
//     catch (err) {
//       console.log(err)
//     }
// });

router.post("/query", async (req, res) => {
    try {
        var whereClause = {};
        if(req.body.practice != ""){
            whereClause['name']=req.body.practice;
            const pid = await practice.findOne({
                where: {name: req.body.practice}
            });
            const results = await practice.findAll({
                include: [
                    { model: doctor, where:{ practice_id: pid.practice_id} }
            ],
                where: {name: req.body.practice}
            });
            console.log(results);
            res.status(200).json({
                status: "success",
                data: results
            })
        }else{ // Returns all results if no input
            const results = await practice.findAll({
                include: [
                    { model: doctor }
                ]
            });
            console.log(results);
            res.status(200).json({
                status: "success",
                data: results
            })
        }
    } 
    catch (err) {
        console.error(err.message);
    }
});


module.exports = router;