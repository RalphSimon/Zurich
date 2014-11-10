var viewportHeight = $(".hero").height();
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
	} else if($button.hasClass('open')) {
		$button.removeClass('contrast');	
	} else {
		$button.removeClass('contrast');
	};
});