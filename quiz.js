let currentQuestion = 0;

let score = 0;

let selectedQuestions=[];


let timeLeft=10;

let timer;



// Select category

let category =
localStorage.getItem("category") || "programming";



selectedQuestions =
questions[category];





const questionElement =
document.getElementById("question");


const answerButtons =
document.getElementById("answer-buttons");


const nextButton =
document.getElementById("next-btn");




function startQuiz(){


currentQuestion=0;

score=0;


showQuestion();


}





function showQuestion(){


reset();


let question =
selectedQuestions[currentQuestion];


questionElement.innerHTML =
question.question;



document.getElementById("question-count")
.innerHTML=

`Question ${currentQuestion+1} / ${selectedQuestions.length}`;



question.answers.forEach(answer=>{


let button=document.createElement("button");


button.innerHTML=answer.text;


button.classList.add("quiz-btn");


button.onclick=()=>selectAnswer(button,answer.correct);



answerButtons.appendChild(button);



});


startTimer();


}




function reset(){


answerButtons.innerHTML="";


nextButton.style.display="none";


clearInterval(timer);


timeLeft=10;


document.getElementById("time").innerHTML=timeLeft;


}







function startTimer(){


timer=setInterval(()=>{


timeLeft--;


document.getElementById("time").innerHTML=timeLeft;



if(timeLeft===0){


clearInterval(timer);


nextButton.style.display="block";


}



},1000);



}







function selectAnswer(button,correct){



clearInterval(timer);



let buttons=
document.querySelectorAll(".quiz-btn");



buttons.forEach(btn=>{

btn.disabled=true;

});



if(correct){


button.style.background="#22c55e";


score++;


}

else{


button.style.background="#ef4444";


}



nextButton.style.display="block";


}








nextButton.onclick=()=>{


currentQuestion++;



if(currentQuestion < selectedQuestions.length){


showQuestion();


}

else{


localStorage.setItem(
"score",
score
);


window.location.href="result.html";


}



};





startQuiz();