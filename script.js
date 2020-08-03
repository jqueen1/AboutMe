var button =document.getElementById("button");
button.onclick = function(){
	alert("your message has been received.Thank You!")
}

//to show the date
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

//to check for cookies
function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("cookies").innerHTML = text;
}

var amountOfLikes = 0

function handleLike(){
amountOfLikes++
console.log(amountOfLikes);
var likesDisplay=document.getElementById("likes")

likesDisplay.innerHTML= amountOfLikes
}

var amountOfDislikes = 0

function handleDisLike(){
amountOfDislikes--
console.log(amountOfDislikes);
var disLikesDisplay=document.getElementById("dislikes");

disLikesDisplay.innerHTML=amountOfDislikes

}

let myh1 = document.getElementById("text");

function changeText(){
	myh1.innerHTML = (myh1.innerHTML == "ABOUT ME") ? "JESSICA" : "ABOUT ME";
}


myh1.addEventListener("mouseover", changeText);
myh1.addEventListener("mouseleave", changeText);


function changeSize(){
myh1.style.fontSize = (myh1.style.fontSize == "40px") ? "20px" : "40px"
 }

myh1.addEventListener("mouseover", changeSize);
myh1.addEventListener("mouseleave", changeSize);