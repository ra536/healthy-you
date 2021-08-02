const express = require("express");

const router = express.Router();
const { Sequelize, Op } = require("sequelize");
const doctors = require("../db/models/doctor");
const featured = require("../db/models/featured");
const articles = require("../db/models/article");
const practice = require("../db/models/practice");
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

// FIXED
router.post("/findFeaturedDoctors", async (req, res) => {
    const doctorArray = [];
    const allOfType = await featured.findAll({
        attributes: ['item_id'],
        where: {
            type: "doctor",
        },
        raw: true,
    })
    for(i=0; i < allOfType.length; ++i){
        const newDoctor = await doctors.findByPk(allOfType[i].item_id);
        doctorArray.push(newDoctor);
    }
    // allOfType.forEach(async (obj) => {
    //     const newDoctor = await doctors.findByPk(obj.item_id);
    //     doctorArray.push(newDoctor.data.data);
    // })
    //console.log(doctorArray);
    res.status(200).json({
        status: "success",
        data: doctorArray,
    })
})

router.post("/findFeaturedDoctorsPractices", async (req, res) => {
    const typeArray = [];
    const allOfType = await featured.findAll({
        attributes: ['item_id'],
        where: {
            type: "doctor",
        },
        raw: true,
    });

    for(i=0; i < allOfType.length; ++i){
        typeArray.push(allOfType[i].item_id);
    }

    const doctorArray = await doctors.findAll({
        where: {
            doctor_id: {
                [Op.in]: typeArray
            }
        },
        include: {
            model: practice
        }
    })
    // allOfType.forEach(async (obj) => {
    //     const newDoctor = await doctors.findByPk(obj.item_id);
    //     doctorArray.push(newDoctor.data.data);
    // })
    //console.log(doctorArray);
    res.status(200).json({
        status: "success",
        data: doctorArray,
    })
})

router.post("/findFeaturedArticles", async (req, res) => {
    const articleArray = [];
    const allOfType = await featured.findAll({
        attributes: ['item_id'],
        where: {
            type: "article",
        },
        raw: true,
    })
    for(i=0; i < allOfType.length; ++i){
        const newArticle = await articles.findByPk(allOfType[i].item_id);
        articleArray.push(newArticle);
    }
    // allOfType.forEach(async (obj) => {
    //     const newDoctor = await doctors.findByPk(obj.item_id);
    //     doctorArray.push(newDoctor.data.data);
    // })
    //console.log(articleArray);
    res.status(200).json({
        status: "success",
        data: articleArray,
    })
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
