let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(num) {
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];
  console.log(CompDecision);
  document.getElementById("resultDecision").innerText +=
    " The computer chose: " + CompDecision;
    
  if ((num === 3)) {
    innerscore += 0.5;
  }

  if ((num === 0)) {
    if (CompDecision === "Paper") {
      innerscore -= 1;
    } else if (CompDecision === "Scissors") {
      innerscore += 1;
    }
  }

  if ((num === 1)) {
    if (CompDecision === "Rock") {
      innerscore += 1;
    } else if (CompDecision === "Scissors") {
      innerscore -= 1;
    }
  }

  if ((num === 2)) {
    if (CompDecision === "Rock") {
      innerscore -= 1;
    } else if (CompDecision === "Paper") {
      innerscore = 1;
    }
    console.log(innerscore)
    innerscore = parseFloat(innerscore);
    document.getElementById("Score").innerHTML += innerscore;
  }
}
