const express = require("express");

const router = express.Router();
const passport = require("passport");

router.use(express.json());

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // console.log(info);
    // console.log(user)
    if (!user) {
      res.json({
        target: info.target,
        status: info.message,
      });
    } else {
      req.login(user, (error) => {
        if (error) {
          return next(error);
        }
        // console.log(user.user_id);
        return res.json({ status: "success", user });
      });
    }
  })(req, res, next);
});

router.get("/user", (req, res) => {
  // console.log(req.user);
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("Successfully logged out!");
});

module.exports = router;