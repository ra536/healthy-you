const express = require("express");

const router = express.Router();
const bcrypt = require("bcryptjs");
const user = require("../db/models/user");
const doctor = require("../db/models/doctor");
const writer = require("../db/models/writer");

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
    if (req.body.inviteCode === doctorCode) {
      bcrypt.hash(password, 10).then((hash) => {
        doctor
          .create({
            email,
            password: hash,
            firstName,
            lastName,
            doctor_name: `${firstName} ${lastName}`,
            city,
            state,
            birthdate,
            phone: "(609)222-2222",
          })
          .then(() => {
            res.status(201).json({
              status: "success",
              role: "Doctor",
              email: "hello",
              hash,
            });
          })
          .catch((err) => {
            // console.log(err);
            res.json({
              target: "email",
              status: err.errors,
            });
          });
      });
    } else if (req.body.inviteCode === writerCode) {
      bcrypt.hash(password, 10).then((hash) => {
        writer
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
              role: "Writer",
            });
          })
          .catch((err) => {
            // console.log(err);
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
            role: "User",
          });
        })
        .catch((err) => {
          // console.log(err);
          res.json({
            target: "email",
            status: err.errors,
          });
        });
    });
  }
});

module.exports = router;
