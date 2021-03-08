module.exports = function(req, res, next) {
    const {practiceName, practiceUserName, practicePassword, practiceDoctors, practiceAddress, practicePhone, practiceEmail} = req.body;
  
    function validEmail(practiceEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(practiceEmail);
    }
  
    if (req.path === "/register") {
      console.log(!practiceEmail.length);
      if (![practiceEmail, practiceUserName, practicePassword].every(Boolean)) {
        return res.json("Missing Credentials");
      } else if (!validEmail(practiceEmail)) {
        return res.json("Invalid Email");
      }
    } else if (req.path === "/login") {
      if (![practiceEmail, practicePassword].every(Boolean)) {
        return res.json("Missing Credentials");
      } else if (!validEmail(practiceEmail)) {
        return res.json("Invalid Email");
      }
    }
  
    next();
  };