var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');
const config = require('../config')


passport.use(new GoogleStrategy({
    clientID        : config.google.clientID,
    clientSecret    : config.google.clientSecret,
    callbackURL     : config.google.callbackURL,
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

module.exports = passport;
