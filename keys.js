console.log('this is loaded');

exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    acess_token_key: process.env.TWITTER_ACESS_TOKEN_KEY,
    acess_token_secret: process.env.TWITTER_ACESS_TOKEN_SECRET
};

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};