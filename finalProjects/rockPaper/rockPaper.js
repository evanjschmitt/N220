var p1;
var p2;
var p1Img = document.getElementById("p1");
var p2Img = document.getElementById("p2");
var textBox = document.getElementById("text");

function playGame() {
  var playerOne = Math.floor(Math.random() * 3);
  var playerTwo = Math.floor(Math.random() * 3);
  var table = document.getElementById("table");
  var newRow = document.createElement("tr");
  var gameNumber = document.createElement("th");
  var result = document.createElement("th");

  //Player One Option
  console.log(playerOne);
  if (playerOne == 1) {
    console.log("Rock");
    p1Img.setAttribute(
      "src",
      "https://imgs.search.brave.com/WvMhgqX4O8ohFjnEls2yFrineFM8jvteRG-wES1a-Ug/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQyL1RoZV9ST0NL/LmpwZw"
    );
    p1 = "rock";
  } else if (playerOne == 2) {
    console.log("Paper");
    p1Img.setAttribute(
      "src",
      "https://i.pinimg.com/736x/6a/c0/8f/6ac08f3037ee38595859c78af5f20fa1.jpg"
    );
    p1 = "paper";
  } else {
    console.log("Scissors");
    p1Img.setAttribute(
      "src",
      "https://pyxis.nymag.com/v1/imgs/bd1/e0c/eee8a96e94f8d923c31bad1a7f5b5ae57f.jpg"
    );
    p1 = "scissors";
  }
  //Player Two Option
  console.log(playerTwo);
  if (playerTwo == 1) {
    console.log("Rock");
    p2Img.setAttribute(
      "src",
      "https://imgs.search.brave.com/WvMhgqX4O8ohFjnEls2yFrineFM8jvteRG-wES1a-Ug/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQyL1RoZV9ST0NL/LmpwZw"
    );
    p2 = "rock";
  } else if (playerTwo == 2) {
    console.log("Paper");
    p2Img.setAttribute(
      "src",
      "https://i.pinimg.com/736x/6a/c0/8f/6ac08f3037ee38595859c78af5f20fa1.jpg"
    );
    p2 = "paper";
  } else {
    console.log("Scissors");
    p2Img.setAttribute(
      "src",
      "https://pyxis.nymag.com/v1/imgs/bd1/e0c/eee8a96e94f8d923c31bad1a7f5b5ae57f.jpg"
    );
    p2 = "scissors";
  }
  //Determining Score
  var scoreDif = playerOne - playerTwo;
  switch (scoreDif) {
    default:
      textBox.innerHTML = "Error :(";
      break;
    case 0:
      textBox.innerHTML = "It's a tie! Try Again?";
      gameNumber.textContent = table.children.length;
      result.textContent = "Tie";
      break;
    case -1:
      textBox.innerHTML = "Player Two Wins! Try Again?";
      gameNumber.textContent = table.children.length;
      result.textContent = "Player Two";
      break;
    case 1:
      textBox.innerHTML = "Player One Wins! Try Again?";
      gameNumber.textContent = table.children.length;
      result.textContent = "Player One";
      break;
    case 2:
      textBox.innerHTML = "Player Two Wins! Try Again?";
      gameNumber.textContent = table.children.length;
      result.textContent = "Player Two";
      break;
    case -2:
      textBox.innerHTML = "Player One Wins! Try Again?";
      gameNumber.textContent = table.children.length;
      result.textContent = "Player One";
      break;
  }
  newRow.appendChild(gameNumber);
  newRow.appendChild(result);
  table.appendChild(newRow);
}
