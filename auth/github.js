var passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/User');
const config = require('../config')


passport.use(new GitHubStrategy({
  clientID        : config.github.clientID,
  clientSecret    : config.github.clientSecret,
  callbackURL     : config.github.callbackURL,
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({userid: profile.id}, {name: profile.displayName,userid: profile.id}, function (err, user) {
      return done(err, user);
    });
  }
));

module.exports = passport;
