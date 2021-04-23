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

module.exports = router;
