// sign_up.html

// check format valid or not
var sign_up_username_ok = "0";
var sign_up_password_ok = "0";
var sign_up_confirm_password_ok = "0";
var sign_up_name_ok = "0";
var sign_up_phone_ok = "0";
var sign_up_email_ok = "0";

// Submit button
function check_sign_up() {
	sign_up_username_value = document.getElementById("sign_up_username").value;
	sign_up_password_value = document.getElementById("sign_up_password").value;
	sign_up_confirm_password_value = document.getElementById("sign_up_confirm_password").value;
	sign_up_name_value = document.getElementById("sign_up_name").value;
	sign_up_phone_value = document.getElementById("sign_up_phone").value;
	sign_up_email_value = document.getElementById("sign_up_email").value;

	if (sign_up_username_value == "" || sign_up_username_value.length < 8 || sign_up_username_value.length > 20) {
		sign_up_username_invalid();
	} else {
		sign_up_username_valid();
	}

	if (sign_up_password_value == "" || sign_up_password_value.length < 8 || sign_up_password_value.length > 30) {
		sign_up_password_invalid();
	} else {
		sign_up_password_valid();
	}

	if (sign_up_confirm_password_value != sign_up_password_value || sign_up_confirm_password_value == "") {
		sign_up_confirm_password_invalid();
	} else {
		sign_up_confirm_password_valid();
	}

	if (sign_up_name_value == "") {
		sign_up_name_invalid();
	} else {
		sign_up_name_valid();
	}

	if (! /^[0-9]{8}$/.test(sign_up_phone_value)) {
		sign_up_phone_invalid();
	} else {
		sign_up_phone_valid();
	}
	
	if (! /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(sign_up_email_value)) {
		sign_up_email_invalid();
	} else {
		sign_up_email_valid();
	}

	if (sign_up_username_ok == "1" && sign_up_password_ok == "1" && sign_up_confirm_password_ok == "1" && sign_up_name_ok == "1" && sign_up_phone_ok == "1" && sign_up_email_ok == "1") {
		document.getElementById("sign_up_form").submit();
	}

}

function sign_up_username_invalid() {
	document.getElementById("sign_up_username").className = "form-control is-invalid";
	document.getElementById("sign_up_username_invalid").style.display = "inline-block";
	sign_up_username_ok = "0";
}

function sign_up_username_valid() {
	document.getElementById("sign_up_username").className = "form-control";
	document.getElementById("sign_up_username_invalid").style.display = "none";
	sign_up_username_ok = "1";
}

function sign_up_password_invalid() {
	document.getElementById("sign_up_password").className = "form-control is-invalid";
	document.getElementById("sign_up_password_invalid").style.display = "inline-block";
	sign_up_password_ok = "0";
}

function sign_up_password_valid() {
	document.getElementById("sign_up_password").className = "form-control";
	document.getElementById("sign_up_password_invalid").style.display = "none";
	sign_up_password_ok = "1";	
}

function sign_up_confirm_password_invalid() {
	document.getElementById("sign_up_confirm_password").className = "form-control is-invalid";
	document.getElementById("sign_up_confirm_password_invalid").style.display = "inline-block";
	sign_up_confirm_password_ok = "0";
}

function sign_up_confirm_password_valid() {
	document.getElementById("sign_up_confirm_password").className = "form-control";
	document.getElementById("sign_up_confirm_password_invalid").style.display = "none";
	sign_up_confirm_password_ok = "1";
}

function sign_up_name_invalid() {
	document.getElementById("sign_up_name").className = "form-control is-invalid";
	document.getElementById("sign_up_name_invalid").style.display = "inline-block";
	sign_up_name_ok = "0";
}

function sign_up_name_valid() {
	document.getElementById("sign_up_name").className = "form-control";
	document.getElementById("sign_up_name_invalid").style.display = "none";
	sign_up_name_ok = "1";
}

