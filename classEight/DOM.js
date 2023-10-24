document.getElementById("title").innerHTML = "Welcome Back! :D";

//Query Selector: Targets individual elements/nodes using CSS selector
document.querySelector("p").innerText = "Query Selector ";

document.querySelector(".content").innerHTML =
  "Query Selector, but this time using a class."; //Don't forget the period!!!

//Selecting Multiple Elements
//Method One: By Class name
document.getElementsByClassName("odd")[0].style.color = "pink";

//Method Two: By Tag Name
document.getElementsByTagName("li")[3].style.backgroundColor = "#EE4CEE";

//Method Three: querySelectorAll
document.querySelectorAll("#myList li:not(.odd)")[0].style.fontWeight = "bold";

//Challenge: Target all list items, remove bullets, and add padding
let allItems = document.getElementsByTagName("li");

for (let i = 0; i < allItems.length; i++) {
  allItems[i].style.listStyleType = "none";
  allItems[i].style.padding = "10px";
}

//Challenge Two: Select alternative bands, give green bgco plus white, italized text
let allAlternative = document.getElementsByClassName("alternative");

for (let i = 0; i < allAlternative.length; i++) {
  allAlternative[i].style.backgroundColor = "#1E8126";
  allAlternative[i].style.color = "white";
  allAlternative[i].style.fontStyle = "italic";
  allAlternative[i].style.fontFamily = "Courier New";
}

//Challenge Three: Transform Candlebox text into a link to website
//Steps: Target correct element, create variable with text, wrap link around text, replace text in li

let cElement = document.querySelector(".rock:last-child");
let cText = cElement.innerText;
// console.log (cText);
cText = '<a href="https://www.candleboxrocks.com">' + cText + "</a>";
cElement.innerHTML = cText;

//Challenge Four: Adding Items to last list

function addItem() {
  let newItem = prompt("New Item: ");
  let newLi = document.createElement("li");
  let newLiText = document.createTextNode(newItem);
  newLi.appendChild(newLiText);
  newLi.style.padding= "10px";
  newLi.style.listStyle = "none"
  

  //Targeting List Item
  let allLists = document.getElementsByTagName('ul');
  let gList = allLists[allLists.length-1];
//   let gList = document.querySelector('ul:last-child');
  gList.appendChild(newLi);
}
