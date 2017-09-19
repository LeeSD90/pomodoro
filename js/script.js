$(document).ready(function() {

	$("button").click(function(){

		var $elem = $(this);

		var oldBG = $elem.css('background-color');

		$elem.css('backgroundColor', '#f0eae2');

		setTimeout(function() {
		$elem.css('background-color', oldBG);
		}, 100); 
	});

});