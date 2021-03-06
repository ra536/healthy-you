const express = require('express');
const router = express.Router();
const db = require('../db/index')
const doctor = require('../db/models/doctor')
const { Op } = require("sequelize");

router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const doctorResults = await doctor.findAll({
            raw: true
        });
        console.log(doctorResults);
        res.status(200).json({
          status: "success",
          data: doctorResults
        })
      } 
    catch (err) {
        console.error(err.message);
    }
});

router.post("/search", async (req, res) => {
  var whereClause = {};
  if(req.body.doctor_name != ""){
    whereClause['doctor_name']={[Op.substring]: req.body.doctor_name};
  }
  if(req.body.rating != ""){
    whereClause['rating']={[Op.gte]: req.body.rating};
  }
  try {
      const doctors = await doctor.findAll({
        raw: true,
        where: whereClause
      })
      console.log(doctors.dataValues)
      res.status(201).json({
          status: "success",
          data: doctors
      })
  }
  catch (err) {
    console.log(err)
  }
});



module.exports = router;