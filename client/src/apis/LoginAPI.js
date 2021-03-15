import axios from 'axios';
require("dotenv").config();

export default axios.create({
    baseURL: "http://localhost:8080/api/v1/login/",
});