function sign_up_phone_invalid() {
	document.getElementById("sign_up_phone").className = "form-control is-invalid";
	document.getElementById("sign_up_phone_invalid").style.display = "inline-block";
	sign_up_phone_ok = "0";
}

function sign_up_phone_valid() {
	document.getElementById("sign_up_phone").className = "form-control";
	document.getElementById("sign_up_phone_invalid").style.display = "none";
	sign_up_phone_ok = "1";
}

function sign_up_email_invalid() {
	document.getElementById("sign_up_email").className = "form-control is-invalid";
	document.getElementById("sign_up_email_invalid").style.display = "inline-block";
	sign_up_email_ok = "0";
}

function sign_up_email_valid() {
	document.getElementById("sign_up_email").className = "form-control";
	document.getElementById("sign_up_email_invalid").style.display = "none";
	sign_up_email_ok = "1";
}

if (document.getElementById("sign_up_modal")) {
	// When user click the modal's close button
	document.getElementsByClassName("sign_up_modal_close")[0].onclick = function() {
		document.getElementById("sign_up_modal").style.display = "none";
	}

	// When user click anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == document.getElementById("sign_up_modal")) {
			document.getElementById("sign_up_modal").style.display = "none";
		}
	}
}

// sign_in.html

function login() {
	sign_in_username_value = document.getElementById("sign_in_username").value;
	sign_in_password_value = document.getElementById("sign_in_password").value;

	if (sign_in_username_value == "") {
		sign_in_username_invalid();
	} else {
		sign_in_username_valid();
	}

	if (sign_in_password_value == "") {
		sign_in_password_invalid();
	} else {
		sign_in_password_valid();
	}

	if (sign_in_username_valid != "" && sign_in_password_value != "") {
		document.getElementById("sign_in_form").submit();
	}
}

function sign_in_username_invalid() {
	document.getElementById("sign_in_username").className = "form-control is-invalid";
	document.getElementById("sign_in_username_invalid").style.display = "inline-block";
}

function sign_in_username_valid() {
	document.getElementById("sign_in_username").className = "form-control";
	document.getElementById("sign_in_username_invalid").style.display = "none";
}

function sign_in_password_invalid() {
	document.getElementById("sign_in_password").className = "form-control is-invalid";
	document.getElementById("sign_in_password_invalid").style.display = "inline-block";
}

function sign_in_password_valid() {
	document.getElementById("sign_in_password").className = "form-control";
	document.getElementById("sign_in_password_invalid").style.display = "none";
}

// Sign out

function sign_out() {
	location.replace("sign_out");
}

// my_account.html

var my_account_password_ok = "0";
var my_account_confirm_password_ok = "0";
var my_account_phone_ok ="0";

function my_account_check() {
	my_account_password_value = document.getElementById("my_account_password").value;
	my_account_confirm_password_value = document.getElementById("my_account_confirm_password").value;
	my_account_phone_value = document.getElementById("my_account_phone").value;

	if (my_account_password_value == "" || my_account_password_value.length < 8 || my_account_password_value.length > 30) {
		my_account_password_invalid();
	} else {
		my_account_password_valid();
	}

	if (my_account_confirm_password_value != my_account_password_value || my_account_confirm_password_value == "") {
		my_account_confirm_password_invalid();	
	} else {
		my_account_confirm_password_valid();
	}

	if (my_account_phone_value == "") {
		my_account_phone_valid();
	} else if (! /^[0-9]{8}$/.test(my_account_phone_value)) {
		my_account_phone_invalid();
	} else {
		my_account_phone_valid();
	}

	if (my_account_password_ok == "1" && my_account_confirm_password_ok == "1" && my_account_phone_ok == "1") {
		document.getElementById("my_account_form").submit();	
	}
}

function my_account_password_invalid() {
	document.getElementById("my_account_password").className = "form-control is-invalid";
	document.getElementById("my_account_password_invalid").style.display = "inline-block";
	my_account_password_ok = "0";
}

function my_account_password_valid() {
	document.getElementById("my_account_password").className = "form-control";
	document.getElementById("my_account_password_invalid").style.display = "none";
	my_account_password_ok = "1";
}

