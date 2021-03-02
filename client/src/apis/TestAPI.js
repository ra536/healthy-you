import axios from 'axios';

export default axios.create({
    // Make sure you have the right server port
    baseURL: process.env.BASE_URL,
});