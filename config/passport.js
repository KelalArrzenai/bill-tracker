const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require("../models");
const userController = require('../controllers/userController');

passport.use(new LocalStrategy(
  function(email, password, done) {
   userController.find({email}).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;