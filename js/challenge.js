//setting all of our targets

const heart = document.getElementById("heart");
const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const pause = document.getElementById("pause");
const like = document.querySelector(".likes");
const comments = document.querySelector("h3");


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

let likeCounter = 1;
let li = document.createElement("li");
like.appendChild(li);

//set our counter and make li to put our output, must be outside the below function

heart.addEventListener("click", function(){
 li.innerHTML = `Number of likes: ${likeCounter}`;
 likeCounter += 1;
});

//message and number increment



const taskForm = document.querySelector("#comment-form");

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newCom = document.querySelector("#comment-input").value;
    let newHeader = document.createElement("p");
    newHeader.innerHTML = `${newCom}`;
    comments.appendChild(newHeader);
  });
  
  // newCom is the comment-input value
  //newHeader creates a place to put the comment
  //we put the value in newHeader
  //Then we append new header on the page
  
  pause.