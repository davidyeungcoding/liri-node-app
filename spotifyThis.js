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
        query: song,
        limit: 1
    };
    spotify.search(params, function(err, data) {
        if (!err) {
            var jsonData = data.tracks.items[0];
            console.log(JSON.stringify(`Artist: ${jsonData.album.artists[0].name}`, null, 2));
            console.log(JSON.stringify(`Song: ${jsonData.name}`, null, 2));
            console.log(JSON.stringify(`Preview Link: ${jsonData.album.external_urls.spotify}`, null, 2));
            console.log(JSON.stringify(`Album: ${jsonData.album.name}`, null, 2));
        }
    });
};

module.exports = spotifyThisSong;