function my_account_confirm_password_invalid() {
	document.getElementById("my_account_confirm_password").className = "form-control is-invalid";
	document.getElementById("my_account_confirm_password_invalid").style.display = "inline-block";
	my_account_confirm_password_ok = "0";
}

function my_account_confirm_password_valid() {
	document.getElementById("my_account_confirm_password").className = "form-control";
	document.getElementById("my_account_confirm_password_invalid").style.display = "none";
	my_account_confirm_password_ok = "1";
}

function my_account_phone_invalid() {
	document.getElementById("my_account_phone").className = "form-control is-invalid";
	document.getElementById("my_account_phone_invalid").style.display = "inline-block";
	my_account_phone_ok ="0";
}

function my_account_phone_valid() {
	document.getElementById("my_account_phone").className = "form-control";
	document.getElementById("my_account_phone_invalid").style.display = "none";
	my_account_phone_ok ="1";
}

// online_booking.html

// Date = Today
if (document.getElementById("online_booking_date")) {
	document.getElementById("online_booking_date").valueAsDate = new Date();
}

// show differnce booking time on weekdays and weekends
function weekdays() {
	online_booking_date_value = document.getElementById("online_booking_date").value;
	online_booking_date_value_date = new Date(online_booking_date_value);

	switch (online_booking_date_value_date.getDay()) {
		case 0:
		case 6: 
			document.online_booking_form.online_booking_time.options.length = 0
			document.online_booking_form.online_booking_time.options[0] = new Option("12:00 - 13:00", "12:00 - 13:00", false, false);
			document.online_booking_form.online_booking_time.options[1] = new Option("12:30 - 13:30", "12:30 - 13:30", false, false);
			document.online_booking_form.online_booking_time.options[2] = new Option("13:00 - 14:00", "13:00 - 14:00", false, false);
			document.online_booking_form.online_booking_time.options[3] = new Option("13:30 - 14:30", "13:30 - 14:30", false, false);
			document.online_booking_form.online_booking_time.options[4] = new Option("18:00 - 19:00", "18:00 - 19:00", false, false);
			document.online_booking_form.online_booking_time.options[5] = new Option("18:30 - 19:30", "18:30 - 19:30", false, false);
			document.online_booking_form.online_booking_time.options[6] = new Option("19:00 - 20:00", "19:00 - 20:00", false, false);
			document.online_booking_form.online_booking_time.options[7] = new Option("19:30 - 20:30", "19:30 - 20:30", false, false);
			document.online_booking_form.online_booking_time.options[8] = new Option("20:00 - 21:00", "20:00 - 21:00", false, false);
			document.online_booking_form.online_booking_time.options[9] = new Option("20:30 - 21:30", "20:30 - 21:30", false, false);
			document.online_booking_form.online_booking_time.options[10] = new Option("21:00 - 22:00", "21:00 - 22:00", false, false);
			document.online_booking_form.online_booking_time.options[11] = new Option("21:30 - 22:30", "21:30 - 22:30", false, false);
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			document.online_booking_form.online_booking_time.options.length = 0
			document.online_booking_form.online_booking_time.options[0] = new Option("12:00 - 13:00", "12:00 - 13:00", false, false);
			document.online_booking_form.online_booking_time.options[1] = new Option("12:30 - 13:30", "12:30 - 13:30", false, false);
			document.online_booking_form.online_booking_time.options[2] = new Option("13:00 - 14:00", "13:00 - 14:00", false, false);
			document.online_booking_form.online_booking_time.options[3] = new Option("13:30 - 14:30", "13:30 - 14:30", false, false);
			document.online_booking_form.online_booking_time.options[4] = new Option("18:00 - 19:00", "18:00 - 19:00", false, false);
			document.online_booking_form.online_booking_time.options[5] = new Option("18:30 - 19:30", "18:30 - 19:30", false, false);
			document.online_booking_form.online_booking_time.options[6] = new Option("19:00 - 20:00", "19:00 - 20:00", false, false);
			document.online_booking_form.online_booking_time.options[7] = new Option("19:30 - 20:30", "19:30 - 20:30", false, false);
			document.online_booking_form.online_booking_time.options[8] = new Option("20:00 - 21:00", "20:00 - 21:00", false, false);
			document.online_booking_form.online_booking_time.options[9] = new Option("20:30 - 21:30", "20:30 - 21:30", false, false);
	}
}

