const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const review = require("../db/models/review");

router.use(express.json());

router.post("/findAllForDoctor", async (req, res) => {
    try {
        const reviewResults = await review.findAll({
            where: {
                doctor_id: req.body.doctor_id,
            },
            raw: true,
        });
        res.status(200).json({
            status: "success",
            data: reviewResults,
        });
    } catch (err) {
        // console.log(req.body);
        // console.log(err)
        // console.log("THERE IS AN ERROR!");
    }
});

router.post("/create", async (req, res) => {
    try {
        const newReview = await review.create({
            // review_id:
              doctor_id: req.body.doctor_id,
              status: "SENT"
        }).then(revObject => res.status(200).json({
            status: "success",
            review_id: revObject.review_id,
        }))
        // const review = newReview.review_id;
        // console.log(review);
        
    } catch (err){
        //
    }
})

module.exports = router;