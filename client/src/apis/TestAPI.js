import axios from 'axios';

const host = process.env.HOST || "localhost";
const port = process.env.PORT || "8080";
console.log(host);
console.log(port);

export default axios.create({
    // Make sure you have the right server port
    baseURL: "http://" + host + ":" + port + "/api/v1/test",
});