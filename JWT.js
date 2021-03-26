require("dotenv").config();
const { sign, verify }= require('jsonwebtoken')

const createUserToken = (user) => {
    const accessToken = sign(
        { email: user.email, id: user.user_id },
        process.env.JWTSECRET
    );
    return accessToken
};

const createDoctorToken = (doctor) => {
    const accessToken = sign(
        { email: doctor.email, id: doctor.doctor_id },
        process.env.JWTSECRET
    );
    return accessToken
};

const createWriterToken = (writer) => {
    const accessToken = sign(
        { email: writer.email, id: writer.writer_id },
        process.env.JWTSECRET
    );
    return accessToken
};

const validateUserToken = (req, res, next) => {
    const accessToken = req.cookies["user-access-token"]
    if (!accessToken) {
        return (
            res.json({
                status: "User is not authenticated!"
            })
        )
    }
    try {
        const validToken = verify(accessToken, process.env.JWTSECRET)
        if (validToken) {
            req.authenticated = true
            return next();
        }
    }
    catch(err) {
        return (
            res.json({
                status: err
            })
        )
    }
}

module.exports = { createUserToken, createDoctorToken, createWriterToken, validateUserToken }