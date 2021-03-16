const express = require('express');
const router = express.Router();
const db = require('../db/index')
const practice = require('../db/models/practice')
const location = require('../db/models/location');
const doctor = require('../db/models/doctor');
const appointment = require('../db/models/appointment');
const { Op } = require("sequelize");

router.use(express.json());


// doctor.belongsTo(practice, {
//     foreignKey: 'practice_id',
//     targetKey: 'practice_id'
// });

// practice.hasMany(doctor, {
//     foreignKey: 'practice_id',
//     sourceKey: 'practice_id'
// });

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