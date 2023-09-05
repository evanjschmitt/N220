function changeText() {
  document.getElementById("changeTxt").innerHTML =
    "This text has been changed by a function :)";
}

changeText();

function noPram() {
  document.write("This function does not take parameters");
}

noPram();

var greet = function () {
  console.log("'ello World");
};

greet();

var favBand = "Rare Americans";

function favrotieBand(favBand) {
  document.getElementById("favBand").innerHTML = favBand;
}
favrotieBand(favBand);

function myName(first) {
  console.log(first);
}

myName("Greg");
myName("Riley");

var recHeight = 20;
var recWidth = 34;

function recPerm(h, w) {
  //When putting parameters in, they need to be filled IN ORDER
  let perimeter = 2 * h + 2 * w;
  return perimeter
}
  document.getElementById("panswer").innerHTML = recPerm(recHeight, recWidth) + " feet";

recPerm(recHeight, recWidth);

function calcArea() {
  let h = document.getElementById("height").value;
  let w = document.getElementById("width").value;
  var area = h * w;
  document.getElementById("answer").innerHTML = (area);
}


//Challenge function
// let world = "Earth"
misc
function hello () {
    return "Hello " + misc;
}
var misc = "World"
console.log(hello(misc))


