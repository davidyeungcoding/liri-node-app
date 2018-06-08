var request = require('request');

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

module.exports = movieThis;