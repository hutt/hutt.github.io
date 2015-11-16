function handlePaste() {
	$('#gnupg').attr('rows', 10)
}

function resetForm() {
	$('#name').val("")
	$('#email').val("")
	$('#gpgform').val("")
	$('#gpgform').fadeOut(1000)
}

function checkFilled() {
	if($('#email').val() != ""){
		$('#gpgform').fadeIn(1000)
		stateToggle = true
	}
	if($('#email').val() == "" && stateToggle){
		$('#gpgform').fadeOut(1000)
		stateToggle = false
	}
}

function showTimeline() {
	$('#timeline').fadeIn(1000)
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&#]+)=([^&#]*)/gi, function(m,key,value) {
	vars[key] = value;
	});
	return vars;
}

var stateToggle = false

if(getUrlVars()['show'] == "error"){
	if(getUrlVars()['type'] == "name"){
		//name empty
		document.getElementById('status').innerHTML = 'Name fehlerhaft!'
	}else if (getUrlVars()['type'] == "email"){
		//email empty
		document.getElementById('status').innerHTML = 'E-Mail fehlerhaft!'
	}else if(getUrlVars()['type'] == "message"){
		//message empty
		document.getElementById('status').innerHTML = 'Nachricht fehlerhaft!'
	}else if (getUrlVars()['type'] == "gpg"){
		//GPG fehlerhaft
		document.getElementById('status').innerHTML = 'Dein GnuPG Key scheint fehlerhaft zu sein!'
	}else{
		document.getElementById('status').innerHTML = 'Error!'
	}
}else if(getUrlVars()['show'] == "success"){
	//success
	document.getElementById('status').innerHTML = 'Deine Nachricht wurde gesendet!'
}