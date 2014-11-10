$(document).ready(function(){
	var triggerBttn = document.getElementById( 'js-menu-trigger' )
	
	$('.js-menu-trigger').on('click touchstart', function(e){ 
		$('.js-menu').toggleClass('is-visible');
		$('.js-menu-screen').toggleClass('is-visible');
		e.preventDefault();
	});
	
	$('.js-menu-screen').on('click touchstart', function(e){
		$('.js-menu').toggleClass('is-visible');
		$('.js-menu-screen').toggleClass('is-visible');
		e.preventDefault();
	});
});
