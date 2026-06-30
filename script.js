const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const questionNumber = document.getElementById("question-number");
const timerElement = document.getElementById("time");
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const container = document.querySelector(".container");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;

// Start quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Show question
function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    questionNumber.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Progress bar
    let progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = progress + "%";

    // Create answer buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = true;
        }

        button.addEventListener("click", selectAnswer);
    });

    startTimer();
}

// Reset
function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
    clearInterval(timer);
    timeLeft = 15;
    timerElement.innerText = timeLeft;
}

// Select answer
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.style.background = "green";
        score++;
    } else {
        selectedBtn.style.background = "red";
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.style.background = "green";
        }
    });

    nextButton.style.display = "block";
    clearInterval(timer);
}

// Next button
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Show result
function showResult() {
    resetState();
    questionElement.innerHTML = `🎉 You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";

    nextButton.onclick = startQuiz;
}

// Timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            autoNext();
        }
    }, 1000);
}

// Auto next when time ends
function autoNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Start first time
startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    container.style.display = "block";
    startQuiz();
});