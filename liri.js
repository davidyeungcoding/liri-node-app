// ==================
// || REQUIREMENTS ||
// ==================

require('dotenv').config();
var movieThis = require('./omdb');
var spotifyThisSong = require('./spotifyThis');
var myTweets = require('./myTweets');
var keys = require('./keys.js');

// ===============
// || VARIABLES ||
// ===============

var action = process.argv[2];

// ===============
// || FUNCTIONS ||
// ===============

// =================
// || APPLICATOIN ||
// =================

if (action === 'my-tweets') {
    myTweets();
}
else if (action === 'spotify-this-song') {
    spotifyThisSong();
}
else if (action === 'movie-this') {
    movieThis();
}
else if (action === 'do-what-it-says') {
    doWhatItSays();
}