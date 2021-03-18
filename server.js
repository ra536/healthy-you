const express = require('express');
const cors = require("cors");
const path = require('path');
var multer = require('multer');

const app = express();

// Allows for two different domains to interact
app.use(cors());

if(process.env.NODE_ENV === "production"){
  // server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Database
const db = require('./db/index')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "uploads");
  },
  filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
      cb(null, true);
  } else {
      cb(null, false);
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

// routes
app.use("/api/v1/test", require('./routes/test'));
app.use("/api/v1/dashboard", require('./routes/dashboard'));
app.use("/api/v1/doctor", require('./routes/doctor'));
app.use("/api/v1/practice", require('./routes/practice'));
app.use("/api/v1/specialty", require('./routes/specialty'));
app.use("/api/v1/user", require('./routes/user'));
app.use("/api/v1/article", require('./routes/article'));
app.use("/api/v1/writer", require('./routes/writer'));

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