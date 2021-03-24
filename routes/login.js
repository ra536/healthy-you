const express = require('express');
const router = express.Router();
const db = require('../db/index')
const user = require('../db/models/user');
const doctorUser = require('../db/models/doctor');

router.use(express.json());

router.get("/:id", async (req, res) =>{
    try {
        str = req.params.id
        const userInfo = str.split(' ');
        const username = userInfo[0];
        const password = userInfo[1];
        const userResults = await user.findOne({
           where:{
             email: username,
             password: password
           }, 
          raw: true
        });

        console.log("here is the user id", userResults); 
        uniqueID = userResults.user_id

        const doctorResults = await doctorUser.findOne({
            where:{
                doctor_id: uniqueID
            }, 
            raw: true
          });

        if ( userResults.role === "User" ){
        res.status(200).json({

          status: "success",
          data: userResults
        })
    }
    else{
        res.status(200).json({

            status: "success",
            data: doctorResults
          })
    }
      } 
    catch (err) {
        console.error(err.message);
    }
});

module.exports = router;