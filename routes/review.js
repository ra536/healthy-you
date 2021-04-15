const express = require("express");
const router = express.Router();
const { Sequelize, Op } = require("sequelize");
const review = require("../db/models/review");
const nodemailer = require("nodemailer");

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

router.post("/getAllInviteCodes", async (req, res) => {
    try {
        const results = await review.findAll({
            attributes: ['review_id'],
            where: {
                status: {
                    [Op.ne]: "COMPLETED",
                }
            }
        });
        res.status(200).json({
            status: "success",
            data: results,
        });
    } catch (err) {
        //
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

router.post("/leaveReview", async (req, res) => {
    try {
        const result = await review.findByPk(req.body.review_id);
        console.log("HERE@!J!!J!");
        console.log(result);
        result.name = req.body.name;
        result.full_review = req.body.review;
        result.overall_rating = req.body.overall;
        result.bedside_manner = req.body.bedside;
        result.wait_time = req.body.wait;
        result.availability = req.body.availability;
        result.status = "COMPLETED";

        await result.save();
    } catch (err){
        console.log(err);
    }
    res.status(200).json({
        status: "success",
    })
})

router.post("/sendInvite", async (req, res) => {
    console.log("IN SERVER, ", req.body.review_id, req.body.email);



    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <ra536@njit.edu>', // sender address
        to: "ra536@njit.edu, robeneutron@gmail.com", // list of receivers
        subject: "Hello there!", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


    res.status(200).json({
        status: "success",
    })
})

module.exports = router;