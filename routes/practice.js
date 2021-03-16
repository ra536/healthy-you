const express = require('express');
const router = express.Router();
const db = require('../db/index')
const practice = require('../db/models/practice')
const location = require('../db/models/location');
const doctor = require('../db/models/doctor');

router.use(express.json());

router.post("/create", async (req, res) => {
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