const express = require('express');
const router = express.Router();
const db = require('../db/index')
const user = require('../db/models/user')

router.use(express.json());

// router.post("/create", async (req, res) => {
//     try {
//         if(req.body.practiceName != ""){
//             const practices = await practice.create({
//                 username: req.body.username,
//                 password: req.body.password,
//                 email: req.body.email,
//                 first_name: req.body.socialMedia,
//                 last_name: req.body.address,
//                 email: req.body.phone,
//                 city: req.body.fax,
//                 state: req.body.doctorID,
//                 birthdate: req.body.doctorID
//             })
//             console.log(practices.dataValues)
//             res.status(201).json({
//                 status: "success",
//                 // data: {
//                 //     practice_id: practices.dataValues.practice_id,
//                 //     name: practices.dataValues.name,
//                 //     location: practices.dataValues.location,
//                 //     website: practices.dataValues.website,
//                 //     social_media: practices.dataValues.social_media,
//                 //     address: practices.dataValues.address,
//                 //     phone: practices.dataValues.phone,
//                 //     fax: practices.dataValues.fax
//                 // }
//             })
//         }
//     }
//     catch (err) {
//       console.log(err)
//     }
// });

router.post("/create", async (req, res) => {
    try {
        const users = await user.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
            birthdate: req.body.birthdate
        })
        console.log(tests.dataValues)
        res.status(201).json({
            status: "success",
        })
    }
    catch (err) {
      console.log(err)
    }
});

module.exports = router;