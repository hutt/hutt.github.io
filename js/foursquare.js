function loadUserData(config){
	var data, url, xmlHttp;

	//VARS from config
	var callback = config.customCallback;

	url = 'https://api.jh0.eu/swarm?fetch=user';
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(data) {
    	if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
    		var niceAnswer = JSON.parse(xmlHttp.responseText)[0];
    		callback(niceAnswer);
    	}
  	}
}

function loadCheckins(config){
	var data, url, xmlHttp;

	//VARS from config
	var count = config.count;
	var callback = config.customCallback;

	if(count > 0 && count < 50){
		url = 'https://api.jh0.eu/swarm?fetch=checkins&count=' + count;
	    xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function(data) {
	    	if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    		var niceAnswer = JSON.parse(xmlHttp.responseText)[0];
	    		callback(niceAnswer);
	    	}
	  	}
	}

    xmlHttp.open( "GET", url, true );
    xmlHttp.send();
}
