const questions = [
    {
        questions: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        questions: "Which is the biggest country in the world?",
        answers: [
            {text: "China", correct: false},
            {text: "USA", correct: false},
            {text: "Australia", correct: false},
            {text: "Russia", correct: true},
        ]
    },
    {
        questions: "In which year did WWII end?",
        answers: [
            {text: "1944", correct: false},
            {text: "1943", correct: false},
            {text: "1945", correct: true},
            {text: "1946", correct: false},
        ]
    },
    {
        questions: "Who won the World Cup in 1982?",
        answers: [
            {text: "Italy", correct: true},
            {text: "Western Germany", correct: false},
            {text: "Brazil", correct: false},
            {text: "Argentina", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
    nextButton.style.display = "none"; // Hide next button until an answer is clicked
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });
    nextButton.style.display = "block"; // Show the next button after an answer is selected
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // You can show the final score here
        alert("Quiz finished! Your score: " + score);
        startQuiz(); // Restart the quiz
    }
});

startQuiz();
