require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const path = require("path");

const app = express();

// Allows for two different domains to interact
app.use(cors());

//Express JSON middleware
app.use(express.json());

if(process.env.NODE_ENV === "production"){
  // server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log(__dirname);

// Example middleware
app.use((req, res, next) => {
  console.log("Middleware worked");
  next();
});

//Test route to get started and gets all test objects from test table in db
//Try catch is needed for async await
app.get("/api/v1/test", async (req, res) => {
  try {
    const testResults = await db.query("SELECT * FROM test");
    console.log(testResults);
    res.status(200).json({
      status: "success",
      testResults: testResults.rows.length,
      data: {
        test: testResults.rows
      }
    })
  } 
  catch (err) {
    console.error(err.message);
  }
});

// Route to create a test object in DB
app.post("/api/v1/test", async (req, res) => {
  // Express JSON middleware allows for results to be in body
  // console.log(req.body);
  try{
    const testResults = await db.query(
      "INSERT INTO test (test_id, content) values ($1, $2) RETURNING *",
      [req.body.test_id, req.body.content])
    console.log(testResults)
    res.status(201).json({
      status: "success",
      data: {
        test: testResults.rows[0],
      }
    })
  }
  catch (err) {
    console.log(err)
  }
})

// catch-all method
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

