const express = require("express");

const router = express.Router();
const { Sequelize } = require("sequelize");
const doctor = require("../db/models/doctor");
const { isAuthAndDoctor } = require("../passport");

router.use(express.json());

// Doctors should be able to:
// CREATE specialties, practices, appointments, bio
// READ everything in their dashboard
// UPDATE bio and maybe appointments, profile pictures
// DELETE specialties, practices, appointments,

router.post("/findDoctor", async (req, res) => {
  try {
    const doctorResult = await doctor.findAll({
      where: {
        doctor_id: req.body.doctor_id,
      },
      raw: true,
    });
    res.status(200).json({
      status: "success",
      data: doctorResult,
      user: req.user,
    });
  } catch (err) {
    console.log(req.body);
    //console.log(err)
    console.log("THERE IS AN ERROR!");
  }
});

router.post("/addSpecialty", isAuthAndDoctor, async (req, res) => {
  try {
    await doctor.update(
      {
        specialty: Sequelize.fn(
          "array_append",
          Sequelize.col("specialty"),
          req.body.specialty
        ),
      },
      {
        where: { doctor_id: req.body.doctor_id },
      }
    );
    // console.log(req.body);
    res.status(200).json({
      status: "success",
      data: {
        specialty: req.body.specialty,
        doctor_id: req.body.doctor_id,
      },
    });
  } catch (err) {
    // console.log(err);
  }
});

router.post("/removeSpecialty", isAuthAndDoctor, async (req, res) => {
  try {
    await doctor.update(
      {
        specialty: Sequelize.fn(
          "array_remove",
          Sequelize.col("specialty"),
          req.body.specialty
        ),
      },
      {
        where: { doctor_id: req.body.doctor_id },
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        specialty: req.body.specialty,
      },
    });
  } catch (err) {
    // console.log(err);
  }
});

router.post("/updateName", isAuthAndDoctor, async (req, res) => {
  try {
    await doctor.update(
      { doctor_name: req.body.name },
      { where: { doctor_id: req.body.doctor_id } }
    );
    // console.log(req.body);
    res.status(200).json({
      status: "success",
      data: {
        doctor_name: req.body.name,
        doctor_id: req.body.doctor_id,
      },
    });
  } catch (err) {
    // console.log(err);
  }
});

router.post("/updatePhone", isAuthAndDoctor, async (req, res) => {
  try {
    await doctor.update(
      { phone: req.body.phone },
      { where: { doctor_id: req.body.doctor_id } }
    );
    // console.log(req.body);
    res.status(200).json({
      status: "success",
      data: {
        phone: req.body.phone,
        doctor_id: req.body.doctor_id,
      },
    });
  } catch (err) {
    // console.log(err);
  }
});

router.post("/updateBio", isAuthAndDoctor, async (req, res) => {
  try {
    await doctor.update(
      { bio: req.body.bio },
      { where: { doctor_id: req.body.doctor_id } }
    );
    // console.log(req.body);
    res.status(200).json({
      status: "success",
      data: {
        bio: req.body.bio,
        doctor_id: req.body.doctor_id,
      },
    });
  } catch (err) {
    // console.log(err);
  }
});

router.post("/updateProfilePic", isAuthAndDoctor, async (req, res) => {
  try {
    await doctor.update(
      { profile_picture: req.body.image },
      { where: { doctor_id: req.body.doctor_id } }
    );
    // console.log(req.body)
    res.status(200).json({
      status: "success",
      data: {
        profile_picture: req.body.image,
        doctor_id: req.body.doctor_id,
      },
    });
  } catch (err) {
    // console.log(err);
  }
});

module.exports = router;
