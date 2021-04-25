const express = require("express");

const router = express.Router();
const multer = require("multer");
const subscriber  = require("../db/models/subscriber.js");
const { Sequelize, Op } = require("sequelize");

router.use(express.json());

router.post("/", async (req, res) => {
    try {
        const {
            email,
            firstName,
            lastName,
          } = req.body;
        const subscriberResult = await subscriber.create({
            email: email,
            firstName: firstName,
            lastName: lastName,
        });
        res.status(200).json({
            status: "success",
            data: subscriberResult.email,
          });    
    } catch (error) {
        console.log(error.message)
    }
});

module.exports = router;