import axios from "axios";
require("dotenv").config();

export default axios.create({
    baseURL:
        process.env.REACT_APP_ARTICLE_URL || "http://localhost:8080/api/v1/region",
});
