const express = require("express");

const router = express.Router();
const bcrypt = require("bcryptjs");
const user = require("../db/models/user");

router.use(express.json());

router.post("/create", async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    city,
    state,
    birthdate,
  } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    user
      .create({
        email,
        password: hash,
        firstName,
        lastName,
        city,
        state,
        birthdate,
      })
      .then(() => {
        res.status(201).json({
          status: "success",
        });
      })
      .catch((err) => {
        // console.log(err);
        res.json({
          status: err.errors,
        });
      });
  });
});

router.post("/findOne", async (req, res) => {
  try {
    const userResult = await user.findOne({
      where: {
        user_id: req.body.user_id,
      },
      raw: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        birthdate: userResult.birthdate,
        city: userResult.city,
        user_id: userResult.user_id,
        email: userResult.email,
        firstName: userResult.firstName,
        lastName: userResult.lastName,
        state: userResult.state,
        role: userResult.role,
      },
    });
  } catch (err) {
    // console.log(req.body);
    console.log(err);
    // console.log("THERE IS AN ERROR!");
  }
});

module.exports = router;
