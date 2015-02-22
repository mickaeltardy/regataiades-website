var headerStyleAdapter = function() {
	var lClassFrom = "";
	var lClassTo = "";
	if ($(window).scrollTop() > 0)
		lClassTo = "scrolled"
	else
		lClassFrom = "scrolled";

	$("header").switchClass(lClassFrom, lClassTo, 250, "easeInQuint");
	$("#nav-menu").switchClass(lClassFrom, lClassTo, 250, "easeInQuint");

};

var toggleMenu = function(){
	var lClassFrom = "";
	var lClassTo = "";
	if($("#nav-menu").is(':visible')){
		lClassFrom = "shown";
	}else{
		lClassTo = "shown"
	}

	$("#nav-menu").switchClass(lClassFrom, lClassTo, 250, "easeInQuint");
	
}

$(window).scroll(headerStyleAdapter);

$(document).ready(function() {
	$('.slider').slick({
		autoplay : false,
		autoplaySpeed : 1500,
		arrows : false,
		dots : true,
		fade : true
	});
});



$("#menu-toggle").click(toggleMenu);