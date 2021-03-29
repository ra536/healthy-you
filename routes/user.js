const express = require('express');
const router = express.Router();
const db = require('../db/index')
const user = require('../db/models/user')
const bcrypt = require('bcrypt')
router.use(express.json());

router.post("/create", async (req, res) => {
    const { email, password, firstName, lastName, city, state, birthdate } = req.body
    bcrypt.hash(req.body.password, 10).then((hash) => {
        user.create({
            email: email,
            password: hash,
            firstName: firstName,
            lastName: lastName,
            city: city,
            state: state,
            birthdate: birthdate
        })
        .then(() => {
            res.status(201).json({
                status: "success",
            })
        })
        .catch((err) => {
            console.log(err)
            res.json({
                status: err.errors,
            })
        })
    })
});

module.exports = router;