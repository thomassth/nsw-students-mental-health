// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
  {
    question: "Feeling sad is a sign of weakness",
    imgSrc: "",
    choiceA: "True",
    choiceB: "False",
    correct: "B"
  },
  {
    question: "A healthy person does not include...",
    imgSrc: "",
    choiceA: "Physically healthy",
    choiceB: "Mentally healthy",
    choiceC: "Spiritually healthy",
    choiceD: "none of the above",
    correct: "D"
  }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
//const questionTime = 10; // 10s
//const gaugeWidth = 150; // 150px
//const gaugeUnit = gaugeWidth / questionTime;
//let TIMER;
let score = 0;
var click = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  if (runningQuestion == 0) {
    $("#question").hide(0, function() {
      $(this)
        .text(q.question)
        .fadeIn(500);
    });
  } else {
    $("#question").fadeOut(250, function() {
      $(this)
        .text(q.question)
        .fadeIn(250);
    });
  }

  //question.innerHTML = "<p>" + q.question + "</p>";

  $("#A").text(q.choiceA);
  $("#B").text(q.choiceB);
  if (q.choiceC) {
    $("#C").text(q.choiceC);
    $("#C").show();
  } else {
    $("#C").hide();
  }
  if (q.choiceD) {
    $("#D").text(q.choiceD);
    $("#D").show();
  } else {
    $("#D").hide();
  }
  $("#choices").fadeIn();
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  $("#preQ").hide();
  //start.style.display = "none";
  renderQuestion();
  quiz.style.display = "flex";
  renderProgress();
  //renderCounter();
  //TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress (green dots)
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    var display = qIndex;
    display++;
    progress.innerHTML +=
      "<div class='prog' id=" + qIndex + ">" + display + "</div>";
    $("#0").addClass("nowQ");
  }
}

// counter render (timer)
function renderCounter() {
  /*   if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }*/
}

// checkAnswer & proceed

function checkAnswer(answer) {
  $("#choices").hide();
  //If you press too fast
  click++;
  console.log(click);
  //LOGIC: if too many clicks detected, no excess clicks will be logged && directly proceed to result.
  if (click > lastQuestion + 1) {
    scoreRender();
  }
  //When every option has a score
  /* switch (answer) {
    case "A":
      break;
    case "B":
      score += 1;
      break;
    case "C":
      score += 2;
      break;
    case "D":
      score += 3;
      break;
    default:
      console.log(`checkAnswerError`);
  }
  answerIsCorrect(); */

  //For one correct answer only
  else if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  //Timer reset
  //count = 0;

  //Change to next Question
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
    $("#" + runningQuestion).addClass("nowQ");
  } else {
    // end the quiz and show the score
    //clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  $("#" + runningQuestion).removeClass("nowQ");
  document.getElementById(runningQuestion).classList.add("progGreen");
}

// answer is Wrong
function answerIsWrong() {
  $("#" + runningQuestion).removeClass("nowQ");
  document.getElementById(runningQuestion).classList.add("progRed");
}

// score render
function scoreRender() {
  //scoreDiv.style.display = "grid";
  $("#quiz").slideUp(function() {
    $("#scoreContainer").slideDown();
  });
  // calculate the amount of question percent answered by the user
  //const scorePerCent = Math.round(100 * score/questions.length);

  // choose the image based on the scorePerCent

  //scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
  $("#scoreNum").text(score);
  $("#qNum").text(lastQuestion + 1);
  //scoreDiv.innerHTML += "<p>" + score + "</p>";
}
//Restart without refresh
function restart() {
  $("#scoreContainer").hide();
  progress.innerHTML = "";
  runningQuestion = 0;
  count = 0;
  //const questionTime = 10; // 10s
  //const gaugeWidth = 150; // 150px
  //const gaugeUnit = gaugeWidth / questionTime;
  //let TIMER;
  score = 0;
  click = 0;
  startQuiz();
}
