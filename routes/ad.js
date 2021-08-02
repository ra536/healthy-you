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
        res.status(200).json({
          status: "success",
          data: adResults,
        });
      } catch (err) {
        console.error(err.message);
      }
});

// Cannot ad region functionality until we insert a section to choose region for ad in admin portal.
// ADD REGION FUNCTIONALITY
router.post("/create", async (req, res) => {
    try {
        const newAd = await ad.create({
            type: req.body.size,
            ad_link: req.body.link,
            ad_image: req.body.image,
            region: req.body.region,
            categories: req.body.categories,
        });
        res.status(200).json({
            status: "success",
            data: newAd,
        });
    }   catch (err) {
        console.error(err.message);
    }
});

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
    //console.log("INSIDE getAdsBySize");
    try {
        //console.log("Inside the try of getAdsBySize");
        //console.log(typeof req.body.region);
        let region = req.body.region;
        //console.log(typeof region);
        //console.log(typeof [region]);
		const adResults = await ad.findAll({
          where: {
              type: req.body.size,
               region: {
                  [Op.contains]: [region]
               }
          },
          raw: true,
        });
		//console.log("ADRESULTS");
		//console.log(adResults);
		//console.log("adResults")
		//console.log(adResults)
        // console.log(appointmentResults);
        res.status(200).json({
          status: "success",
          data: adResults,
        });
      } catch (err) {
        //console.log("Inside the catch of get Ads by Size");
        console.error(err);
        console.error(err.message);
      } 
})

module.exports = router;
