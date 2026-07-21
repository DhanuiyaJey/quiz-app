// ============================
// ADMIN CHECK
// ============================

let admin =
localStorage.getItem("admin");


if(!admin){

    window.location.href="admin-login.html";

}



// ============================
// GET ELEMENTS
// ============================


const questionText =
document.getElementById("questionText");


const option1 =
document.getElementById("option1");


const option2 =
document.getElementById("option2");


const option3 =
document.getElementById("option3");


const option4 =
document.getElementById("option4");


const correct =
document.getElementById("correct");


const addButton =
document.getElementById("addQuestion");


const questionList =
document.getElementById("questionList");





// Load existing questions

let adminQuestions =
JSON.parse(localStorage.getItem("adminQuestions"))
|| [];



displayQuestions();




// ============================
// ADD QUESTION
// ============================


addButton.onclick = ()=>{


if(
questionText.value==="" ||
option1.value==="" ||
option2.value==="" ||
option3.value==="" ||
option4.value===""
){

alert("Please fill all fields");

return;

}




let newQuestion={


question:
questionText.value,


answers:[


{
text:option1.value,
correct:correct.value==="0"
},


{
text:option2.value,
correct:correct.value==="1"
},


{
text:option3.value,
correct:correct.value==="2"
},


{
text:option4.value,
correct:correct.value==="3"
}


]


};




adminQuestions.push(newQuestion);



saveQuestions();



clearFields();



alert("Question Added Successfully");



};





// ============================
// DISPLAY QUESTIONS
// ============================


function displayQuestions(){


questionList.innerHTML="";



adminQuestions.forEach((q,index)=>{


let li =
document.createElement("li");



li.innerHTML=`

<strong>${index+1}. ${q.question}</strong>

<br>


<button onclick="editQuestion(${index})">

Edit

</button>



<button onclick="deleteQuestion(${index})">

Delete

</button>


`;



questionList.appendChild(li);



});



}






// ============================
// DELETE QUESTION
// ============================


function deleteQuestion(index){


adminQuestions.splice(index,1);


saveQuestions();


displayQuestions();


}






// ============================
// EDIT QUESTION
// ============================


function editQuestion(index){


let q =
adminQuestions[index];



questionText.value=q.question;


option1.value=q.answers[0].text;


option2.value=q.answers[1].text;


option3.value=q.answers[2].text;


option4.value=q.answers[3].text;



adminQuestions.splice(index,1);



saveQuestions();



displayQuestions();



}






// ============================
// SAVE
// ============================


function saveQuestions(){


localStorage.setItem(

"adminQuestions",

JSON.stringify(adminQuestions)

);


}





// ============================
// CLEAR INPUTS
// ============================


function clearFields(){


questionText.value="";

option1.value="";

option2.value="";

option3.value="";

option4.value="";


}