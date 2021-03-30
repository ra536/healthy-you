const express = require("express");
const router = express.Router();
const db = require("../db/index");
const location = require("../db/models/location");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const locationResults = await location.findAll({
      raw: true,
    });
    console.log(locationResults);
    res.status(200).json({
      status: "success",
      data: locationResults,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const locations = await location.create({
      address: req.body.address,
      phone: req.body.phone,
    });
    console.log(locations.dataValues);
    res.status(201).json({
      status: "success",
      data: {
        address: locations.dataValues.address,
        phone: locations.dataValues.phone,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
