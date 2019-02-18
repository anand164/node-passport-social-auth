// add this file to .gitignore

module.exports = {
    google: {
        clientID: "591307876438-4nmmm817vks785u467lo22kss40kqno2.apps.googleusercontent.com",
        clientSecret: "BagENe4LxG_PZ_qz2oFX7Aok",
        callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    },
    facebook: {
        clientID: "2177382489170799",
        clientSecret: "1074fbbd4519dce4f1fdf8270d895016",
        callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
    },
    mongodb: {
        dbURI: 'mongodb://anand:anand164@ds121373.mlab.com:21373/all_in_one_db'
    },
    github : {
        clientID: "e7b10decd2ed4ef13816",
        clientSecret: "bb073a53914d014f328de98ad9fe5a3cff366912",
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    },
    twitter : {
        consumerKey: "6S8eVf5LxTj6AFoWgDJFyW4dD ",
        consumerSecret: "jRS0csOFoxhUvD4uymtg1qDRSraXL1Q3qECQRnOVeBs6yfyvbr ",
        callbackURL: "http://127.0.0.1:4000/auth/twitter/callback"
    },
    session: {
        cookieKey: 'thenetninjaisawesomeiguess'
    }
};
