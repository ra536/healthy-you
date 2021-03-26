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

modules.exports = { createUserToken, createDoctorToken, createWriterToken }