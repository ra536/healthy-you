import axios from 'axios';
require("dotenv").config();

export default axios.create({
    // Make sure you have the right server port
    baseURL: process.env.BASE_URL || "http://localhost:8080/api/v1/test",
});