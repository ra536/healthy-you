const express = require('express');
const cors = require("cors");
const path = require('path');

const app = express();

// Allows for two different domains to interact
app.use(cors());

if(process.env.NODE_ENV === "production"){
  // server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

// Database
const db = require('./db/index')

// routes
app.use("/api/v1/test", require('./routes/test'));
app.use("/api/v1/dashboard", require('./routes/dashboard'));
app.use("/api/v1/doctor", require('./routes/doctor'));
app.use("/api/v1/practice", require('./routes/practice'));
app.use("/api/v1/specialty", require('./routes/specialty'));
app.use("/api/v1/register/", require('./routes/register'));
app.use("/api/v1/login/", require('./routes/login'));
// app.use("/api/v1/user", require('./routes/user'));
app.use("/api/v1/search", require('./routes/search'));

// Test db connection
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log(err))

// Sync DBs
db.sync()
  .then(() => console.log("Models have been synced..."))
  .catch(err => console.log(err))

app.get('/*', (req, res) => {
  let url = path.join(__dirname, 'client/build', 'index.html');
  res.sendFile(url);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});