var online_booking_number_of_guests_ok = "0";
var online_booking_date_ok = "0";
var online_booking_special_request_ok = "0";

function check_online_booking() {
	online_booking_number_of_guests_value = document.getElementById("online_booking_number_of_guests").value;
	online_booking_date_value = document.getElementById("online_booking_date").value;
	online_booking_time_value = document.getElementById("online_booking_time").value;
	online_booking_special_request_value = document.getElementById("online_booking_special_request").value;
	today = new Date();
	online_booking_date_value_date = new Date(online_booking_date_value);
	today_half_year_later = new Date();
	today_half_year_later.setMonth(today_half_year_later.getMonth()+6);

	if (online_booking_number_of_guests_value == "") {
		online_booking_number_of_guests_blank();
	} else if (! /^\d+$/.test(online_booking_number_of_guests_value) || online_booking_number_of_guests_value > 30 || online_booking_number_of_guests_value == 0) {
		online_booking_number_of_guests_invalid();
	} else {
		online_booking_number_of_guests_valid();
	}

	if (online_booking_date_value_date <= today || online_booking_date_value_date > today_half_year_later) {
		online_booking_date_invalid();
	} else {
		online_booking_date_valid();
	}

	if (online_booking_special_request_value.length > 200) {
		online_booking_special_request_invalid();
	} else {
		online_booking_special_request_valid();
	}

	if (online_booking_number_of_guests_ok == "1" && online_booking_date_ok == "1" && online_booking_special_request_ok == "1") {
		document.getElementById("online_booking_form").submit();
	}
}

function online_booking_number_of_guests_blank() {
	document.getElementById("online_booking_number_of_guests").className = "form-control is-invalid";
	document.getElementById("online_booking_number_of_guests_blank").style.display = "inline-block";
	document.getElementById("online_booking_number_of_guests_invalid").style.display = "none";
	online_booking_number_of_guests_ok = "0";
}

function online_booking_number_of_guests_invalid() {
	document.getElementById("online_booking_number_of_guests").className = "form-control is-invalid";
	document.getElementById("online_booking_number_of_guests_blank").style.display = "none";
	document.getElementById("online_booking_number_of_guests_invalid").style.display = "inline-block";
	online_booking_number_of_guests_ok = "0";
}

function online_booking_number_of_guests_valid() {
	document.getElementById("online_booking_number_of_guests").className = "form-control";
	document.getElementById("online_booking_number_of_guests_blank").style.display = "none";
	document.getElementById("online_booking_number_of_guests_invalid").style.display = "none";
	online_booking_number_of_guests_ok = "1";
}

function online_booking_date_invalid() {
	document.getElementById("online_booking_date").className = "form-control is-invalid";
	document.getElementById("online_booking_date_invalid").style.display = "inline-block";
	online_booking_date_ok = "0";
}

function online_booking_date_valid() {
	document.getElementById("online_booking_date").className = "form-control";
	document.getElementById("online_booking_date_invalid").style.display = "none";
	online_booking_date_ok = "1";
}

function online_booking_special_request_invalid() {
	document.getElementById("online_booking_special_request").className = "form-control is-invalid";
	document.getElementById("online_booking_special_request_invalid").style.display = "inline-block";
	online_booking_special_request_ok = "0";
}

function online_booking_special_request_valid() {
	document.getElementById("online_booking_special_request").className = "form-control";
	document.getElementById("online_booking_special_request_invalid").style.display = "none";
	online_booking_special_request_ok = "1";
}