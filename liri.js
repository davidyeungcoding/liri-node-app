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
var omdb = new omdb(keys.omdb);

// ===============
// || FUNCTIONS ||
// ===============

function twitter(keys) {
    this.keys = keys;
};

function spotify(keys) {
    this.keys = keys;
};

function omdb(keys) {
    this.keys = keys;
}

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
    });
};

function movieThis() {
    if (process.argv.length > 3) {
        var movie = process.argv.slice(3).join('+');
    }
    else {
        var movie = 'mr+nobody';
    }
    var omdbKey = process.env.apikey;
    var queryURL = `http://www.omdbapi.com/?apikey=${omdbKey}&t=${movie}`
    request(queryURL, function(err, data, response) {
        var jsonData = JSON.parse(response);
        console.log('Title: ' + jsonData.Title + 
        '\nReleased Year: ' + jsonData.Year + 
        '\nIMDB Rating: ' + jsonData.Ratings[0].Value + 
        '\nRotten Tomatoes Rating: ' + jsonData.Ratings[1].Value + 
        '\nProduced In: ' + jsonData.Country + 
        '\nLanguage: ' + jsonData.Language + 
        '\nPlot: ' + jsonData.Plot + 
        '\nActors: ' + jsonData.Actors);
    });

};

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
else if (action === 'movie-this') {
    movieThis();
}
// else if (action === 'do-what-it-says') {
//     doWhatItSays();
// }




