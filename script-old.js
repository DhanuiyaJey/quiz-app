// ===============================
// QUIZ VARIABLES
// ===============================

let currentCategory = "";
let currentQuestions = [];

let currentQuestionIndex = 0;
let score = 0;

let playerName = "";

let timer;
let timeLeft = 10;


// ===============================
// HTML ELEMENTS
// ===============================

const startScreen = document.getElementById("start-screen");

const quizContainer = document.querySelector(".container");

const leaderboardContainer =
document.getElementById("leaderboard-container");


const nameInput =
document.getElementById("player-name");


const categorySelect =
document.getElementById("category");


const startBtn =
document.getElementById("start-btn");


const questionNumber =
document.getElementById("question-number");


const question =
document.getElementById("question");


const answerButtons =
document.getElementById("answer-buttons");


const nextBtn =
document.getElementById("next-btn");


const timerDisplay =
document.getElementById("time");


const progressBar =
document.getElementById("progress-bar");


const leaderboard =
document.getElementById("leaderboard");


const homeBtn =
document.getElementById("home-btn");



// ===============================
// START QUIZ
// ===============================

startBtn.addEventListener("click", function(){


    playerName = nameInput.value.trim();


    currentCategory = categorySelect.value;



    if(playerName === ""){

        alert("Please enter your name");
        return;

    }



    if(currentCategory === ""){

        alert("Please select a category");
        return;

    }



    currentQuestions =
    questions[currentCategory];



    currentQuestionIndex = 0;

    score = 0;



    startScreen.style.display = "none";


    quizContainer.style.display = "block";


    leaderboardContainer.style.display = "none";


    showQuestion();


});





// ===============================
// SHOW QUESTION
// ===============================

function showQuestion(){


    clearInterval(timer);


    startTimer();



    answerButtons.innerHTML = "";



    let currentQuestion =
    currentQuestions[currentQuestionIndex];



    questionNumber.textContent =

    `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;



    question.textContent =
    currentQuestion.question;



    currentQuestion.answers.forEach(answer => {



        let button =
        document.createElement("button");



        button.classList.add("btn");



        // IMPORTANT FIX
        // Prevent <h1>, <img> becoming HTML

        button.textContent =
        answer.text;



        button.addEventListener("click", function(){


            checkAnswer(button, answer);


        });



        answerButtons.appendChild(button);



    });



    nextBtn.style.display="none";


    updateProgress();


}






// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(selectedButton, answer){


    clearInterval(timer);



    let buttons =
    document.querySelectorAll(".btn");



    buttons.forEach(button=>{


        button.disabled = true;


    });



    if(answer.correct){


        selectedButton.style.background =
        "#22c55e";


        selectedButton.style.color =
        "white";


        score++;


    }

    else{


        selectedButton.style.background =
        "#ef4444";


        selectedButton.style.color =
        "white";



        // Show correct answer

        buttons.forEach(button=>{


            let answerText =
            button.textContent;



            currentQuestions[currentQuestionIndex]
            .answers.forEach(correctAnswer=>{


                if(correctAnswer.correct &&
                   correctAnswer.text === answerText){


                    button.style.background =
                    "#22c55e";


                    button.style.color =
                    "white";


                }


            });



        });



    }



    nextBtn.style.display="block";


}






// ===============================
// NEXT BUTTON
// ===============================

nextBtn.addEventListener("click",function(){



    currentQuestionIndex++;



    if(currentQuestionIndex <
       currentQuestions.length){


        showQuestion();


    }

    else{


        endQuiz();


    }



});







// ===============================
// TIMER
// ===============================

function startTimer(){


    timeLeft = 10;


    timerDisplay.textContent =
    timeLeft;



    timer =
    setInterval(function(){


        timeLeft--;



        timerDisplay.textContent =
        timeLeft;



        if(timeLeft <= 3){

            timerDisplay.classList.add("warning");

        }



        if(timeLeft <=0){


            clearInterval(timer);



            disableButtons();


            nextBtn.style.display="block";


        }



    },1000);


}







// ===============================
// DISABLE BUTTONS
// ===============================

function disableButtons(){


    let buttons =
    document.querySelectorAll(".btn");


    buttons.forEach(button=>{


        button.disabled=true;


    });


}







// ===============================
// PROGRESS BAR
// ===============================

function updateProgress(){


    let progress =

    ((currentQuestionIndex) /
    currentQuestions.length) * 100;



    progressBar.style.width =
    progress + "%";


}







// ===============================
// END QUIZ
// ===============================

function endQuiz(){


    clearInterval(timer);



    quizContainer.style.display="none";


    leaderboardContainer.style.display="block";



    saveScore();


    displayLeaderboard();


}







// ===============================
// SAVE SCORE
// ===============================

function saveScore(){



    let scores =

    JSON.parse(localStorage.getItem("quizScores"))
    || [];



    scores.push({

        name: playerName,

        category: currentCategory,

        score: score,

        total: currentQuestions.length


    });



    scores.sort(function(a,b){

        return b.score - a.score;

    });



    localStorage.setItem(

        "quizScores",

        JSON.stringify(scores)

    );


}







// ===============================
// DISPLAY LEADERBOARD
// ===============================

function displayLeaderboard(){



    leaderboard.innerHTML="";



    let scores =

    JSON.parse(localStorage.getItem("quizScores"))
    || [];



    scores.slice(0,5).forEach(player=>{


        let li =
        document.createElement("li");



        li.textContent =

        `${player.name} - ${player.score}/${player.total} (${player.category})`;



        leaderboard.appendChild(li);


    });



}







// ===============================
// BACK TO HOME
// ===============================

if(homeBtn){


homeBtn.addEventListener("click",function(){


    leaderboardContainer.style.display="none";


    startScreen.style.display="block";


    nameInput.value="";


    categorySelect.value="";


    progressBar.style.width="0%";


});


}