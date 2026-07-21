let score =
Number(localStorage.getItem("score"));


let total = 10;


let username =
localStorage.getItem("loggedUser");



document.getElementById("resultName")
.innerHTML =
"Congratulations " + username + " 👋";




document.getElementById("score")
.innerHTML =
score + "/" + total;



let percentage =
(score/total)*100;



document.getElementById("percentage")
.innerHTML =
percentage + "%";




// Save leaderboard


let leaderboard =
JSON.parse(
localStorage.getItem("leaderboard")
) || [];



leaderboard.push({

name:username,

score:score,

percentage:percentage

});



leaderboard.sort((a,b)=>
b.score-a.score
);



localStorage.setItem(
"leaderboard",
JSON.stringify(leaderboard)
);





displayLeaderboard();





function displayLeaderboard(){


let list =
document.getElementById("leaderboard");


list.innerHTML="";



leaderboard.slice(0,5)
.forEach(user=>{


let li=document.createElement("li");


li.innerHTML=

`${user.name} - ${user.score}/10 (${user.percentage}%)`;


list.appendChild(li);



});


}







document.getElementById("retryBtn")
.onclick=()=>{


window.location.href="quiz.html";


};





document.getElementById("dashboardBtn")
.onclick=()=>{


window.location.href="dashboard.html";


};