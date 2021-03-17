const express = require('express');
const router = express.Router();
const db = require('../db/index')
const specialties = require('../db/models/specialty')

router.use(express.json());

//Test route to get started and gets all test objects from test table in db
router.get("/", async (req, res) => {
    try {
        const testResults = await test.findAll({
            raw: true
        });
        console.log(testResults);
        res.status(200).json({
          status: "success",
          data: testResults
        })
      } 
    catch (err) {
        console.error(err.message);
    }
});

// Route to create a test object in DB
router.post("/", async (req, res) => {
    // Express JSON middleware allows for results to be in body
    try {
        const tests = await test.create({
            test_id: req.body.test_id,
            content: req.body.content,
        })
        console.log(tests.dataValues)
        res.status(201).json({
            status: "success",
            data: {
                test_id: tests.dataValues.test_id,
                content: tests.dataValues.content
            }
        })
    }
    catch (err) {
      console.log(err)
    }
});

module.exports = router;