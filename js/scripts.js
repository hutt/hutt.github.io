twitterFetcher.fetch({
  "id": '737667496900169732',
  "domId": '',
  "maxTweets": 1,
  "enableLinks": false,
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
  "ignore": ["Home (private)", "Food", "Residence"]
});

// scaleText('tweet-body');

function showTweet(tweets){

  var element = document.getElementById('lastTweet');
  var tweetObject = tweets[0];

  var html = 
      '<ul class="twitter">'
       + '<li class="tweet-body">' + tweetObject.tweet + '</li>'
       + '<li class="tweet-info">' + '<a href="' + tweetObject.permalinkURL + '" target="_blank" rel="noopener noreferrer">' + tweetObject.time + '</a>' + '</li>'
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

function scaleText(id){

  var length = document.getElementsByClassName(id)[0].text().length;
  var newSize = 0;

  if(length < 80){
    newSize = 12;
  }else if(length >= 80 && length < 100){
    newSize = 11;
  }else if(length >= 100){
    newSize = 10;
  }

  document.getElementById(id).style.fontSize = newSize;

}
