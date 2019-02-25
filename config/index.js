// add this file to .gitignore

module.exports = {
    google: {
        clientID: "<clientID>",
        clientSecret: "<clientSecret>",
        callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    },
    facebook: {
        clientID:  "<clientID>",
        clientSecret:  "<clientSecret>",
        callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
    },
    mongodb: {
        dbURI: '<dbURI>'
    },
    github : {
        clientID: "<clientID>",
        clientSecret: "<clientSecret>",
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    },
    twitter : {
        consumerKey: "<consumerKey>",
        consumerSecret: "<consumerSecret>",
        callbackURL: "http://127.0.0.1:4000/auth/twitter/callback"
    },
    session: {
        cookieKey: 'yoursecratekey'
    }
};
