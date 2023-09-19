//Coding Challenge Notes
{
  const course = {
    number: "N220",
    Title: "Introduction to Media Application Development",
    totalSeats: 20,
    enrollment: 18,
    availability: function () {
      return this.totalSeats > this.enrollment;
    },
  };
  console.log(course.number + " Open: " + course.availability());

  course.enrollment = course.enrollment + 2;
  // Could also use course.enrollment+=2;

  console.log(course.enrollment);
  console.log(course.number + " Open: " + course.availability());
}
//Window/Browser Code
let pageDetails =
  "Height: " + window.innerHeight + "<br> Width: " + window.innerWidth;
document.getElementById("hwDetails").innerHTML = pageDetails;

function IUPUIWebsite() {
  open("http://www.iupui.edu");
}
function printPage() {
  print();
}

document.getElementById("wpDetails").innerHTML =
  window.location + "<br>" + document.URL;
//Using window.location is the better option, because you can get AND set the url

//Document Objects
document.getElementById("domain").innerHTML = "Domain: " + location.hostname;
document.getElementById("update").innerHTML =
  "Last Modified: " + document.lastModified;

//String Objects
function getGreeting() {
  let greeting = document.getElementById("greeting").value;
  let gMsg = "Your message is " + greeting.length + " characters long,";
  console.log("Greeting", greeting.trim());
  let middleC = greeting.length / 2;
  gMsg += " and the middle character is " + greeting.charAt(middleC);
  document.getElementById("messageInfo").innerHTML = gMsg;
}
let newText = "I hope this works";
newText = newText.toUpperCase();
newText = newText.replace("HOPE", "think");

document.getElementById("coolText").innerHTML = newText;

let classList = document.getElementById("classes").innerHTML;
console.log(classList);

classListArray = classList.split(", ");
console.log(classListArray);
document.getElementById("class").innerHTML = classListArray[2];

//Number Objects
var newNumber = 847.3832342;
document.getElementById("fixed").innerHTML = newNumber.toFixed(1); //This is ROUNDING
document.getElementById("precise").innerHTML = newNumber.toPrecision(3); //This will limit the TOTAL digits of the whole number

//Math Objects
var myPi = Math.PI;
document.getElementById("pi").innerHTML = myPi;
document.getElementById("round").innerHTML = Math.round(myPi);
document.getElementById("ceil").innerHTML = Math.ceil(myPi); //Rounds UP
document.getElementById("floor").innerHTML = Math.floor(myPi); //Rounds DOWN
document.getElementById("random").innerHTML = Math.random(); //This is fully random

//Random between one and a number (in this ex. the number is 10)
var rNum = Math.random() * 10;
document.getElementById("randomTwo").innerHTML = Math.floor(rNum) + 1;

//Date Object
var today = new Date();
document.write("Day: " + today.getDay());
document.write("<br> Date: " + today.getDate());
document.write("<br> Month: " + (today.getMonth() +1)); //Add one becuse months start at 0
document.write("<br> Year:" + today.getFullYear());
document.write("<br> Today's Date: " + today.toDateString()); //This is the best choice