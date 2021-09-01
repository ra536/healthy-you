import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL:
    process.env.REACT_APP_ORDER_API || "http://localhost:8080/api/v1/order",
});
