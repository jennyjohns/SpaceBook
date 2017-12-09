module.exports = function (app) {
  var userModel = require("../../model/user/user.model.server");
  var passport  = require('passport');
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  var LocalStrategy = require('passport-local').Strategy;
  var bcrypt = require("bcrypt-nodejs");
  passport.use(new LocalStrategy(localStrategy));



  function serializeUser(user, done) {
    done(null, user);
  }
  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(function (user) {
          "use strict";
          done(null, user);
        },
        function (err) {
          "use strict";
          done(err, null);
        }
      );
  }

  // var multer = require('multer');
  // var upload = multer({ dest: __dirname + '/../../dist/assets/uploads'});

  app.get("/api/user/:uid", findUserById);
  app.get("/api/user", findUsers);
  app.post("/api/user", createUser);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);
  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedIn);

  // app.post("/api/upload", upload.single('myFile'), uploadProfilePicture);


  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(function (user) {
        if(user && bcrypt.compareSync(password, user.password)) {
          console.log('here I am');
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
  }


  function register(req, res) {
    "use strict";
    var newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password);
    userModel
      .createUser(newUser)
      .then(function(user) {
        req.login(user, function(err) {
          res.json(user);
        });
      });
  }

  function login(req, res) {
    res.json(req.user);
  }

  function loggedIn(req, res) {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }



  function findUserById(req, res) {
    var userId = req.params["uid"];
    userModel.findUserById(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      userModel.findUserByCredentials(username, password)
        .then(function (user) {
          res.json(user);
        });
      return;
    }
    else if (username) {
      userModel
        .findUserByUsername(username)
        .then(function (user) {
          res.json(user);
        });
      return;
    }
    res.json(users);
  }

  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(function (user) {
        res.json(user);
      });
  }

  function updateUser(req, res) {
    var userId = req.params['uid'];
    var updatedUser = req.body;
    userModel
      .updateUser(userId, updatedUser)
      .then(function (status) {
        res.json(status);
      });
  }

  function deleteUser(req, res) {
    var userId = req.params['uid'];
    userModel
      .deleteUser(userId)
      .then(function (status) {
        res.json(status);
      });
  }

  // function uploadProfilePicture(req, res) {
  //   var myFile = req.file;
  //   var userId = req.body.userId;
  //
  //   console.log('IN UPLOAD PROFILE IN SERVER.SERVICE');
  //
  //   var originalname = myFile.originalname;
  //   var filename = myFile.filename;
  //   var path = myFile.path;
  //   var destination = myFile.destination;
  //   var size = myFile.size;
  //   var mimetype = myFile.mimetype;
  //   var user1 = null;
  //   userModel
  //     .findUserById(userId)
  //     .then(function (user) {
  //       user1 = user;
  //       user['picture'] = '/assets/uploads/' + filename;
  //       userModel
  //         .updateUser(userId, user1)
  //         .then(function (usr) {
  //           console.log(usr);
  //           var callbackUrl =  '/user/' + userId;
  //           usr.save();
  //           res.redirect(callbackUrl);
  //         });
  //     });
  //
  // }
};
