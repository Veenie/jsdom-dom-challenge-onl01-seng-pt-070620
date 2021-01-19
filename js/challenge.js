//setting all of our targets

const heart = document.getElementById("heart");
const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const pause = document.getElementById("pause");
const like = document.getElementById("likes");



//putting in a second counter

let secondCount = 0;

//start at zero, this what will increase in count

let count = setInterval(showTime, 1000);

//set interval is taking arguments of a function and milliseconds

function showTime(){counter.innerHTML = secondCount;
secondCount += 1;}

//injecting our count in the html, incrementing it


//plus and minus buttons

plus.addEventListener("click", function(){
  {counter.innerHTML = secondCount;
secondCount += 1;}
});

minus.addEventListener("click", function(){
  {counter.innerHTML = secondCount;
secondCount -= 1;}
});

//using event listeners to increment time, just like showTime does

//like counter

let likeCounter = 0

heart.addEventListener("click", function(){
  let li = document.createElement("li");
  li.innerHTML = `${likeCounter} likes`;
  likeCounter += 1;
  like.appendChild(li);
});




const taskForm = document.querySelector("#comment-form");

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newCom = document.querySelector("#comment-input").value;
    let newHeader = document.createElement("p");
    newHeader.innerHTML = `${newCom}`;
  });