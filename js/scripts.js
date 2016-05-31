var lastTweetConfig = {
  "id": '737667496900169732',
  "domId": 'lastTweet',
  "maxTweets": 1,
  "enableLinks": true
};
twitterFetcher.fetch(lastTweetConfig);

function populateTpl(tweets){
  var element = document.getElementById('lastTweet');
  var html = '<ul>';
  for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
    var tweetObject = tweets[i];
    html += '<li>'
      + (tweetObject.image ? '<div class="tweet-img"><img src="'+tweetObject.image+'" /></div>' : '')
      + '<p class="tweet-content">' + tweetObject.tweet + '</p>'
      + '<p class="tweet-infos">am ' + tweetObject.time + ', von ' + tweetObject.author + '</p>'
      + '<p class="tweet-link"><a href="' + tweetObject.permalinkURL + '">Link</a></p>'
    + '</li>';
  }
  html += '</ul>';
  element.innerHTML = html;
}

function populateSwarmBox(){
  var lastCheckin = getLastCheckinData();
  
}
