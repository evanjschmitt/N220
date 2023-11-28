//Let vs Var
let x = 10;
if (x == 10) {
  let x = 20;
  document.getElementById("s1").innerHTML =
    "<p>X where X=20:" + " " + x + "</p>";
}
document.getElementById("s1").innerHTML += "<p>X Default:" + " " + x + "</p>";

var y = 10;
if (y == 10) {
  var y = 20;
  document.getElementById("s1").innerHTML +=
    "<p>Y where Y=20:" + " " + y + "</p>";
}
document.getElementById("s1").innerHTML += "<p>Y Default:" + " " + y + "</p>";

//Default Parameter
function multiply(a, b = 2) {
  return a * b;
}
//B being 2 is a default parameter in this function, because it is directly embeddeed in the function.

let m1 = multiply(5);
//5 Takes the value of A, and the default parameter of b=2 is taken to fulfil the function
let m2 = multiply(5, 8);
//Because both parameters are fulfilled here, b=2 is overridden

document.getElementById("s2").innerHTML +=
  "<p>Default Parameter: " + m1 + "<br>" + "Two Parameters: " + m2 + "</p>";

//Multiline
let t1 = "Hello, World!";
let t2 = "Hello, World!";
let t3 = `Hello, World!
The world is crazy
And pretty
But REALLY cold now`;
//When using a backtick (`), you can spread code out between different lines AND make it possible to not use concatination
document.getElementById("s8").innerHTML += t1 + t2 + t3;

//Template Literals
let firstName = "Gary";
let lastName = "Smith";
document.getElementById("s3").innerHTML +=
  "<p>" + firstName + " " + lastName + "</p>";
document.getElementById("s3").innerHTML += `<p>${firstName} ${lastName}</p>`;
//The bottom way may seem longer, but it is easier to write than the above method.

//Normal Functions
function fullname(f, l) {
  return `${f} ${l}`;
}

//Arrow function with one line in code block
fullname2 = (f, l) => `${f} ${l}`;
//Because it is a one line function, you do not need curly brackets {} OR the word return. Both fullName functions accomplish the same goal

//Multi Line Arrow Function
fullname3 = (f, l) => {
  console.log(f, l);
  return `${f} ${l}`;
};

document.getElementById("s4").innerHTML += `<p>Non-Arrow Function: ${fullname(
  firstName,
  lastName
)}</p>`;

document.getElementById(
  "s4"
).innerHTML += `<p>From the Arrow Function: ${fullname2(
  firstName,
  lastName
)}</p>`;

document.getElementById(
  "s4"
).innerHTML += `<p>Multi-Line Arrow Function: ${fullname3(
  firstName,
  lastName
)}</p>`;

//JS Classes
class Book {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }
}

const bookOne = new Book("Ready Player One", "Ernest Cline", 2010);

document.getElementById(
  "s5"
).innerHTML += `<p>Title: ${bookOne.title} <br>Author: ${bookOne.author}<br> Year Published: ${bookOne.pubDate} </p>`;

//Spread and Rest Section was SKIPPED in class

//Array Destructuring
const course = ["N220", "Intro to JS"];
let [courseNum, courseTitle] = course;

document.getElementById(
  "s7_array"
).innerHTML = `<p>${courseNum}: ${courseTitle}</p>`;

//Object Destructuring

let [title, surName] = ["Mr.", "John", "Phillips", "Sr."];
document.getElementById("s7_array").innerHTML += `<p>${title} ${surName}</p>`;
