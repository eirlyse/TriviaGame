
var Questions = ["Question One", "Question Two", "Question Three", "Question Four"];


// trying to get the objects with answer options to work 
// var triviaQuestions = [{
//     question: "Question One",
//     possibleAnswers: ["Answer One", "Answer two", "Answer three", "Answer four"],
//     answer: 3
// }, {
//     question: "Question Two",
//     possibleAnswers: ["Answer One", "Answer two", "Answer three", "Answer four"],
//     answer: 3

// }, {
//     question: "Question Three",
//     possibleAnswers: ["Answer One", "Answer two", "Answer three", "Answer four"],
//     answer: 3
// },{
//     question: "Question Four",
//     possibleAnswers: ["Answer One", "Answer two", "Answer three", "Answer four"],
//     answer: 3
// }];

var showQuestion;

// Count keeps track of the question
var count = 0;

// on click function to start and stop the game
$("#start-game").on("click", startGame);

$("#stop-game").on("click", stopGame);


//displays the question in the question-holder element
function displayQuestion() {
  $("#question-holder").html(`<h1> ${Questions[count]} </h1>`);
}

function nextQuestion() {

//increments to next question
  count++;

  //change the time to something more reasonable
  setTimeout(displayQuestion, 1000);


    // change this to a "game over" screen
  if(count === triviaQuestions.length){
    count = 0;
  }

}

function startGame() {

  showQuestion = setInterval(nextQuestion, 1000 * 3);


    //starts timer
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;

}

}
function stopGame() {


  clearInterval(showQuestion);

    //stops timer
  clearInterval(intervalId);
  clockRunning = false;


}

displayQuestion();

// this was still trying to figure out the object above
// $("#question-holder").text(JSON.stringify(triviaQuestions));

// **TIMER**

  

//   var intervalId;

//   var clockRunning = false;
//   var time = 0;
//   var lap = 1;
  
//   function reset() {
  
//     time = 0;
//     lap = 1;
  
//   $("#display").text("00:00");
  
//   };
  
  
//   function count() {
  
//     console.log(`count function is called`);
//     time++;

//     let timeConverted = timeConverter(time);

//     $("#display").text(timeConverted);
  
//   }
  

  
//   function timeConverter(t) {
  
//     //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);
  
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
  
//     if (minutes === 0) {
//       minutes = "00";
//     }
  
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
  
//     return minutes + ":" + seconds;
//   }


// timer alternative? please work lol 

var timeLeft = 10;
var increment;

function runTimer() {
	increment = setInterval(decrement, 1000);
};

function decrement() {
	timeLeft--;
	$("#time-left").html( timeLeft + " seconds");
	if (timeLeft === 0) {
		stopTimer();

	};
};

function resetTimer() {
	timeLeft = 10;
	$("#time-left").html("Time remaining: " + timeLeft + " seconds");
};


function stopTimer() {
	clearInterval(increment);
};