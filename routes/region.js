const express = require("express");
const router = express.Router();
const region = require("../db/models/region");

router.use(express.json());

router.get("/findAll", async (req, res) => {
  try {
      //console.log("WITHIN REGION API")
    const regionsResult = await region.findAll({
      raw: true,
      order: [
        ['name', 'DESC']
      ]
    });
    res.status(200).json({
      status: "success",
      data: regionsResult,
    });
  } catch (err) {
	  console.error(err.message);
  }
});

router.post("/createRegion", async (req, res) => {
 try {
    const newRegion = await regions.create({
		name: req.body.name,
	});
	res.status(200).json({
        status: "success",
        data: newRegion,
    })
 }  catch (err) {
    console.error(err.message);
  }
});

module.exports = router;