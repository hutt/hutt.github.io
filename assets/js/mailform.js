/*
	 _           _   _   
	| |         | | | |  
	| |__  _   _| |_| |_ 
	| '_ \| | | | __| __|
	| | | | |_| | |_| |_ 
	|_| |_|\__,_|\__|\__|

	Mail Form Skript

*/

const form = document.getElementById('kontaktformular');

function resetForm () {
	form.elements.name = "";
	form.elements.email = "";
	form.elements.category.value = "blank";
	form.elements.copy.checked = true;
	form.elements.human.checked = false;
	form.elements.message = "";
}

function validateMailAddress (input) {
	const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if ( input.match(re) ) {
		return true;
	} else {
		return false;
	}
}

function validateForm () {
	if (form.elements.human.checked == true && form.elements.name.value != "" && validateMailAddress(form.elements.email.value) != "" && form.elements.message.value != ""){
		form.elements.submit.disabled = false;
	} else {
		form.elements.submit.disabled = true;
	}
}


// Validation bei KeyUp
form.addEventListener('keyup', function (event){
	validateForm();
});

// Validation bei Click
form.elements.human.addEventListener('click', function (event){
	validateForm();
});

// Validation bei Submit
$('#kontaktformular').submit(function (event) {
	var data = {
		'name': form.elements.name.value,
		'email': form.elements.email.value,
		'url': form.elements.url.value,
		'category': form.elements.category.value,
		'message': form.elements.message.value,
		'copy': form.elements.copy.checked,
		'human': form.elements.human.checked
	};

	// mit AJAX als POST zu mail.php schicken
	$.ajax({
		url: '/mail.php',
		data: data,
		type: 'POST',
		success: function (data) {
			// For Notification
			const formStatus = $("#formStatus");
			formStatus.show("slow");

			if(data.error){
				formStatus.find('.icon').addClass('fa-exclamation-circle');
				formStatus.find('.behind-icon').text(data.message);
			}else{
			    formStatus.find('.icon').addClass('fa-info-circle');
			    formStatus.find('.behind-icon').text(data.message);
			}
		}
	});
	event.preventDefault();
});
