const express = require("express");
const router = express.Router();
const db = require('../db/index')
const image = require('../db/models/image');
const { Op } = require("sequelize");

router.use(express.json());

router.post("/getAll", async (req, res) => {
    try {
        const imageResults = await image.findAll({
          raw: true,
        });
        // console.log(appointmentResults);
        res.status(200).json({
          status: "success",
          data: imageResults,
        });
      } catch (err) {
        // console.error(err.message);
      }
});

router.post("/create", async (req, res) => {
    const newImage = await image.create({
        category: req.body.category,
        image: req.body.image,
    });
    res.status(200).json({
        status: "success",
        data: newImage,
    })
})

router.post("/delete", async (req, res) => {
    const delImage = await image.findByPk(req.body.image_id);
    await delImage.destroy();
    res.status(200).json({
        status: "success",
        data: delImage,
    })
})

router.post("/getCategoryImage", async (req, res) => {
    try {
        const imageResult = await image.findOne({
          where: {
              category: req.body.category
          },
          raw: true,
        });
        // console.log(appointmentResults);
        res.status(200).json({
          status: "success",
          data: imageResult.image,
        });
      } catch (err) {
        // console.error(err.message);
      } 
})

module.exports = router;
