import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_USER_URL || "http://localhost:8080/api/v1/user"
})