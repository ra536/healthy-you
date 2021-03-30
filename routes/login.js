const express = require("express");
const router = express.Router();
const db = require("../db/index");
const user = require("../db/models/user");
const doctor = require("../db/models/doctor");
const writer = require("../db/models/writer");
const bcrypt = require("bcrypt");
const passport = require("passport");
const cookieParser = require("cookie-parser");

router.use(express.json());

router.post("/", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    console.log(info);
    //console.log(user)
    if (!user) {
      res.json({
        target: info.target,
        status: info.message,
      });
    } else {
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        console.log(user.user_id);
        return res.json({ status: "success" });
      });
    }
  })(req, res, next);
});

router.get("/user", (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

router.get("/logout", function (req, res) {
  req.logout();
  res.send("Successfully logged out!");
});

module.exports = router;
