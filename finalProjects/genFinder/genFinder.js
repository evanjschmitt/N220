const year = new Date().getFullYear();
function checkGen() {
  let age = document.getElementById("age").value;
  let birthYear = year - age;
  let genText;
  console.log(age);

  if (birthYear >= 1946 && birthYear <= 1964) {
    genText = "You are a member of the Baby Boomer Generation!";
  } else if (birthYear >= 1965 && birthYear <= 1980) {
    genText = "You are part of Generation X!";
  } else if (birthYear >= 1981 && birthYear <= 1996) {
    genText = "You belong in the Y Generation!";
  } else if (birthYear >= 1997 && birthYear <= 2012) {
    genText = "Generation Z is your generation!";
  } else if (birthYear >= 2013 && birthYear <= 2025) {
    genText = "You are part of Generation Alpha.";
  } else {
    genText = "Sorry, your generation is not listed.";
  }
  document.getElementById(
    "ageText"
  ).innerHTML = `You are ${age} years old, which means you were born in ${birthYear}!`;
  document.getElementById("genText").innerHTML = genText;
}
