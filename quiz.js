const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinking Text Main Language"
    ],
    answer: 1 // Correct: Hyper Text Markup Language
  },
  {
    question: "What language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: 2 // Correct: CSS
  },
  {
    question: "CSS stands for:",
    options: [
      "Color Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Coding Style Sheet"
    ],
    answer: 1 // Correct: Cascading Style Sheets
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // Clear previous options

  q.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.textContent = optionText;
    button.className = "option-btn";
    button.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(button);
  });

  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const feedbackDiv = document.getElementById("feedback");

  if (selectedIndex === q.answer) {
    feedbackDiv.textContent = "✅ Correct!";
    feedbackDiv.style.color = "green";
    score++;
  } else {
    feedbackDiv.textContent = `❌ Incorrect! The correct answer was: ${q.options[q.answer]}`;
    feedbackDiv.style.color = "red";
  }

  // Disable all option buttons
  document.querySelectorAll(".option-btn").forEach(button => {
    button.disabled = true;
  });

  // Show the "Next" button
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    document.getElementById("next-btn").style.display = "none";
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: ${score} / ${questions.length}</p>
    <p>${score === questions.length ? "🎉 Excellent job!" : "Good effort! Try again to improve."}</p>
  `;
}

window.onload = function () {
  showQuestion();
  document.getElementById("next-btn").onclick = nextQuestion;
};
