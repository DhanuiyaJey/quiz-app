const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const questionNumber = document.getElementById("question-number");
const timerElement = document.getElementById("time");
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const container = document.querySelector(".container");
const playerNameInput = document.getElementById("player-name");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;
let playerName = "";

/* ✅ ONLY ONE CLICK HANDLER */
startButton.addEventListener("click", () => {
    playerName = playerNameInput.value.trim();

    if (!playerName) {
        alert("Please enter your name to start the quiz.");
        playerNameInput.focus();
        return;
    }

    startScreen.style.display = "none";
    container.style.display = "block";

    startQuiz();
});

/* START QUIZ */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("leaderboard-container").style.display = "none";

    nextButton.innerHTML = "Next";
    nextButton.onclick = null;

    showQuestion();
}

/* SHOW QUESTION */
function showQuestion() {
    resetState();

    let current = questions[currentQuestionIndex];

    questionElement.innerText = current.question;
    questionNumber.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    let progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + "%";

    current.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.innerText = ans.text;
        btn.classList.add("btn");

        if (ans.correct) btn.dataset.correct = true;

        btn.addEventListener("click", selectAnswer);
        answerButtons.appendChild(btn);
    });

    startTimer();
}

/* RESET */
function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
    clearInterval(timer);
    timeLeft = 10;
    timerElement.innerText = timeLeft;
}

/* ANSWER */
function selectAnswer(e) {
    const btn = e.target;
    const correct = btn.dataset.correct === "true";

    if (correct) {
        btn.style.background = "green";
        score++;
    } else {
        btn.style.background = "red";
    }

    Array.from(answerButtons.children).forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === "true") b.style.background = "green";
    });

    nextButton.style.display = "block";
    clearInterval(timer);
}

/* NEXT */
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

/* RESULT */
function showResult() {
    resetState();

    let percentage = Math.round((score / questions.length) * 100);

    questionElement.innerHTML = `
        <h2>🎉 ${playerName}</h2>
        <p>You scored <b>${score}/${questions.length}</b></p>
        <p>${percentage}%</p>
    `;

    document.getElementById("leaderboard-container").style.display = "block";

    saveScore(playerName, score);
    displayLeaderboard();

    nextButton.innerText = "Restart Quiz";
    nextButton.style.display = "block";
    nextButton.onclick = () => startQuiz();
}

/* LEADERBOARD */
function saveScore(name, score) {
    let data = JSON.parse(localStorage.getItem("leaderboard")) || [];

    data.push({ name, score });

    data.sort((a, b) => b.score - a.score);

    data = data.slice(0, 5);

    localStorage.setItem("leaderboard", JSON.stringify(data));
}

function displayLeaderboard() {
    const list = document.getElementById("leaderboard");
    list.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("leaderboard")) || [];

    if (data.length === 0) {
        list.innerHTML = "<li>No scores yet</li>";
        return;
    }

    data.forEach((item, i) => {
        list.innerHTML += `
            <li>
                ${i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : "⭐"}
                ${item.name} - ${item.score}
            </li>
        `;
    });
}

/* TIMER */
function startTimer() {
    timeLeft = 10;
    timerElement.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft <= 3) {
            timerElement.classList.add("warning");
        } else {
            timerElement.classList.remove("warning");
        }

        if (timeLeft === 0) {
            clearInterval(timer);
            autoNext();
        }
    }, 1000);
}

/* AUTO NEXT */
function autoNext() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}