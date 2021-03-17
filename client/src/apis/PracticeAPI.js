import axios from 'axios';
require("dotenv").config();

export default axios.create({
    // Make sure you have the right server port
    // production url "https://healthy-you-project.herokuapp.com/api/v1/test"
    baseURL: "http://localhost:8080/api/v1/practice",
});