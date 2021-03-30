const express = require("express");
const router = express.Router();
const db = require("../db/index");
const user = require("../db/models/user");
const doctor = require("../db/models/doctor");
const writer = require("../db/models/writer");
const bcrypt = require("bcrypt");

router.use(express.json());

const doctorCode = "doctor";
const writerCode = "writer";

router.post("/", async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    city,
    state,
    birthdate,
  } = req.body;
  if (req.body.inviteCode) {
    if (req.body.inviteCode == doctorCode) {
      bcrypt.hash(password, 10).then((hash) => {
        doctor
          .create({
            email: email,
            password: hash,
            firstName: firstName,
            lastName: lastName,
            doctor_name: firstName + " " + lastName,
            city: city,
            state: state,
            birthdate: birthdate,
            phone: "(609)222-2222",
          })
          .then(() => {
            res.status(201).json({
              status: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            res.json({
              target: "email",
              status: err.errors,
            });
          });
      });
    } else if (req.body.inviteCode == writerCode) {
      bcrypt.hash(password, 10).then((hash) => {
        writer
          .create({
            email: email,
            password: hash,
            firstName: firstName,
            lastName: lastName,
            city: city,
            state: state,
            birthdate: birthdate,
          })
          .then(() => {
            res.status(201).json({
              status: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            res.json({
              target: "email",
              status: err.errors,
            });
          });
      });
    } else {
      res.json({
        target: "inviteCode",
        status: "Invalid invite code!",
      });
    }
  } else {
    bcrypt.hash(password, 10).then((hash) => {
      user
        .create({
          email: email,
          password: hash,
          firstName: firstName,
          lastName: lastName,
          city: city,
          state: state,
          birthdate: birthdate,
        })
        .then(() => {
          res.status(201).json({
            status: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          res.json({
            target: "email",
            status: err.errors,
          });
        });
    });
  }
});

module.exports = router;
