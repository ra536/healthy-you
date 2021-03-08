const jwt = require ("jsonwebtoken");
require('dotenv').config();


function jwtGenerator() {
    const payload = {
        practiceUserName:userID
    }

    return jwt.sign(payload, process.env.jwtSecret, {expires: "1hr"})
}

module.exports = jwtGenerator;