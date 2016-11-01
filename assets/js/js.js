//alert("Hi");

var counter = 0;
var intervalId;
var correct = 0;
var incorrect = 0;
var pointsCorrect = [];
var pointIncorrect = [];
var userClick = '';
var questionNumber;

$(document).ready(function(){
	$("#results").hide();
		$('#questions').addClass('hide');
	$('#startTrivia').on('click', function(){
		$('#questions').removeClass('hide');
		// $("#timer").counter();
	});

	//results will show after pushing submit
	$("#submit").on('click', function(){
		$("#results").show();
	});

	//timer starts after clicking start timer
	$('#startTimer').on('click', function(){
		intervalId = setInterval(totalTime, 1000);
	});

	//timer stops after clicking stop timer
	$("#stopTimer").on('click', function(){
		
	});


//get the number of correct... :checked is what the user checked
var numberCorrect = $('input[data-correct="correct"]:checked').length;
var numberIncorrect = 6 - numberCorrect;

	//puts in the html what questions were correct vs incorrect
	$('#correct').html(numberCorrect);
	$("#incorrect").html(numberIncorrect);
});



function totalTime() {
	counter++;
	$('#timer').html(counter);
};
