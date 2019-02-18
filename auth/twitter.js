var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/User');
const config = require('../config')

passport.serializeUser(function (user, fn) {
  fn(null, user);
});

passport.deserializeUser(function (id, fn) {
  User.findOne({_id: id.doc._id}, function (err, user) {
    fn(err, user);
  });
});

passport.use(new TwitterStrategy({
    consumerKey     : config.twitter.consumerKey,
    consumerSecret  : config.twitter.consumerSecret,
    callbackURL     : config.twitter.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('ok ji');
    User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      
      
      if (err) {
        console.log(err); 
        return done(err);
      }
      done(null, user);
    });
  }
));

module.exports = passport;
