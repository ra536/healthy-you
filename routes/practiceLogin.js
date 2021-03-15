const express = require('express');
const router = express.Router();
const db = require('../db/index')
const login = require('../db/models/registration')

router.use(express.json());

router.get("/:id", async (req, res) =>{
    try {
        str = req.params.id
        const userInfo = str.split(' ');
        const username = userInfo[0];
        const password = userInfo[1];
        const userResults = await login.findOne({
           where:{
             practiceUserName: username,
             practicePassword: password
           }, 
          raw: true
        });
        console.log(userResults);
        res.status(200).json({
          status: "success",
          data: userResults
        })
      } 
    catch (err) {
        console.error(err.message);
    }
});

module.exports = router;