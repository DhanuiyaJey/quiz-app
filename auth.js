// REGISTER


const registerBtn =
document.getElementById("registerBtn");


if(registerBtn){


registerBtn.addEventListener("click",()=>{


let name =
document.getElementById("regName").value;


let email =
document.getElementById("regEmail").value;


let password =
document.getElementById("regPassword").value;



if(name==="" || email==="" || password===""){

alert("Please fill all fields");

return;

}



let user={

name:name,

email:email,

password:password

};



localStorage.setItem(
"user",
JSON.stringify(user)
);



alert("Registration Successful");


window.location.href="login.html";



});


}





// LOGIN


const loginBtn =
document.getElementById("loginBtn");



if(loginBtn){


loginBtn.addEventListener("click",()=>{


let email =
document.getElementById("loginEmail").value;


let password =
document.getElementById("loginPassword").value;



let savedUser =

JSON.parse(
localStorage.getItem("user")
);



if(savedUser &&

savedUser.email===email &&

savedUser.password===password){



localStorage.setItem(
"loggedUser",
savedUser.name
);



alert("Login Successful");


window.location.href="dashboard.html";



}

else{


alert("Invalid Email or Password");


}



});


}