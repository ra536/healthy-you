const express = require("express");

const router = express.Router();
const insurances = require("../db/models/insurance");

router.use(express.json());

router.get("/findAll", async (req, res) => {
  try {
    const insuranceResults = await insurances.findAll({
      raw: true,
    });
    res.status(200).json({
      status: "success",
      data: insuranceResults,
    });
  } catch (err) {
      console.error(err.message);
  }
});

module.exports = router;
