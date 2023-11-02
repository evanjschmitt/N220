document.getElementById("title").innerHTML = "DOM Manipulation";

document.querySelector("div").style.backgroundColor = "lightBlue";

document.querySelector("ul").innerHTML += "<li>Item 7</li>";

document.getElementsByTagName("li")[0].style.color = "crimson";

document.getElementsByTagName("li")[2].style.backgroundColor = "pink";

document.getElementsByTagName("li")[4].style.backgroundColor = "yellow";

let element7 = document.getElementsByTagName("li")[6];
element7.style.backgroundColor = "lightGray";
element7.style.color = "royalBlue";

document.querySelector("ul").innerHTML += "<li>Evan</li>";

let element4 = document.querySelector("ul").children[3];
document.querySelector("ul").removeChild(element4);

let button = document.getElementById("btn");

button.style.backgroundColor = "rebeccaPurple";
button.style.color = "white";
button.style.borderColor = "white";
button.style.borderWidth = "10px";
button.style.marginLeft = "10px";
button.innerHTML = "<i>Click Me</i>";