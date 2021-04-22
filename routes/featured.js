const express = require("express");

const router = express.Router();
const { Sequelize } = require("sequelize");
const doctors = require("../db/models/doctor");
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

// BROKEN
router.post("/findFeaturedDoctors", async (req, res) => {
    const doctorArray = [];
    const allOfType = await featured.findAll({
        attributes: ['item_id'],
        where: {
            type: "doctor",
        },
        raw: true,
    })
    allOfType.forEach(async (obj) => {
        const newDoctor = await doctors.findByPk(obj.item_id);
        doctorArray.push(newDoctor);
    })
    console.log(doctorArray);
    res.status(200).json({
        status: "success",
        data: doctorArray,
    })
    // const doctorInfo = await doctors.findAll({
    //     include: {
    //         model: featured,
    //         where {
    //             item_id: Sequelize.col('doctors.doctor_id')
    //         },
    //     },
    // })

})


router.post("/create", async (req, res) => {
    const newFeatured = await featured.create({
        type: req.body.type,
        item_id: req.body.id,
    });
    res.status(200).json({
        status: "success",
        data: newFeatured,
    })
})

router.post("/delete", async (req, res) => {
    const deleteFeatured = await featured.findByPk(req.body.featured_id);
    await deleteFeatured.destroy();
    res.status(200).json({
        status: "success",
        data: deleteFeatured,
    })
})

module.exports = router;
