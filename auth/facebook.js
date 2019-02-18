var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');
const config = require('../config')


passport.use(new FacebookStrategy({
    clientID        : config.facebook.clientID,
    clientSecret    : config.facebook.clientSecret,
    callbackURL     : config.facebook.callbackURL,
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({userid: profile.id}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

module.exports = passport;
