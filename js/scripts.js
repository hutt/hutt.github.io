i18n();

twitterFetcher.fetch({
  "id": '737667496900169732',
  "domId": '',
  "maxTweets": 1,
  "enableLinks": true,
  "showUser": false,
  "showTime": true,
  "dateFunction": '',
  "showRetweet": false,
  "dataOnly": true,
  "showInteraction": false,
  "showPermalinks": true,
  "customCallback": showTweet
});

loadCheckins({
  "count" : 1, 
  "customCallback": showCheckin,
  "ignore": ["Residence", "Home (private)", "Food"]
});

function showTweet(tweets){

  var element = document.getElementById('lastTweet');
  var tweetObject = tweets[0];

  var html = 
      '<ul class="twitter">'
       + '<li class="tweet-body">' + tweetObject.tweet + '</li>'
  /**  + (tweetObject.image ? '<li class="tweet-image">' + '<img class="image" src="' + tweetObject.image + '" alt="' + tweetObject.tweet + '" />' + '</li>' : '') **/
       + '<li class="tweet-info">' + '<a href="' + tweetObject.permalinkURL + '" target="_blank">vor ' + tweetObject.time + '</a>' + '</li>'
    + '</ul>';

  element.innerHTML = html;
}

function showCheckin(checkin){

  var element = document.getElementById('lastCheckin');

  var html = 
          '<ul class="swarm">'
            + '<li class="checkin-name">' + checkin.venue.name + '</li>'
            + '<li class="checkin-location">' + (checkin.venue.location.neighborhood ? checkin.venue.location.neighborhood + ', ' : '') + (checkin.venue.location.city ? checkin.venue.location.city + ', ' : '') + (checkin.venue.location.neighborhood ? checkin.venue.location.cc : checkin.venue.location.country) + '</li>'
        + '</ul>';
    element.innerHTML = html;

}
