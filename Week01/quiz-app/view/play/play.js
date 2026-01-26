// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let defaultuQestions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
if (!localStorage.getItem("questions")) {
  localStorage.setItem("questions", JSON.stringify(defaultQuestions));
}
let questions = JSON.parse(localStorage.getItem("questions"));
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  // Render the current question
  renderQuestion();
  // Display the quiz view,
  hide(dom_start);
  hide(dom_score);
  show(dom_quiz);
}

function renderQuestion() {
  // Render the current question on the quiz view
  let question = questions[runningQuestionIndex];
  dom_question.textContent = question.title;
  dom_choiceA.textContent= question.choiceA;
  dom_choiceB.textContent= question.choiceB;
  dom_choiceC.textContent= question.choiceC;
  dom_choiceD.textContent= question.choiceD;
}
function checkAnswer(answer){
  onPlayerSubmit(answer);
}
function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  let q = questions[runningQuestionIndex];
  if (answer === q.correct) {
    score++;
  }
  let size = questions.length;
  if (runningQuestionIndex < size-1) {
    runningQuestionIndex++;
    renderQuestion();
  }
  else {
     renderSCore();
  }
}

function renderSCore() {
  // calculate the amount of question percent answered by the user
  let scoreSize = questions.length;
  let scorePerc = (score * 100) / scoreSize;
  // choose the image based on the scorePerCent
  localStorage.setItem("lastScore", score);
  localStorage.setItem("lastScorePercent", scorePerc.toFixed(0));
  let emoji='';
  if (scorePerc < 20) {
    emoji ='😭';
  }
  else if (scorePerc >= 20 && scorePerc <= 40) {
    emoji = '🥲';
  }
  else if (scorePerc >= 40 && scorePerc <= 60) {
    emoji = '🙂';
  }
  else if (scorePerc >= 60 && scorePerc <= 80) {
    emoji = '☺️';
  }
  else {
    emoji = '🥰';
  }

  hide(dom_question);
  let c=document.getElementById("choices");
  hide(c);
  show(dom_score);
  dom_score.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 80px; margin: 20px 0;">${emoji}</div>
      <div>Your Score is: ${scorePerc.toFixed(0)}%</div>
    </div>
  `
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
