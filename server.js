const express = require('express');
const cors = require("cors");
const path = require('path');

// Database
const db = require('./db/index')

const app = express();

// Test db connection
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log(err))

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});