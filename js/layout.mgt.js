var headerStyleAdapter = function() {
	var lClassFrom = "";
	var lClassTo = "";
	if ($(window).scrollTop() > 0)
		lClassTo = "scrolled"
	else
		lClassFrom = "scrolled";

	$("header").switchClass(lClassFrom, lClassTo, 250, "easeInQuint");
	$("#nav-menu").switchClass($("#nav-menu").attr("class"), lClassTo, 250,
			"easeInQuint");

};

var toggleMenu = function() {
	var lClassFrom = "";
	var lClassTo = "";
	if ($("#nav-menu").is(':visible')) {
		lClassFrom = "shown";
	} else {
		lClassTo = "shown"
	}

	$("#nav-menu").switchClass(lClassFrom, lClassTo, 250, "easeInQuint");

}
var toggleLoginForm = function(pUrl) {
	$("input[name=goal]").val(pUrl);
	$("#loginFormContainer").toggle();
}

var tryToLogin = function() {
	var lUsername = $("input[name=username]").val();
	var lPassword = $("input[name=password]").val();
	var lGoal = $("input[name=goal]").val();
	try {
		$.ajax({
			type : "POST",
			url : sMetaData.serverUrl + "/login",
			data : {
				username : lUsername,
				password : lPassword
			}
			
		}).done(function(pData) {
			if (pData["status"] == "success") {
				window.location.href = lGoal;
			} else {
				toggleLoginForm("")
			}
		}).fail(function(){
			toggleLoginForm("");
		});
	} catch (e) {
		console.log(e)
	}
	return false;
}

$(window).scroll(headerStyleAdapter);

$(document).ready(function() {
	$('.slider').slick({
		autoplay : true,
		autoplaySpeed : 5000,
		arrows : false,
		dots : true
	});
});

$("#menu-toggle").click(toggleMenu);