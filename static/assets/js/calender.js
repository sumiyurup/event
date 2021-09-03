//Document file
const card = document.querySelectorAll(".btn-primary");
const modalTitle1 = document.getElementById("date1");
const modalTitle2 = document.getElementById("date2");

//Getting today date
let date = new Date();


//test
//I set the date and month manually so that I can test
date.setMonth(11);  //11 means december
date.setDate(4);

let presentMonth = date.getMonth();
let presentDate = date.getDate();

//Array
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//Variable
let mm = months[presentMonth];
let dd = presentDate
let yy = date.getFullYear();
let dynamicDate = `Today is ${mm} ${dd} ${yy}`;



//Function
function img(){
    card.forEach(element => {
        let ran = Math.floor(Math.random()*24 + 1)
        element.parentElement.style.backgroundImage = `url('/assets/img/dates/1-${ran}.png')`       
        
    });
}
img()

//Applying Current Date on pop-up view
modalTitle1.innerHTML = dynamicDate;
modalTitle2.innerHTML = dynamicDate;
modalTitle1.style.color = "black";
modalTitle2.style.color = "black";

 //Checking December Month and Date

if(presentMonth == 11){
    card.forEach(element => {
        let cardNumber = parseInt(element.innerText);
        
        if(cardNumber <= presentDate){
            element.setAttribute("data-bs-target", "#exampleModal2");
            element.addEventListener("click", function(){
                element.style.display = "none";
                element.parentElement.style.backgroundImage = "url('/assets/opened-02.png')";
                
            });
        }
        else{
            element.setAttribute("data-bs-target", "#exampleModal");
            element.addEventListener("click", function(){
                
            });
        }
    });
    
}
else{
        card.forEach(element => {
            element.setAttribute("data-bs-target", "#exampleModal");
            element.addEventListener("click", function(){
                
            });
    });
};
