var counter = 0;
var intervalId;
var correct = 0;
var incorrect = 0;
var timeSpent;

$(document).ready(function(){
	$("#results").hide();
		$('#questions').addClass('hide');
	$('#startTrivia').on('click', function(){
		$('#questions').removeClass('hide');
		startTimer();
	});

	$("#submit").on('click', function(){
		$(".jumbotron").addClass('hide');
		$("#questions").addClass('hide');
		//get the number of correct... :checked is what the user checked
		var numberCorrect = $('input[data-correct="correct"]:checked').length;
		var numberIncorrect = 10 - numberCorrect;
		//puts in the html what questions were correct vs incorrect
		$('#correct').html(numberCorrect);
		$("#incorrect").html(numberIncorrect);
		timeSpent = "It took you " + counter + " seconds to complete the Thanksgiving Trivia!"
		$("#timeTaken").html(timeSpent);
		//results will show after pushing submit
		$("#results").show();
		//pauses timer
		pauseTimer();	
	});

	//timer pauses after clicking pause timer
	$("#pauseGame").on('click', function(){
		pauseTimer();
		$("#questions").addClass('hide');
	});

	//timer resets after clicking reset timer
	$('#restart').on('click', function(){
        resetGame();        
        $("#questions").addClass('hide');
        $("#questions").removeClass('hide');
        $("#results").addClass('hide');
        $(".jumbotron").removeClass('hide');
        //clearing the checked radio buttons
    	$("input:checked").removeAttr("checked");
    });
});

function totalTime() {
	counter++;
	$('#timer').html(counter);
};

function pauseTimer() {
	clearInterval(intervalId);
};

function startTimer() {
	intervalId = setInterval(totalTime, 1000);
};

function resetGame() {
    counter = -1;
    totalTime();
    this.clearInterval(intervalId);
};
