const express = require('express');
const router = express.Router();
const db = require('../db/index')
const doctor = require('../db/models/doctor')

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


module.exports = router;