$(document).ready(function(){
	$(".nav a").smoothScroll({
		offset: -$("nav").outerHeight()
	});
});