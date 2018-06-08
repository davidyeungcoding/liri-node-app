// ==================
// || REQUIREMENTS ||
// ==================

require('dotenv').config();
var request = require('request');
var twitter = require('twitter');

// ===============
// || VARIABLES ||
// ===============

var keys = require('./keys.js');
var action = process.argv[2];
var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

// ===============
// || FUNCTIONS ||
// ===============

function twitter(keys) {
    this.keys = keys;
};

function spotify(keys) {
    this.keys = keys;
};

function myTweets() {
    var params = {
        q: 'davidyeung20',
        result_type: 'recent',
        count: 20
    };
    client.get('search/tweets', params, function(error, tweets, response) {
    // client.get('statuses/update', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
};

// function spotifyThisSong() {

// };

// function movieThis() {

// };

// function doWhatItSays() {

// };

// =================
// || APPLICATOIN ||
// =================

if (action === 'my-tweets') {
    myTweets();
}
// else if (action === 'spotify-this-song') {
//     spotifyThisSong();
// }
// else if (action === 'movie-this') {
//     movieThis();
// }
// else if (action === 'do-what-it-says') {
//     doWhatItSays();
// }




