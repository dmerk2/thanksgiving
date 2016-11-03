var minutes = 0;
var seconds = 0;
var intervalId;
var correct = 0;
var incorrect = 0;
var totalQuestions = 10;
var timeSpent;

$(document).ready(function(){
	$("#results").addClass('hide');
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
		timeSpent = "It took you " + minutes + " minutes and " + seconds + " seconds to complete the Thanksgiving Trivia!"
		$("#timeTaken").html(timeSpent);
		//calculating percentage of correct answers
		$("#totalPercent").html("You got " + percentCorrect(numberCorrect, totalQuestions) + "% on the test!");
		//results will show after pushing submit
		$("#results").removeClass('hide');	
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
        $("#results").addClass('hide');
        $(".jumbotron").removeClass('hide');
        //clearing the checked radio buttons
    	$("input:checked").removeAttr("checked");
    });
});

// NOT GIVING CORRECT PERCENTAGE?
function percentCorrect(x, y) {
	return Math.round((x/y)*100);
};

// CAN'T FIGURE OUT HOW TO MAKE MINUTES INCREASE EVERY 60 SECONDS?
function totalTime() {
	seconds++;
	$("#seconds").html(seconds);	
		if(seconds % 5  == 0) minutes++;
			$("#minutes").html(minutes);
};

function pauseTimer() {
	clearInterval(intervalId);
};

// CAN'T FIGURE OUT HOW TO MAKE MINUTES INCREASE EVERY 60 SECONDS?
function startTimer() {
	intervalId = setInterval(totalTime, 1000);
};

function resetGame() {
    seconds = -1;
    totalTime();
    this.clearInterval(intervalId);
};
