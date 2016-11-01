//alert("Hi");

var timeRemaining = 6;
var intervalId;
var timerReset = clearInterval();

$(document).ready(function(){
	$('#start').click(function(){
		$('#questions').addClass('hide');
	});
});

	$('#timer').click(function(){
		restart();
	})

clearInterval();
intervalId = setInterval(showTimeLeft, 1000);


function showTimeLeft() {
	timeRemaining--;
	$('#timer').html(timeRemaining);
		//if(timeRemaining === 0) {
			prompt("Time Up! Would you like to try again? (yes or no)");
				if (true) {
					restart();
				} else {
					alert("Hope to see you soon!");
				}
		}
};

function restart() {
	window.clearTimeout(timerReset);
	timerReset = clearInterval();
};