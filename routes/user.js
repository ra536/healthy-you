const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");
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

module.exports = router;
