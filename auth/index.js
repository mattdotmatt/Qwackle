// auth/index.js
(function (auth) {

  var data = require("../data");
  var hasher = require("./hasher");

  var passport = require("passport");
  var localStrategy = require("passport-local").Strategy;

  function userVerify(username, password, next) {
    data.getUser(username, function (err, user) {
      if (!err && user) {
        var testHash = hasher.computeHash(password, user.salt);
        if (testHash === user.passwordHash) {
          next(null, user);
          return;
        } 
      }
      next(null, false, { message: "Invalid Credentials." });
    });
  }

  auth.ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) { 
      next();
    } else {
      res.redirect("/login");
    }
  };

  auth.ensureApiAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.send(401, "Not authorized");
    }
  };

  auth.init = function (app) {

    // setup passport authentication
    passport.use(new localStrategy(userVerify));
    passport.serializeUser(function (user, next) {
      next(null, user.username);
    });
    passport.deserializeUser(function (key, next) {
      data.getUser(key, function (err, user) {
        if (err || !user) {
          next(null, false, { message: "Could not find user" });
        } else {
          next(null, user);
        }
      });
    });
    app.use(passport.initialize());
    app.use(passport.session());
  };

})(module.exports);