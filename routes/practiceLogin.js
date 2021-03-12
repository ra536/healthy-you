const express = require('express');
const router = express.Router();
const db = require('../db/index')
const login = require('../db/models/registration')

router.use(express.json());

router.get("/", async (req, res) =>{
    try {
        const userResults = await login.findOne({
            raw: true
        });
        console.log("what's going on here?????")
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