//HTML Event Handler

function oldSchool() {
  //Print Text under Event Handler bullet point
  document.getElementById("htmlEH").innerText =
    "This is bad practice. Don't use this one.";
}

//Traditional DOM Handler

function tradText() {
  //Put Text under bullet point
  document.getElementById("traditional").innerText =
    "You can only attach ONE function to this handler.";
}

document.getElementsByTagName("input")[1].onclick = tradText;

//Level Two Event Listener

function alertMe() {
  //Runs alert that says "Use this!"
  alert("Use This One!!!");
}

function levelTwo() {
  //Text under level two bullet
  document.getElementById("level2").innerText =
    "You can attach multiple functions to this event handler :)";
}

let l2Button = document.getElementsByTagName("input")[2];

l2Button.addEventListener(
  "click",
  function () {
    alertMe();
    levelTwo();
  } //True or false goes here for event flow
);

//UI EVENT
let pageURL = document.URL;
let lastModified = document.lastModified;

function displayInfo() {
  document.getElementById("pageURL").innerText = "Page URL: " + pageURL;
  document.getElementById("myLastUpdate").innerText =
    "Last Update: " + lastModified;
}

window.addEventListener("load", displayInfo);

//Keyboard Event
let myText = document.getElementsByTagName("input")[3];
let keyCount = 0;

function countKeys() {
  keyCount++;
  document.getElementById("pressNumber").innerHTML =
    "You pressed a key " + keyCount + " times. Impressive!";
}

myText.addEventListener("keydown", countKeys);

//Mouse Event
let mouseText = document.getElementById("danger");
function changeText() {
  mouseText.innerHTML = "<b> <i> WOOAhhhhhh...</i></b>";
}

mouseText.addEventListener("dblclick", changeText);

//Focus Event
let focusText = document.getElementsByClassName("blurText")[0];

function changeUpper() {
  focusText.style.textTransform = "uppercase";
}
focusText.addEventListener("blur", changeUpper);

//Form Events
let dropD = document.getElementById("js");
let ddText = document.getElementById("selectText");

function choiceSelect() {
  let yourChoice = dropD.options[dropD.selectedIndex].value;
  let printChoice;
  switch (yourChoice) {
    case "javascript":
      printChoice = "Javascript is the base for all of these.";
      break;

    case "jQuery":
      printChoice = "You will learn jQuery in another web course.";
      break;
    case "Angular":
      printChoice = "Angular is a popular javaScript framework.";
      break;
    case "React":
      printChoice = "This is something in ADVANCED web courses.";
      break;
    default:
      printChoice = "Please make a selection.";
  }
  ddText.innerHTML = printChoice;
}

dropD.addEventListener("change", choiceSelect);
