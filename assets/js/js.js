//alert("Hi");

var counter = 0;
var intervalId;

$(document).ready(function(){
		$('#questions').addClass('hide');
	$('#start').click(function(){
		$('#questions').removeClass('hide');
		// $("#timer").counter();
	});
});

intervalId = setInterval(totalTime, 1000);

function totalTime() {
	counter++;
	$('#timer').html(counter);
};