console.log('The bot is starting');
var Twit=require('twit');
var config = require('./config');

var T = new Twit({
  consumer_key:         config.TWITTER_API_KEY,
  consumer_secret:      config.TWITTER_API_SECRET,
  access_token:         config.TWITTER_ACC_KEY ,
  access_token_secret:  config.TWITTER_ACC_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

T.get('search/tweets', { q: 'dolphin', count: 5 }, function(err, data, response) {
  //console.log(data)
  for(tw of data.statuses){
	console.log("---------------------");
	console.log(tw.text);
  }
});
 
 
T.post('statuses/update', { status: 'dolphin! #dolphin ' }, function(err, data, response) {
  console.log("posting done!");
  console.log(data);
});


