const express = require('express');
const router = express.Router();
const db = require('../db/index')
const practice = require('../db/models/practice')
const location = require('../db/models/location');
const doctor = require('../db/models/doctor');
const { isAuthAndDoctor } = require('../passport')

router.use(express.json());

router.post("/create", isAuthAndDoctor, async (req, res) => {
    try {
        if(req.body.practiceName != ""){
            const practices = await practice.create({
                name: req.body.practiceName,
                location: req.body.location,
                website: req.body.website,
                social_media: req.body.socialMedia,
                address: req.body.address,
                phone: req.body.phone,
                fax: req.body.fax,
                doctor_id: req.body.doctorID
            })
            console.log(practices.dataValues)
            res.status(201).json({
                status: "success",
                data: {
                    practice_id: practices.dataValues.practice_id,
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

router.post("/remove", isAuthAndDoctor, async (req, res) => {
    try {
        if(req.body.practiceName != ""){
            const practices = practice.findAll({
                where: {
                    doctor_id: req.body.doctorID,
                    location: req.body.location,
                    name: req.body.practiceName
                }
                }).then((result) => {
                    return practice.destroy({
                        where: {
                            doctor_id: req.body.doctorID,
                            location: req.body.location,
                            name: req.body.practiceName
                        }
                    })
                    .then((u) => {
                        res.status(201).json({
                            status: "success",
                        })
                    });
             });
        }
    }
    catch (err) {
      console.log(err)
    }
});

router.post("/findAll", isAuthAndDoctor, async (req, res) => {
    try {
        const practiceResult = await practice.findAll({
            where: {
                doctor_id: req.body.doctor_id
            },
            raw: true
        })
        console.log("This is the body of the request!: " + req.body.doctor_id)
        res.status(200).json({
            status: "success",
            data: practiceResult
        })
    }
    catch (err) {
      console.log(err)
    }
});

practice.belongsTo(doctor, {
    targetKey: 'doctor_id',
    foreignKey: 'doctor_id'
});

// router.get("/", async (req, res) => {
//     try {
//         const practiceResults = await practice.findAll({
//             raw: true
//         });
//         console.log(practiceResults);
//         res.status(200).json({
//           status: "success",
//           data: practiceResults
//         })
//     } 
//     catch (err) {
//         console.error(err.message);
//     }
// });

// router.post("/", async (req, res) => {
//     try {
//         const practices = await practice.create({
//             name: req.body.name,
//             sum_rating: req.body.sum_rating,
//         })
//         console.log(practices.dataValues)
//         res.status(201).json({
//             status: "success",
//             data: {
//                 name: practices.dataValues.name,
//                 sum_rating: practices.dataValues.sum_rating
//             }
//         })
//     }
//     catch (err) {
//       console.log(err)
//     }
// });

module.exports = router;