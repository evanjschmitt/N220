var fName="Ev";
var book="Ev's Axolotls" //You can use single OR double quotes, but you need to use double quotes if there is an apostrophe

var lName = "Schmitt";
var myAge= 19; //This is a number/interger
var student= true; //This is called a boolean value
var fullName= fName + " " + lName; //You can add things together with a plus sign, including spaces like above. This is called concatenating
student= false

let homeTown = "Chesterton";
homeTown="Chicago"


const DIMEVAL = 10 //Constants can not be changed, and are (normally) written in all caps

console.log("N220"); //This console logs a string
console.log(book); //This console logs a variable

document.write(fName+ " "); //This will write the variable at the bottom of the page
document.write(homeTown + " ");
document.getElementById("profile").innerHTML=fullName + " is " + myAge + " years old"; //This will actually fill the tag on line 13 of html file

console.log("Student: " + typeof student);
console.log("Age: " + typeof myAge); //These will console log the type of information that these variables take


//Lunch Example

var banana = 1.25;
var sandwich = 4.5;
var chips = 1.5;
var drink = 2;

var lunch = banana + sandwich + drink + chips*2; //Use asterisk for multiplication
console.log("Lunch Cost " + lunch); //Because everything is a number, they are all added automatically
//If ONE of those was a string, the whole thing would not work correctly

var cashOnHand = 12;
const TAXRATE = 0.07;
var lunchTotal = lunch + (lunch*TAXRATE);

document.getElementById("lunch").
innerHTML+=cashOnHand>lunchTotal; //Adding a plus will add this expression to the paragraph tag with the lunch id.