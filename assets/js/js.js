var minutes = 0;
var seconds = 0;
var intervalId;
var correct = 0;
var incorrect = 0;
var totalQuestions = 10;
var timeSpent;

var percent = function percentCorrect(x, y) {
	var number = Math.round((x/y)*100);
	console.log(number);
	return number;
};

var gradeFunction = function() {
	var gradeResult;
	console.log(percent);
	if(percent >= 90) {
		gradeResult = "A";
	} else if((percent >= 80) && (percent <= 89)) {
		gradeResult = "B";
	} else if((percent >= 70) && (percent <= 79)) {
		gradeResult = "C";
	} else if((percent >= 60) && (percent <= 69)) {
		gradeResult = "D";
	} else {
		gradeResult = "F";
	};

	return gradeResult;
};;

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
		

		//inserting the grade you recieved into html
		var gradeString = "You recieved a " + gradeFunction();
		$("#grade").text(gradeString);


		//inputing amount of time into html
		timeSpent = "It took you " + minutes + " minutes and " + seconds + " seconds to complete the Thanksgiving Trivia!"
		$("#timeTaken").html(timeSpent);
		//calculating percentage of correct answers
		$("#totalPercent").html("You recieved " + percent(numberCorrect, totalQuestions) + "% on the quiz!");
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



// GRADE RETURNS UNDEFINED
// switch(grade) {
// 	case 'A': percent >= 90;
// 	break;

// 	case 'B': percent >= 80 && percent <= 89;
// 	break;

// 	case 'C': percent >= 70 && percent <= 79;
// 	break;

// 	case 'D': percent >= 60 && percent <= 69;
// 	break;

// 	default: 'F';
// };


// NEED TO RESET MINUTES
function totalTime() {
	seconds++;
	$("#seconds").html(seconds);	
		// if seconds is 60 add 1 to minutes
		if(seconds % 60 == 0) minutes++;
			// if seconds is 60 than reset seconds back to 0
			if(seconds == 60) {
				seconds = 0;
				$("#minutes").html(minutes);
		}
};

function pauseTimer() {
	clearInterval(intervalId);
};

function startTimer() {
	intervalId = setInterval(totalTime, 1000);
};

function resetGame() {
	minutes = -1;
    seconds = -1;
    totalTime();
    this.clearInterval(intervalId);
};
