require("dotenv").config();
const express = require("express");
const db = require("./db");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Example middleware
app.use((req, res, next) => {
  console.log("Middleware worked");
  next();
});

//Example route to get started
app.get("/register", (req, res) => {
  console.log("get all registration information")
});


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Healthy You!" });
});

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

