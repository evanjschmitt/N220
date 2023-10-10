//For Loop

for (let i = 0; i < 5; i++) {
  document.getElementById("for").innerHTML += i + " ";
}

//While Loop
let weeks = 5;
while (weeks > 1) {
  document.getElementById("while").innerHTML +=
    "There are " + weeks + " weeks until Thanksgiving break. <br>";
  weeks--;
}

//Do While Loop

let candy = 3;
do {
  document.getElementById("doWhile").innerHTML +=
    "I have " + candy + " pieces of candy. <br>";
  candy--;
} while (candy > 0);

//Loop Problems
let month = ["January", "Febuary", "March", "April", "May", "June"];
let monthList = "";
for (let m = 0; m < month.length; m++) {
  monthList += month[m] + "<br>";
}
document.getElementById("an1").innerHTML = monthList;

//Problem Two
let monthTwo = ["January", "Febuary", "March", "April", "May", "June"];
let monthListTwo = "<ol>";
for (let m2 = 0; m2 < monthTwo.length; m2++) {
  monthListTwo += "<li>" + monthTwo[m2] + "</li>";
}
monthListTwo += "</ol>";
document.getElementById("an2").innerHTML = monthListTwo;

//Problem Three
let pizza = 9;
while (pizza > 1) {
  document.getElementById("an3").innerHTML +=
    "There are " + pizza + " slices of pizza left. <br>";
  pizza--;
}

//Problem Four
let num = 15;
do {
  document.getElementById("an4").innerHTML += "Number Count:" + num + "<br>";
  num++;
} while (num < 20);

//Problem Five
let today = new Date();
let tDate = today.getDate();

for (let d = 50; d >= 5; d -= 5) {
  document.getElementById("an5").innerHTML += " " + d + " ";
  if (d == tDate) {
    document.getElementById("an5").innerHTML +=
      "<br>" + "That's today's date! <br>";
    break;
  }
}

//Problem Six

//Problem Seven

let tickets = 10;
let ticketText = "";
while (tickets > 0) {
  tickets--;
  ticketText = "Another seat is gone, only " + tickets + " tickets left <br>";

  if (tickets == 5) {
    ticketText += "Half the tickets are sold, buy yours now! <br>";
  }
  if (tickets == 0) {
    ticketText = "All the tickets are sold :(";
    document.getElementById("an7").innerHTML += ticketText;
    break;
  }
  document.getElementById("an7").innerHTML += ticketText;
}

//For In Loop
const Course = {
  cNum: "n220",
  title: "Intro to Javascript",
  enrolled: 20,
  prereq: false,
  offering: ["fall", "spring "],
};

for (p in Course) {
  //P = Properties
  document.getElementById("forIn").innerHTML += p + ": " + Course[p] + "<br>";
}

for (m in month) {
  console.log(m + ": " + month[m]); //This is taken from the month problem from earlier
}
let holliday = "Halloween";
for (h in holliday ) {
  console.log(h + ": " + holliday[h])
}

// For of Loop

// for (p of Course) {
//   //P = Properties
//   document.getElementById("forOf").innerHTML += p + ": " + Course[p] + "<br>";
// }

for (m of month) {
  console.log(m); //This is taken from the month problem from earlier
}
let hollidayTwo = "Halloween";
for (h of hollidayTwo ) {
  console.log(h)
}