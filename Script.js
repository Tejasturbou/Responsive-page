$('.hamburger_icon').click(function(evt){
	// evt.preventDefault();
	$('.nav').css('display', 'block');
});

$('main').click(function(evt){
	$('.nav').css('display', 'none');
});