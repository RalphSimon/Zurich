var viewportHeight = $(".about").offset().top;
var $button = $('a.icn');
var $cross = $('.icn--toggle');

$(document).ready(function() {
	$button.click(function(){
        $(this).toggleClass("open");
    }); 
});

$(document).scroll(function() {
	if($(this).scrollTop() > viewportHeight) {
		$button.addClass('contrast');
	} else {
		$button.removeClass('contrast');
	};
});