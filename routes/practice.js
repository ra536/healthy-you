const express = require('express');
const router = express.Router();
const db = require('../db/index')
const practice = require('../db/models/practice')
const location = require('../db/models/location');
const doctor = require('../db/models/doctor');

router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const practiceResults = await practice.findAll({
            raw: true
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

router.post("/", async (req, res) => {
    try {
        const practices = await practice.create({
            name: req.body.name,
            sum_rating: req.body.sum_rating,
        })
        console.log(practices.dataValues)
        res.status(201).json({
            status: "success",
            data: {
                name: practices.dataValues.name,
                sum_rating: practices.dataValues.sum_rating
            }
        })
    }
    catch (err) {
      console.log(err)
    }
});

module.exports = router;