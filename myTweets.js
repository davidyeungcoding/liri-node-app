var twitter = require('twitter');
var keys = require('./keys.js');
var client = new twitter(keys.twitter);

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

module.exports = myTweets;