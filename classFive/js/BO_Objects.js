//Coding Challenge Notes
{const course = {
  number: "N220",
  Title: "Introduction to Media Application Development",
  totalSeats: 20,
  enrollment: 18,
  availability: function () {
    return this.totalSeats > this.enrollment;
  },
};
console.log(course.number + " Open: " + course.availability());

course.enrollment=course.enrollment+2;
// Could also use course.enrollment+=2;

console.log (course.enrollment);
console.log(course.number + " Open: " + course.availability());}
//Window/Browser Code
let pageDetails = "Height: " + window.innerHeight + "<br> Width: " + window.innerWidth;
document.getElementById("hwDetails").innerHTML = pageDetails;

function IUPUIWebsite () {
    open("http://www.iupui.edu")
}
function printPage () {
    print();
}

document.getElementById("wpDetails").innerHTML = window.location + "<br>" + document.URL;
//Using window.location is the better option, because you can get AND set the url

//Document Objects
document.getElementById("domain").innerHTML = "Domain: " + location.hostname;
document.getElementById("update").innerHTML = "Last Modified: " + document.lastModified;

//String Objects
function getGreeting () {
    let greeting = document.getElementById('greeting').value;
    let gMsg = "Your message is " + greeting.length + " characters long,";
    console.log ("Greeting", greeting.trim())
    let middleC = greeting.length/2;
    gMsg += " and the middle character is " +greeting.charAt(middleC);
    document.getElementById("messageInfo").innerHTML = gMsg;

}
let newText = "I hope this works";
newText=newText.toUpperCase();
newText=newText.replace("HOPE", "think");

document.getElementById('coolText').innerHTML=newText;

let classList = document.getElementById('classes').innerHTML
console.log (classList);

classListArray = classList.split(", ");
console.log (classListArray)
document.getElementById('class').innerHTML = classListArray [2];

//Number Object
var newNumber = 847.3832342;
document.getElementById('fixed').innerHTML = newNumber.toFixed(1) //This is ROUNDING
