function loadUserData(config){
	var data, url, xmlHttp;

	//VARS from config
	var callback = config.customCallback;

	url = 'https://api.jh0.eu/swarm?fetch=user';
   	xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(data) {
    	if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var answer = JSON.parse(xmlHttp.responseText)
    		var niceAnswer = answer[0];
    		callback(niceAnswer);
    	}
  	}
  	xmlHttp.withCredentials = true;
  	xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function loadCheckins(config){
	var data, url, xmlHttp;

	//VARS from config
	var count = config.count;
	var callback = config.customCallback;
	//Setup config.ignore with help of these references: https://developer.foursquare.com/categorytree 
	
	var vague = false;

	if(count > 0 && count < 50){
		url = 'https://api.jh0.eu/swarm?fetch=checkins&count=' + count;
	    xmlHttp = new XMLHttpRequest();
	    xmlHttp.withCredentials = false;
	    xmlHttp.onreadystatechange = function(data) {
	    	if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    		var answer = JSON.parse(xmlHttp.responseText)
	    		var niceAnswer = answer[0];
				if(typeof config.ignore === 'object'){
					for(var i = config.ignore.length - 1; i >= 0; i--) {
						var ignoreListItem = config.ignore[i];
						for(var i = niceAnswer.venue.categories.length - 1; i >= 0; i--) {
							var categoryItem = niceAnswer.venue.categories[i].name;
							if(ignoreListItem == categoryItem){
								vague = true;
							}
						}
					}
				}

    			if(vague){
					var checkin = {
						"venue": {
							"name": niceAnswer.venue.location.city,
							"location": {
								"neighborhood": '',
								"city": '',
								"cc": niceAnswer.venue.location.cc,
								"country": niceAnswer.venue.location.country,
								"state": niceAnswer.venue.location.state,
							},
							"categories": niceAnswer.venue.categories
						}
					}
				}else{
					var checkin = {
						"venue": {
							"name": niceAnswer.venue.name,
							"location": {
								"neighborhood": niceAnswer.venue.location.neighborhood,
								"city": niceAnswer.venue.location.city,
								"cc": niceAnswer.venue.location.cc,
								"country": niceAnswer.venue.location.country,
								"state": niceAnswer.venue.location.state,
							},
							"categories": niceAnswer.venue.categories
						}
					}
				}

	    		callback(checkin);
	    	}
	  	}
	}
	xmlHttp.withCredentials = true;
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
