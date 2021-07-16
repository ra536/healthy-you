const express = require("express");
const router = express.Router();
const db = require('../db/index')
const ad = require('../db/models/ad');
const { Op } = require("sequelize");

router.use(express.json());

// Used in admin portal to view all ads, so region filtering is not needed.
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

// Cannot ad region functionality until we insert a section to choose region for ad in admin portal.
// ADD REGION FUNCTIONALITY
router.post("/create", async (req, res) => {
    const newAd = await ad.create({
        type: req.body.size,
        ad_link: req.body.link,
        ad_image: req.body.image,
        //region: req.body.adRegion,
    });
    res.status(200).json({
        status: "success",
        data: newAd,
    })
})

// No need to add region functionality.
router.post("/delete", async (req, res) => {
    const delAd = await ad.findByPk(req.body.ad_id);
    await delAd.destroy();
    res.status(200).json({
        status: "success",
        data: delAd,
    })
})

// Chooses appropriate sized ad for page.
router.post("/getAdsBySize", async (req, res) => {
    try {
		console.log("INSIDE getAdsBySize")
        const adResults = await ad.findAll({
		
          where: {
              type: req.body.size,
              region: {
                  [Op.contains]: [req.body.region]
              }
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
