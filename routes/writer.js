const express = require('express');
const router = express.Router();
const db = require('../db/index')
const writers = require('../db/models/writer.js')

router.use(express.json());

router.post("/create", async (req, res) => {
    try {
        const users = await user.create({
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
            birthdate: req.body.birthdate
        })
        res.status(201).json({
            status: "success",
        })
    }
    catch (err) {
        console.log(err)
        res.json({
            status: err.errors,
        })
    }
});

module.exports = router;