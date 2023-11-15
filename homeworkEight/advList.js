//Add Trash Can
// var i = 0;
var listItems = document.querySelectorAll("#codeBox li");
var totalItems = listItems.length;
for (let i = 0; totalItems > i; i++) {
  console.log(i);
  var trashIcon = document.createElement("img");

  trashIcon.setAttribute(
    "src",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"
  );
  trashIcon.setAttribute("class", "listIcon");
  listItems[i].appendChild(trashIcon);
}

//Trash Items
var myList = document.querySelector("#codeBox ul");

function changeProp(e) {
  var target = getTarget(e);
  console.log(target);
  let tParent = target.parentNode;
  console.log(tParent);
  if (tParent.tagName == "LI") {
    tParent.parentNode.removeChild(tParent);
  }
  if (target.className == "selected") {
    console.log("hello");
    target.classList.remove("selected");
  } else {
    target.setAttribute("class", "selected");
    console.log("hello2");
  }
}

function getTarget(e) {
  if (!e) {
    e = window.event;
  } else {
    return e.target || e.srcElement;
  }

  if (!target) {
    console.error("Target is undefined.");
    return;
  }
}
myList.addEventListener("click", changeProp, false);
