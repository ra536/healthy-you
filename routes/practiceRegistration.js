const express = require('express');
const router = express.Router();
const db = require('../db/index')
const register = require('../db/models/registration')

router.use(express.json());

router.get("/register", async (req, res) =>{
    try {
        const userResults = await register.findAll({
            raw: true
        });
        console.log(userResults);
        res.status(200).json({
          status: "success",
          data: testResults
        })
      } 
    catch (err) {
        console.error(err.message);
    }
});

router.post("/register", async (req, res) => {
    // Express JSON middleware allows for results to be in body
    try {
        const practiceInfo = await register.create({
            practiceID: req.body.practiceID,
            practiceName: req.body.practiceName,
            practiceUserName: req.body.practiceUserName,
            practicePassword: req.body.practicePassword,
            practiceDoctors: req.body.practiceDoctors,
        })
        
        const location = await register.create({
            PID: req.body.PID,
            userEmail: req.body.userEmail,
            address: req.body.address,
            userPhone: req.body.userPhone,
        })

        console.log(practiceInfo.dataValues)
        console.log(location.dataValues)

        res.status(201).json({
            status: "success",
            data: {
                practiceID: practiceInfo.dataValues.practiceID,
                practiceName: practiceInfo.dataValues.practiceUserName,
                practiceUserName: practiceInfo.dataValues.practiceUserName,
                practicePassword: practiceInfo.dataValues.practicePassword,
                practiceDoctors: practiceInfo.dataValues.practiceDoctors,
                PID: location.dataValues.PID,
                userEmail: location.dataValues.userEmail,
                address: location.dataValuesaddress,
                userPhone: location.dataValues.userPhone
            }
        })
    }
    catch (err) {
      console.log(err)
    }
});

module.exports = router;