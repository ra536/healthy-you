const express = require("express");

const router = express.Router();
const practice = require("../db/models/practice");
const doctor = require("../db/models/doctor");
const { isAuthAndDoctor } = require("../passport");

router.use(express.json());

router.post("/create", isAuthAndDoctor, async (req, res) => {
  try {
    if (req.body.practiceName !== "") {
      const practices = await practice.create({
        name: req.body.practiceName,
        location: req.body.location,
        website: req.body.website,
        social_media: req.body.socialMedia,
        address: req.body.address,
        phone: req.body.phone,
        fax: req.body.fax,
        doctor_id: req.body.doctorID,
      });
      // console.log(practices.dataValues);
      res.status(201).json({
        status: "success",
        data: {
          practice_id: practices.dataValues.practice_id,
          name: practices.dataValues.name,
          location: practices.dataValues.location,
          website: practices.dataValues.website,
          social_media: practices.dataValues.social_media,
          address: practices.dataValues.address,
          phone: practices.dataValues.phone,
          fax: practices.dataValues.fax,
        },
      });
    }
  } catch (err) {
    // console.log(err);
  }
});

router.post("/remove", isAuthAndDoctor, async (req, res) => {
  try {
    if (req.body.practiceName !== "") {
      practice
        .findAll({
          where: {
            doctor_id: req.body.doctorID,
            location: req.body.location,
            name: req.body.practiceName,
          },
        })
        .then(() =>
          practice
            .destroy({
              where: {
                doctor_id: req.body.doctorID,
                location: req.body.location,
                name: req.body.practiceName,
              },
            })
            .then(() => {
              res.status(201).json({
                status: "success",
              });
            })
        );
    }
  } catch (err) {
    // console.log(err);
  }
});

router.post("/findAll", isAuthAndDoctor, async (req, res) => {
  try {
    const practiceResult = await practice.findAll({
      where: {
        doctor_id: req.body.doctor_id,
      },
      raw: true,
    });
    // console.log(`This is the body of the request!: ${req.body.doctor_id}`);
    res.status(200).json({
      status: "success",
      data: practiceResult,
    });
  } catch (err) {
    // console.log(err);
  }
});

practice.belongsTo(doctor, {
  targetKey: "doctor_id",
  foreignKey: "doctor_id",
});

module.exports = router;
