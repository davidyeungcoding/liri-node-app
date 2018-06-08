// ==================
// || REQUIREMENTS ||
// ==================

require('dotenv').config();
var request = require('request');
var twitter = require('twitter');
var spotify = require('node-spotify-api');

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
    client.get('search/tweets', params, function(err, tweets, response) {
        if (!err) {
            console.log(tweets);
        }
    });
};

function spotifyThisSong() {
    if (process.argv.length > 3) {
        var song = process.argv.slice(3).join('+');
    }
    else {
        var song = 'the+sign';
    }
    var params = {
        type: 'track',
        query: song
    };
    spotify.search(params, function(err, data) {
        if (!err) {
            console.log(data);
        }
    })
};

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
else if (action === 'spotify-this-song') {
    spotifyThisSong();
}
// else if (action === 'movie-this') {
//     movieThis();
// }
// else if (action === 'do-what-it-says') {
//     doWhatItSays();
// }




