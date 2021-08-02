const express = require("express");

const router = express.Router();
const writers = require("../db/models/writer.js");

router.use(express.json());

router.post("/create", async (req, res) => {
  try {
    const writerResult = await writers.create({
      password: req.body.password,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      state: req.body.state,
      birthdate: req.body.birthdate,

    });
    res.status(201).json({
      status: "success",
      data: writerResult.email,
    });
  } catch (err) {
    // console.log(err);
    res.json({
      status: err.errors,
    });
  }
});

router.post("/findOne", async (req, res) => {
  try {
    const writerResult = await writers.findOne({
      where: {
        writer_id: req.body.writer_id,
      },
      raw: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        birthdate: writerResult.birthdate,
        city: writerResult.city,
        writer_id: writerResult.doctor_id,
        email: writerResult.email,
        state: writerResult.state,
        articles: writerResult.articles,
        firstName: writerResult.firstName,
        lastName: writerResult.lastName,
      },
    });
  } catch (err) {
    // console.log(req.body);
    // console.log(err)
    // console.log("THERE IS AN ERROR!");
  }
});

router.get("/getAllWriters", async (req, res) => {
  try {
    const writerResult = await writers.findAll({
      raw: true
    });
    res.status(200).json({
      status: "success",
      data: writerResult

    });
  } catch (err) {
  }
});

module.exports = router;
