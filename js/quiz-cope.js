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
//Only question changes here
let questions = [
  "I've been turning to work or other activities to take my mind off things.",
  "I've been concentrating my efforts on doing something about the situation I'm in.",
  "I've been saying to myself \"this isn't real.\".",
  "I've been using alcohol or other drugs to make myself feel better.",
  "I've been getting emotional support from others.",
  "I've been giving up trying to deal with it.",
  "I've been taking action to try to make the situation better.",
  "I've been refusing to believe that it has happened.",
  "I've been saying things to let my unpleasant feelings escape.",
  "I’ve been getting help and advice from other people.",
  "I've been using alcohol or other drugs to help me get through it.",
  "I've been trying to see it in a different light, to make it seem more positive.",
  "I’ve been criticizing myself.",
  "I've been trying to come up with a strategy about what to do.",
  "I've been getting comfort and understanding from someone.",
  "I've been giving up the attempt to cope.",
  "I've been looking for something good in what is happening.",
  "I've been making jokes about it.",
  "I've been doing something to think about it less, such as going to movies, watching TV, reading, daydreaming, sleeping, or shopping.",
  "I've been accepting the reality of the fact that it has happened.",
  "I've been expressing my negative feelings.",
  "I've been trying to find comfort in my religion or spiritual beliefs.",
  "I’ve been trying to get advice or help from other people about what to do.",
  "I've been learning to live with it.",
  "I've been thinking hard about what steps to take.",
  "I’ve been blaming myself for things that happened.",
  "I've been praying or meditating.",
  "I've been making fun of the situation. "
];
let qImgSrc = [
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fwork.png?v=1608408538706",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope.png-2.png?v=1608412096685",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-12.png?v=1608412239351",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-10.png?v=1608412438138",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-1.png?v=1608412469666",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-3.png?v=1608413132276",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-14.png?v=1608412549142",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-8.png?v=1608412592995",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-6.png?v=1608412616893",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-11.png?v=1608412639933",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-4.png?v=1608412658363",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-15.png?v=1608412688222",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-5.png?v=1608412713438",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-1-7.png?v=1608412745454",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcoping-1.png?v=1608579195024",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-7.png?v=1608575840913",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-9.png?v=1608575919063",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-12.png?v=1608575883895",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-10.png?v=1608575960459",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-8.png?v=1608576039834",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-13.png?v=1608576066080",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-3.png?v=1608576113017",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-5.png?v=1608576152786",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-2.png?v=1608576179934",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-11.png?v=1608576200337",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-14.png?v=1608576032861",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcope-6.png?v=1608576245900",
  "https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fcoping-2.png?v=1608579183117"
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
let record = [];
let results = {};

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  if (runningQuestion == 0) {
    $("#question").hide(0, function() {
      $(this)
        .text(q)
        .fadeIn(500);
    });
    $("#qImg")
      .children()
      .attr("src", qImgSrc[runningQuestion]);
    $("#choices").fadeIn();
  } else {
    $("#question").fadeOut(250, function() {
      $(this)
        .text(q)
        .fadeIn(250);
    });
    $("#qImg")
      .children()
      .attr("src", qImgSrc[runningQuestion]);
    $("#choices").fadeIn();
  }

  //question.innerHTML = "<p>" + q.question + "</p>";
  /*
  $("#A").text(q.choiceA);
  $("#B").text(q.choiceB);
  $("#C").text(q.choiceC);
  $("#D").text(q.choiceD);
  */
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

// checkAnwer & proceed
var click = 0;
function checkAnswer(answer) {
  $("#choices").hide();
  //If you press too fast
  click++;
  //console.log(click);
  //LOGIC: if too many clicks detected, no excess clicks will be logged && directly proceed to result.
  if (click > lastQuestion + 1) {
    scoreRender();
  } else
    switch (answer) {
      case "A":
        record.push(1);
        break;
      case "B":
        record.push(2);
        break;
      case "C":
        record.push(3);
        break;
      case "D":
        record.push(4);
        break;
      default:
        console.log(`checkAnswerError`);
    }
  answerIsCorrect();

  //For one correct answer only
  /*if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        //answerIsWrong();
              answerIsCorrect();

    }*/
  //Timer reset
  //count = 0;

  //Change to next Q
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
/*function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}*/

// score render
function scoreRender() {
  //scoreDiv.style.display = "grid";
  $("#quiz").slideUp(function() {
    $("#scoreContainer").slideDown();
  });
  results[0] = ["Active coping", record[1] + record[6], "Positive"];
  results[1] = ["Use of emotional support", record[4] + record[14], "Positive"];
  results[2] = [
    "Use of instrumental support",
    record[9] + record[22],
    "Positive"
  ];
  results[3] = ["Positive reframing", record[11] + record[16], "Positive"];
  results[4] = ["Acceptance", record[19] + record[23], "Positive"];
  results[5] = ["Religion", record[21] + record[26], "Positive"];
  results[6] = ["Planning", record[13] + record[24], "Passive"];
  results[7] = ["Humor", record[17] + record[27], "Passive"];
  results[8] = ["Self-distraction", record[0] + record[18], "Maladaptive"];
  results[9] = ["Venting", record[8] + record[20], "Maladaptive"];
  results[10] = ["Denial", record[2] + record[7], "Maladaptive"];
  results[11] = ["Substance use", record[3] + record[10], "Maladaptive"];
  results[12] = [
    "Behavioral disengagement",
    record[5] + record[15],
    "Maladaptive"
  ];
  results[13] = ["Self-blame", record[12] + record[25], "Maladaptive"];

  let pos = 0;
  let neg = 0;
  let lists = "";
  for (var i = 0; i < Object.keys(results).length; i++) {
    lists +=
      '<tr class="' +
      results[i][2] +
      '" id="' +
      "table-row-" +
      i +
      '"><td>' +
      results[i][0] +
      "</td><td>" +
      results[i][1] +
      "/8</td></tr>";
    if (results[i][2] == "Maladaptive") {
      neg += results[i][1];
    } else {
      pos += results[i][1];
    }
  }

  $("tbody").html(lists);

  //Advices
  if (pos > neg * 1.25) {
    $("#advice").html(
      "<img src='https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fgood.png?v=1608407503908'><p>Our test shows that you are quite good at coping with stress. Keep at it!</p><p>See more ways to cope with stress here.</p><a class='qButton' id='adviceButton' href='resilience.html'>Go</a>"
    );
  } else {
    $("#advice").html(
      "<img src='https://cdn.glitch.com/726e922d-2bd0-40f6-8bfb-d1b76503d61b%2Fsad.png?v=1608407504922'><p>It seems that you are are having some hard time coping with stress.</p><p>You can get some tips for how to cope with stress below.</p><a class='qButton' id='adviceButton' href='resilience.html'>Go</a><p>You can also find organisations with people that can help you get through hard times.</p><a class='qButton' id='adviceButton' href='links.html'>Go</a>"
    );
  }
}
//aswered by the user
//const scorePerCent = Math.round(100 * score/questions.length);

// choose the image based on the scorePerCent

//scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
//$("#scoreNum").text(score);
//scoreDiv.innerHTML += "<p>" + score + "</p>";
