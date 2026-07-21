const adminLoginBtn =
document.getElementById("adminLoginBtn");



if(adminLoginBtn){


adminLoginBtn.onclick=()=>{


let username =
document.getElementById("adminUsername").value;


let password =
document.getElementById("adminPassword").value;



if(username==="admin" && password==="admin123"){


localStorage.setItem(
"admin",
"true"
);



window.location.href=
"admin-dashboard.html";


}


else{


alert("Invalid Admin Login");


}



};


}