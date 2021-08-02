const express = require("express");

const router = express.Router();
const categories = require("../db/models/category");

router.use(express.json());

router.get("/findAll", async (req, res) => {
  try {
    const categoriesRes = await categories.findAll({
      raw: true,
      order: [
        ['category', 'ASC']
      ]
    });
    res.status(200).json({
      status: "success",
      data: categoriesRes,
    });
  } catch (err) {
      console.log(err.message);
  }
});

module.exports = router;
