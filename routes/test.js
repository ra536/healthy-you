const express = require('express');
const router = express.Router();

//Test route to get started and gets all test objects from test table in db
router.get("/", async (req, res) => {
    test.findALL()
        .then((test) => {
            console.log(test);
        })
        .catch((err) => {
            console.log(err)
        })
});

// Route to create a test object in DB
router.post("/", async (req, res) => {
    // Express JSON middleware allows for results to be in body
    try {
        test.create({
            test_id: req.body.test_id,
            content: req.body.content
        })
        res.status(201).json({
            status: "success",
            data: {
            test: test.rows[0],
            }
        })
    }
    catch (err) {
      console.log(err)
    }
});

module.exports = router;