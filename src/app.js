/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  alert("Finished loading!");
  document.getElementById("screen2").innerHTML =
    "It's " + currentUser + "'s turn";
  document.getElementById("screen1").innerHTML =
    "The counter value is " + counter;
};

const btEl = document.querySelector("input").addEventListener("click", () => {
  let wrapEl = document.querySelector("div");
  let newEl = document.createElement("p");
  newEl.innerHTML = "Hello World!";
  wrapEl.appendChild(newEl);
});

document.querySelector(".wrap").innerHTML = "Hey there!";

window.calculateSumListener = function() {
  //Return the value of the input #firstNumber
  var stringA = parseInt(document.getElementById("firstNumber").value);
  //Return the value of the input #secondNumber
  var stringB = parseInt(document.getElementById("secondNumber").value);

  //your code goes here
  let result = document.querySelector("#resultNumber");
  return (result.value = stringA + stringB);
};

let result = document.querySelector("#resultNumber");
result.addEventListener("change", () => {
  console.log(result.value);
});

window.myEventListener = function myEventListener() {
  const myDiv = document.querySelector("#firstDiv");
  if (myDiv.style.display == "none") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
};

const theGreen = document
  .querySelector("#theGreen")
  .addEventListener("click", () => {
    alert("woohoo!");
  });

let counter = 0;

window.increaseCounter = function increaseCounter() {
  counter++;
  document.getElementById("screen1").innerHTML =
    "The counter value is " + counter;
};
window.decreaseCounter = function decreaseCounter() {
  counter--;
  document.getElementById("screen1").innerHTML =
    "The counter value is " + counter;
};

let currentUser = "Mario";

window.turnChanger = function turnChanger() {
  if (currentUser == "Mario") {
    currentUser = "Juan";
  } else if (currentUser == "Juan") {
    currentUser = "Josh";
  } else if (currentUser == "Juan" || currentUser == "Josh") {
    currentUser = "Mario";
  }

  document.getElementById("screen2").innerHTML =
    "It's " + currentUser + "'s turn";
};
