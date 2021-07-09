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

router.post("/delete", async (req, res) => {
    const delAd = await ad.findByPk(req.body.ad_id);
    await delAd.destroy();
    res.status(200).json({
        status: "success",
        data: delAd,
    })
})

router.post("/getAdsBySize", async (req, res) => {
    try {
		console.log("INSIDE getAdsBySize")
        const adResults = await ad.findAll({
		
          where: {
              type: req.body.size
          },
          raw: true,
        });
		console.log("adResults")
		console.log(adResults)
        // console.log(appointmentResults);
        res.status(200).json({
          status: "success",
          data: adResults,
        });
      } catch (err) {
        // console.error(err.message);
      } 
})

module.exports = router;
