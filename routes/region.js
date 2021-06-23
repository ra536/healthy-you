const express = require("express");
const router = express.Router();
const regions = require("../db/models/regions");

router.use(express.json());

router.get("/findAll", async (req, res) => {
  try {
    const regionsResult = await regions.findAll({
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