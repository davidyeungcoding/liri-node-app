// ==================
// || REQUIREMENTS ||
// ==================

require('dotenv').config();
var movieThis = require('./omdb');
var fs = require('fs');
var spotifyThisSong = require('./spotifyThis');
var myTweets = require('./myTweets');
var keys = require('./keys.js');
var spotify = require('node-spotify-api');
var spotify = new spotify(keys.spotify);
var request = require('request');

// ===============
// || VARIABLES ||
// ===============

var action = process.argv[2];

// ===============
// || FUNCTIONS ||
// ===============

function doWhatItSays() {
    fs.readFile('random.txt', 'utf8', function(err, data) {
        if (!err) {
            var data = data.split(',');
            var action = data[0];
            var userQuery = data[1];
            if (action === 'my-tweets') {
                myTweets();
            }
            else if (action === 'spotify-this-song') {
                if (!userQuery) {
                    var userQuery = 'the+sign';
                }
                var params = {
                    type: 'track',
                    query: userQuery.trim()
                };
                spotify.search(params, function(err, data) {
                    if (!err) {
                        console.log(data);
                    }
                });
            }
            else if (action === 'movie-this') {
                if (!userQuery) {
                    var userQuery = 'mr+nobody';
                }
                var omdbKey = process.env.apikey;
                var queryURL = `http://www.omdbapi.com/?apikey=${omdbKey}&t=${userQuery.trim()}`
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
            }
        }
    });
};

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