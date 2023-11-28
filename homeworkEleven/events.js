//HTML Event Handler

oldSchool = () => {
  //Print comment under HTML Event Handler bullet point
  document.getElementById(
    `htmlEH`
  ).innerText = `This is bad practice. Don't use this one.`;
};

//Traditional DOM Handler
tradText = () => {
  document.getElementById(
    `traditional`
  ).innerText = `You can only attach one function to this event handler.`;
};

document.getElementsByTagName(`input`)[1].onclick = tradText;

//Level 2 Event Listener
alertMe = () => {
  //run alert that reads Use this!
  alert(`Use This!`);
};

level2Text = () => {
  //text under level 2 bullet
  document.getElementById(
    `level2`
  ).innerText = `You can attach one or more functions to this event handler.`;
};

let level2Button = document.getElementsByTagName(`input`)[2];

level2Button.addEventListener(
  `click`,
  () => {
    alertMe();
    level2Text();
  },
  false
);

//UI Event
let pageURL = document.URL;
let lastModified = document.lastModified;

displayInfo = () => {
  //display url and update date
  document.getElementById(`pageURL`).innerText = `Page URL: ${pageURL}`;
  document.getElementById(
    `myLastUpdate`
  ).innerText = `Last Update: ${lastModified}`;
};

window.addEventListener(`load`, displayInfo);

//Keyboard Event
let myText = document.getElementsByTagName(`input`)[3];
let keyCount = 0;

countKeys = () => {
  keyCount++;

  document.getElementById(
    `pressNumber`
  ).innerText = `You have pressed a key ${keyCount} times.`;
};

myText.addEventListener("keydown", countKeys);

//Mouse Event

let mouseText = document.getElementById(`danger`);

changeText = () => {
  //change paragraph text
  mouseText.innerHTML = `<b>Hello There :)</b>`;
};

mouseText.addEventListener(`dblclick`, changeText);

//Focus Event
let focusText = document.getElementsByClassName(`blurText`)[0];

changeToUpper = () => {
  focusText.style.textTransform = `uppercase`;
};

focusText.addEventListener(`blur`, changeToUpper);

//Form Events
let dropD = document.getElementById(`js`);
let ddText = document.getElementById(`selectText`);

selectedChoice = () => {
  let yourChoice = dropD.options[dropD.selectedIndex].value;
  let printChoice;

  switch (yourChoice) {
    case `javascript`:
      printChoice = `Javascript is the base for all of these.`;
      break;
    case `jQuery`:
      printChoice = `You will learn jQuery in another web course.`;
      break;
    case `Angular`:
      printChoice = `Angular is a very popular Javascript framework.`;
      break;
    case `React`:
      printChoice = `You will learn React in advanced web courses.`;
      break;
    default:
      printChoice = `Please make a selection.`;
      break;
  }

  ddText.innerText = printChoice;
};

dropD.addEventListener(`change`, selectedChoice);

//Add/Detete List

let addBtn = document.getElementsByTagName(`button`)[0];
let itemList = document.getElementById(`myList`);

addItem = () => {
  let newItem = prompt(`Add Item:`);
  let newLi = document.createElement(`li`);
  let newLiText = document.createTextNode(newItem);
  newLi.appendChild(newLiText);
  itemList.appendChild(newLi);
};
addBtn.addEventListener(`click`, addItem);

//Target of event
getTarget = (e) => {
  return e.target || e.srcElement;
};

//Remove target from list
removeItem = (e) => {
  let target = getTarget(e);
  let tParent = target.parentNode;
  tParent.removeChild(target);
};

itemList.addEventListener(`click`, removeItem);
