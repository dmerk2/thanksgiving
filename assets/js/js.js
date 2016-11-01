var counter = 0;
var intervalId;
var correct = 0;
var incorrect = 0;

$(document).ready(function(){
	$("#results").hide();
		$('#questions').addClass('hide');
	$('#startTrivia').on('click', function(){
		$('#questions').removeClass('hide');
		startTimer();
	});

	$("#submit").on('click', function(){
		//get the number of correct... :checked is what the user checked
		var numberCorrect = $('input[data-correct="correct"]:checked').length;
		var numberIncorrect = 10 - numberCorrect;
		//puts in the html what questions were correct vs incorrect
		$('#correct').html(numberCorrect);
		$("#incorrect").html(numberIncorrect);
		//results will show after pushing submit
		$("#results").show();
		//stops timer
		pauseTimer();
	});

	//timer stops after clicking stop timer
	$("#stopTimer").on('click', function(){
		pauseTimer();
	});

	$('#reset').on('click', function(){
        resetTimer();
    });
});

function totalTime() {
	counter++;
	$('#timer').html(counter);
};

function pauseTimer() {
	this.clearInterval(intervalId);
};

function startTimer() {
	intervalId = setInterval(totalTime, 1000);
};

function resetTimer() {
	intervalId = window.clearInterval(intervalId);
	counter = 0;
};
