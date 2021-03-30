const express = require('express');
const cors = require("cors");
const path = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('./db/models/user');
const doctor = require('./db/models/doctor');
const writer = require('./db/models/writer');
const bcrypt = require('bcrypt');
const flash = require('express-flash')
require('dotenv').config();

const app = express();

// Allows for two different domains to interact
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

if(process.env.NODE_ENV === "production"){
  // server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use(express.static('uploads'));
// app.use(fileUpload({
//   limits: {
//     fileSize: 5000000
//   },
//   abortOnLimit: true
// }));
app.use(express.json({
  limit: '5mb'
}));

// Database
const db = require('./db/index')

// Passport Config
app.use(flash());
passport.use(new LocalStrategy({
  usernameField: 'email',
  passReqToCallback: true
  },
  function(req, username, password, done) {
    if (req.body.role == "User") {
      user.findOne({
        where: {
          email: username
        }
      }).then(function (user) {
        if (!user) {
          return done(null, false, { target: "email", message: "Email does not exist!" })
        } else {
          const dbPassword = user.password
          bcrypt.compare(password, dbPassword).then((match) => {
            if (!match) {
              return done(null, false, { message: "Password is incorrect!" })
            } else {
                return done(null, user, { message: "success" })
            }
          })
        }
      })
    }
    else if (req.body.role == "Doctor") {
      doctor.findOne({
        where: {
          email: username
        }
      }).then(function (doctor) {
        if (!doctor) {
          return done(null, false, { target: "email", message: "Email does not exist!" })
        } else {
          const dbPassword = doctor.password
          bcrypt.compare(password, dbPassword).then((match) => {
            if (!match) {
              return done(null, false, { message: "Password is incorrect!" })
            } else {
                return done(null, doctor, { message: "success" })
            }
          })
        }
      })
    }
    else {
      writer.findOne({
        where: {
          email: username
        }
      }).then(function (writer) {
        if (!writer) {
          return done(null, false, { target: "email", message: "Email does not exist!" })
        } else {
          const dbPassword = writer.password
          bcrypt.compare(password, dbPassword).then((match) => {
            if (!match) {
              return done(null, false, { message: "Password is incorrect!" })
            } else {
                return done(null, writer, { message: "success" })
            }
          })
        }
      })
    }
  }
));
  // function(username, password, done) {
  //   user.findOne({
  //     where: {
  //       email: username
  //     }
  //   }).then(function (user) {
  //     if (!user) {
  //       doctor.findOne({
  //         where: {
  //           doctor_name: username
  //         }
  //       }).then(function (doctor) {
  //         if (!doctor) {
  //           writer.findOne({
  //             where: {
  //               email: username
  //             }
  //           }).then(function (writer) {
  //             if (!writer) {
  //               return done(null, false, { target: "email", message: "Email does not exist!" })
  //             } else {
                // const dbPassword = doctor.password
                // bcrypt.compare(password, dbPassword).then((match) => {
                //   if (!match) {
                //     return done(null, false, { message: "Password is incorrect!" })
                //   } else {
                //     return done(null, doctor, { message: "success" })
                //   }
                // })
  //             }
  //           })
  //         } else {
  //           const dbPassword = writer.password
  //           bcrypt.compare(password, dbPassword).then((match) => {
  //             if (!match) {
  //               return done(null, false, { message: "Password is incorrect!" })
  //             } else {
  //               return done(null, writer, { message: "success" })
  //             }
  //           })
  //         }
  //       })
  //     } else {
        // const dbPassword = user.password
        // bcrypt.compare(password, dbPassword).then((match) => {
        //   if (!match) {
        //     return done(null, false, { target: "password", message: "Password is incorrect!" })
        //   } else {
        //     return done(null, user, { message: "success" })
        //   }
  //       })
  //     }
  //   })
  // }

  
  // function(email, password, role, done) {
  //   if (role == "User") {
  //       user.findOne({ where: { email: email } }, function (err, user) {
  //       if (err) { return done(err); }
  //       if (!user) {
  //           return done(null, false, { target: "email", status: 'Incorrect username.' });
  //       }
  //       bcrypt.compare(password, user.password).then((match) => {
  //           if (!match) {
  //               return done(null, false, { target: "password", status: "Password is incorrect!" });
  //           }
  //       })
  //       // if (!user.validPassword(password)) {
  //       //     return done(null, false, { target: "password", status: "Password is incorrect!" });
  //       // }
  //       return done(null, user);
  //       });
  //   } else if (role == "Doctor") {
  //       doctor.findOne({ where: { email: email } }, function (err, doctor) {
  //           if (err) { return done(err); }
  //           if (!doctor) {
  //               return done(null, false, { target: "email", status: 'Incorrect username.' });
  //           }
  //           bcrypt.compare(password, doctor.password).then((match) => {
  //               if (!match) {
  //                   return done(null, false, { target: "password", status: "Password is incorrect!" });
  //               }
  //           })
  //           return done(null, doctor);
  //           });
  //   } else {
  //       writer.findOne({ where: { email: email } }, function (err, writer) {
  //           if (err) { return done(err); }
  //           if (!writer) {
  //               return done(null, false, { target: "email", status: 'Incorrect username.' });
  //           }
  //           bcrypt.compare(password, writer.password).then((match) => {
  //               if (!match) {
  //                   return done(null, false, { target: "password", status: "Password is incorrect!" });
  //               }
  //           })
  //           return done(null, writer);
  //           });
  //   }
  // }

passport.serializeUser(function(user, done) {
  // done(null, user.user_id)
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  // user.findOne({
  //   where: {
  //     'id': id
  //   }
  // }).then(function (user) {
  //   if (user == null) {
  //     done(new Error('Wrong user id.'))
  //   }
    
  //   done(null, user)
  // })
  done(null, user)
})

// Session Setup
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/api/v1/dashboard", require('./routes/dashboard'));
app.use("/api/v1/doctor", require('./routes/doctor'));
app.use("/api/v1/practice", require('./routes/practice'));
app.use("/api/v1/specialty", require('./routes/specialty'));
app.use("/api/v1/user", require('./routes/user'));
app.use("/api/v1/article", require('./routes/article'));
app.use("/api/v1/writer", require('./routes/writer'));
app.use("/api/v1/search", require('./routes/search'));
app.use("/api/v1/register/", require('./routes/register'));
app.use("/api/v1/login/", require('./routes/login'));

// app.use("/api/v1/image", require('./routes/image'));

// Code to upload/save files into 'uploads' folder -- maybe move this later
app.post('/upload', (req, res) => {
  if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
  }
      // accessing the file
  const myFile = req.files.file;
  console.log(myFile);
  console.log(path.extname(myFile.name));
  //  mv() method places the file inside public directory
  myFile.mv(`${__dirname}/uploads/${myFile.name}`, function (err) {
      if (err) {
          console.log(err)
          return res.status(500).send({ msg: "Error occured" });
      }
      // returing the response with file path and name
      return res.send({name: myFile.name, path: `/${myFile.name}`});
  });
})

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