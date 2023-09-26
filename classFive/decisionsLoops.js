let acct = 45.67;
let toy = 45.99;
let buyToy = acct > toy;

if (buyToy) {
  document.getElementById("bank").innerHTML = "Yay! You can buy the toy!";
} else {
  document.getElementById("bank").innerHTML =
    "Here's five bucks, go get the toy anyway! :)";
}
//If you want to reverse this, or look for just the false statements, put an "!" before buyToy in the "if" statement

const today = new Date();
var thisMonth = today.getMonth() + 1;
var bdayMonth = 4;
if (thisMonth == bdayMonth) {
  document.getElementById("birthday").innerHTML = "It's your birthday month!";
} else {
  document.getElementById("birthday").innerHTML =
    "Not your birthday month QUITE yet...";
}

//Voting Age

let ageText;
function checkAge() {
  let myAge = document.getElementById("age").value;

  if (myAge < 18) {
    ageText = "Can't vote yet, sorry :(";
  } else if (myAge == 18) {
    ageText = "You can vote starting THIS year :D";
  } else {
    ageText = "Go vote, you senior citizen :)";
  }
  document.getElementById("voteAge").innerHTML = ageText;
}

//Greeting
let todayHour = today.getHours();
var timeText = document.getElementById("myTime");

if (todayHour <= 12) {
  timeText.innerHTML = "Good Morning!";
} else if (todayHour > 12 && todayHour < 16) {
  //&& means that BOTH have to be true
  timeText.innerHTML = "Good Afternoon!";
} else if (todayHour >= 16 && todayHour < 20) {
  timeText.innerHTML = "Good Evening!";
} else {
  timeText.innerHTML = "Good Night!";
}

//Grades
let midterm = 78;
let final = 87;
let myTotal = 47 + 62 + midterm + final;
let totalPoints = 350;
let myAvg = (myTotal / totalPoints) * 100;

let gradeText = document.getElementById("msg");
if (midterm > 50 && final > 72) {
  gradeText.innerHTML = "Congrats! You pass :)";
} else {
  gradeText.innerHTML = "More college debt for you :(";
}

if ((midterm > 50 && final > 72) || myAvg > 80) {
  // The || will make a this OR that true
  gradeText.innerHTML += "<br> The class is complete";
} else {
  gradeText.innerHTML += "<br> Class is incomplete";
}

//Random 1-20
function newNum() {
  var ranNumber = Math.random() * 20;
  document.getElementById("rNum20").innerHTML = Math.floor(ranNumber) + 1;
}

//Dice Roll
function rollDie() {
  var dieVal = math.floor(Math.random() * 6) + 1;
  let dieImage = "";
  switch (dieVal) {
    case 1:
      dieImage = "die_face_1.png";
      break; //     <<<<<<<<<<<<<<<<<<<<<< This is SUPER important
    case 2:
      dieImage = "die_face_2.jpg";
      break;
    case 3:
      dieImage = "die_face_3.png";
      break;
    case 4:
      dieImage = "die_face_4.png";
      break;
    case 5:
      dieImage = "die_face_5.png";
      break;
    case 6:
      dieImage = "die_face_6.png";
      break;
      default:
        console.log("ERROR: Die Roll was outside of normal range");
  }
}
