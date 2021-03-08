const router = require("express").Router();
const pool = require("../db/index");
const authorization = require("../middleware/authorization");


router.get("/", authorization, async (req, res) =>{
    try {
        //req.user has the payload
        //res.json(req.practiceUser)


        const user = await pool.query("SELECT practiceName FROM practiceUser WHERE practiceID = $1", [req.userID])
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }

})


module.exports = router;