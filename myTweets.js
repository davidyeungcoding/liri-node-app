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
            for (var i = 0; i < 20; i++) {
                var tweetsData = tweets.statuses[i];
                console.log(`Created at: ${tweetsData.created_at}`);
                console.log(`Tweet: ${tweetsData.text}`);
                console.log('==========================================');
            }
        }
    });
};

module.exports = myTweets;