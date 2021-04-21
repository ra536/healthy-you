const express = require("express");

const router = express.Router();
const { Sequelize } = require("sequelize");
const featured = require("../db/models/featured");
const { isAuthAndDoctor } = require("../passport");

router.use(express.json());

router.post("/findAll", async (req, res) => {
  const allFeatured = await featured.findAll({
    raw: true,
  });
  res.status(200).json({
    status: "success",
    data: allFeatured,
  })
})

module.exports = router;
