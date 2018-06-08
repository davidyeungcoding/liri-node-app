// ==================
// || REQUIREMENTS ||
// ==================

require('dotenv').config();

// ===============
// || VARIABLES ||
// ===============

var keys = require('./keys.js');
var action = process.argv[3];

// ===============
// || FUNCTIONS ||
// ===============

function twitter(keys) {
    this.keys = keys;
};

function spotify(keys) {
    this.keys = keys;
};

// function myTweets() {
    
// };

// function spotifyThisSong() {

// };

// function movieThis() {

// };

// function doWhatItSays() {

// };

// =================
// || APPLICATOIN ||
// =================

// if (action === 'my-tweets') {
//     myTweets();
// }
// else if (action === 'spotify-this-song') {
//     spotifyThisSong();
// }
// else if (action === 'movie-this') {
//     movieThis();
// }
// else if (action === 'do-what-it-says') {
//     doWhatItSays();
// }


var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);
console.log(spotify);
console.log(client);

