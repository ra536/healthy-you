import axios from 'axios';

export default axios.create({
    // Make sure you have the right server port
    baseURL: "http://localhost:8080/api/v1/test",
});