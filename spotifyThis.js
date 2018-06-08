var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new spotify(keys.spotify);

function spotifyThisSong(song) {
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

module.exports = spotifyThisSong;