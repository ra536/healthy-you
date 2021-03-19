import axios from 'axios';

export default axios.create({
    // baseURL: process.env.REACT_APP_PRODUCTION_URL + "/api/v1/register/" || "http://localhost:8080/api/v1/register"
    baseURL: "http://localhost:8080/api/v1/register/"
})