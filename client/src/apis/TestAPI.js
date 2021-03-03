import axios from 'axios';
require("dotenv").config();

export default axios.create({
    // Make sure you have the right server port
    baseURL: "https://healthy-you-project.herokuapp.com/api/v1/test" || "http://localhost:8080/api/v1/test",
});