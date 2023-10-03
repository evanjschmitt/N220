

let currentWinnings = 100;
let wText = "";
let secretNum = 65;
let startText = "Current Winnings: " + currentWinnings;
let endText = "New Winnings: ";



function rollDie() {
    let dieNum = Math.floor(Math.random() * 6) + 1;
// let dieNum = 6
  console.log("I Work!");
  document.getElementById("bw").innerHTML =
    "Current Winnings: " + currentWinnings;
    // document.getElementById('wText').innerHTML =
  switch (dieNum) {
    case 1:
      wText = "You rolled a " + dieNum + "! <br> It is good to be number 1! You doubled your winnings!";
      currentWinnings = currentWinnings * 2;
      break;
    case 2:
      wText = "You rolled a " + dieNum + "! <br> Second best is not good enough. Roll again.";
      currentWinnings = currentWinnings;
      break;
    case 3:
      wText = "You rolled a " + dieNum + "! <br> Three is not a lucky number at all. You lose all your winnings!";
      currentWinnings = 0;
      break;
    case 4:
      wText = "You rolled a " + dieNum + "! <br> Four is lucky like a four-leafed clover. You won 400 points!";
      currentWinnings = currentWinnings + 400;
      break;
    case 5:
      wText =
        "You rolled a " + dieNum + "! <br> Five Alive. You are still in the game, but there is no change in your winnings.";
      currentWinnings = currentWinnings;
      break;
    case 6:
      let num = prompt("Pick a number, 1-100: ");
      if (num == 65) {
        wText =
          "You rolled a " + dieNum + "! <br> You are lucky indeed! You just multiplied your winnings by your chosen number!";
        currentWinnings = currentWinnings * 65;
      } else if (num < 50) {
        wText = "You rolled a " + dieNum + "! <br> You picked a rather low number, but you win those points."
        currentWinnings = currentWinnings + parseFloat(num)
      } else {
        wText = "You rolled a " + dieNum + "! <br> Good choice - but not what I was hoping for."
        currentWinnings = currentWinnings - 10
      }
      break;
      default:
        wText += "ERROR: You broke it :("
        break;
  }
  document.getElementById("wText").innerHTML = wText

  document.getElementById("nw").innerHTML = "New Winnings: " + currentWinnings;
}
