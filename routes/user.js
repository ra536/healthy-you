const express = require('express');
const router = express.Router();
const db = require('../db/index')
const user = require('../db/models/user')
router.use(express.json());

router.post("/create", async (req, res) => {
    try {
        const users = await user.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state,
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