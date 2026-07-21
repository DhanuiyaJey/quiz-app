// Get logged user


let user = localStorage.getItem("loggedUser");



if(!user){


    window.location.href="login.html";


}




document.getElementById("username").innerHTML=user;





// Start Quiz button


document.getElementById("startQuiz")
.addEventListener("click",()=>{


   document.getElementById("startQuiz")
.addEventListener("click",()=>{


localStorage.setItem(
"category",
"programming"
);


window.location.href="quiz.html";


});


});






// Logout


document.getElementById("logoutBtn")
.addEventListener("click",()=>{


    localStorage.removeItem("loggedUser");


    window.location.href="index.html";


});