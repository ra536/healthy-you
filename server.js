const express = require('express');
const cors = require("cors");
const path = require('path');

// Database
const db = require('./db/index')
const { request } = require('http');

const app = express();

// test routes
app.use("/api/v1/test", require('./routes/test'));

// Test db connection
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log(err))

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});