const express = require("express");
const router = express.Router();
const db = require('../db/index')
const ad = require('../db/models/ad');
const { Op } = require("sequelize");

router.use(express.json());

router.post("/getAll", async (req, res) => {
    try {
        const adResults = await ad.findAll({
          raw: true,
        });
        // console.log(appointmentResults);
        res.status(200).json({
          status: "success",
          data: adResults,
        });
      } catch (err) {
        // console.error(err.message);
      }
});

router.post("/create", async (req, res) => {
    const newAd = await ad.create({
        type: req.body.size,
        ad_image: req.body.image,
        ad_link: req.body.link,
    });
    res.status(200).json({
        status: "success",
        data: newAd,
    })
})

module.exports = router;
