$(document).ready(function(){
	$(".header__menu").on("click","a", function (event) {
		event.preventDefault();

		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});


$(document).ready(function(){
	$(".slider__content").on("click","a", function (event) {
		event.preventDefault();

		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});