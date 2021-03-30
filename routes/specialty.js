const express = require("express");
const router = express.Router();
const db = require("../db/index");
const specialties = require("../db/models/specialty");

router.use(express.json());

//Test route to get started and gets all test objects from test table in db
router.get("/findAll", async (req, res) => {
  try {
    const specialtyResults = await specialties.findAll({
      raw: true,
    });
    //console.log(specialtyResults);
    res.status(200).json({
      status: "success",
      data: specialtyResults,
    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
