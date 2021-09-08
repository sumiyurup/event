//Document file
const button = document.querySelectorAll(".btn-date");
const leftDoor = document.querySelectorAll("#left-door");
const rightDoor = document.querySelectorAll("#right-door");
const wrapper = document.querySelectorAll(".wrapper");
//Getting today date
let date = new Date();

//I set the date and month manually so that I can test
date.setMonth(11); //11 means december
date.setDate(18);

let presentMonth = date.getMonth();
let presentDate = date.getDate();

//Array
//let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//Variable

let dd = presentDate;
let yy = date.getFullYear();

let randNum = Math.floor(Math.random() * 24);
let html = `<img src="/assets/img/dates/1-${randNum}.png" alt="" class="door-img">`;
wrapper.innerHTML = html;

wrapper.forEach(function (element) {
  let randNum = Math.floor(Math.random() * 23 + 1);
  let html = `<img src="/assets/img/dates/1-${randNum}.png" alt="" class="door-img">`;
  element.insertAdjacentHTML("afterbegin", html);
});

//Applying Current Date on pop-up view

//Checking December Month and Date

if (presentMonth == 11) {
  button.forEach(function (element, index) {
    let btnIndex = index;
    if (element.innerHTML <= presentDate) {
      element.addEventListener("click", function () {
        element.style.backgrsound = "#ce3262";
        let newImg = `<img src="/assets/img/dates/open.jpeg" alt="" class="door-img">`;

        leftDoor.forEach(function (element, index) {
          let e = element;
          let i = index;
          if (btnIndex == i) {
            e.style.transform = "rotateY(-140deg)";
            setTimeout(() => {
              e.style.transform = "rotateY(0deg)";
            }, 3000);
          }
        });
        rightDoor.forEach(function (element, index) {
          let e = element;
          let i = index;
          if (btnIndex == i) {
            e.style.transform = "rotateY(140deg)";
            setTimeout(() => {
              e.style.transform = "rotateY(0deg)";
            }, 3000);
          }
        });
      });
    } else {
      element.style.background = "#ce3262";
      element.style.cursor = "context-menu";
      element.addEventListener("click", function () {});
    }
  });
} else {
  element.addEventListener("click", function () {});
}
