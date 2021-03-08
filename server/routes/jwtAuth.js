const express = require('express');
const router = express.Router();
const pool = require("../db/index");
// const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
// const validinfo = require("../middleware/validinfo");
// const authorization = require("../middleware/authorization");


router.use(express.json());
//Creating a profile

router.post("/register", async(req , res) => {
    try {
        
        // Get account info (name, username, password, etc.)
        const practiceResults {practiceName, practiceUserName, practicePassword, practiceDoctors, practiceAddress, practicePhone, practiceEmail} = req.body;
        //Check if user exists (if they exist, error)
        const user = await pool.query('SELECT * FROM location WHERE userEmail = $1', [
            practiceEmail
        ]);
        res.status(200).send("pratice is" + req.body.practiceName);

        // if(user.rows.length !== 0){
        //     return res.status(401).send("User already exists!");
        // }

//         // res.status(200).send("password is" + practiceName);
//         //Encrpyt password
//         const saltRound = 10;
//         const salt = await bcrypt.genSalt(saltRound);

//         const bcryptPassword = await bcrypt.hash(practicePassword, salt);

//         //Put user in database
//         const newUser = await pool.query("INSERT INTO practiceUser (practiceName, practiceUserName, practicePassword, practiceDoctors) VALUES($1, $2, $3, $4) RETURNING *", [practiceName, practiceUserName, bcryptPassword, practiceDoctors]);
//         const PID = await pool.query("SELECT practiceID FROM practiceUser WHERE practiceUserName = $1", [practiceUserName]);
//         const newUserLocation = await pool.query("INSERT INTO location (PID, userEmail, address, userPhone) VALUES($1, $2, $3, $4) RETURNING *", [PID, practiceEmail, practiceAddress, practicePhone]);

//         res.json(newUser.rows[0]);
//         res.json(newUserLocation.rows[0]);

//         //Generate Json webtoken 
//         const token = jwtGenerator(newUser.rows[0].userID);
//         res.json([token]);


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// //Logging in
// router.post("/login", validinfo, async(req , res) => {
//     try {

//         //Breakdown of req.body
//         const {practiceEmail, practicePassword} = req.body;

//         //Check if user exists (if they don't exist, error)
//         const user = await pool.query("SELECT * FROM location WHERE userEmail = $1", [
//             practiceEmail
//         ]);

//         if(user.row.length === 0){
//             return res.status(401).json("Password or Email is incorrect");
//         }

//         //Check if password given the same as database password
//         //keep an eye on this 1
//         const validPassword = await bcrypt.compare(practicePassword, user.row[0].practicePassword);

//         if (!validPassword) {
//             return res.status(401).json("Password or Email is incorrect");
//         }

//         //Give jwt token
//         const token = jwtGenerator(user.row[0].practiceID);
        
//         res.json(token);
//     } catch (error) {
//         console.error(err.message);
//         res.status(500).send("Server Error")
//     }

// });

// router.get("is-verify", authorization, async(req, res) => {
//     try {
//         res.json(true);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Server Error");
//     }
// });
module.exports = router;
