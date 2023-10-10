var tool;

function leaveRoom() {
  alert("You leave the dungeon. What a THRILLING adventure.");
}
function enterRoom() {
  alert("You enter the room, and you see a skeleton! Playing the xylophone!");
  if (tool.toLowerCase() == "shovel") {
    alert("You jam out with the skeleton, hitting the wall to make a beat!");
  } else if (tool.toLowerCase() == "flashlight") {
    alert("You shine the light on him, and he plays even better than before!");
  } else {
    alert(
      "You put the ladder on two crates, and you start playing it like a xylophone too! You have a great time!"
    );
  }
}

function startGame() {
  var user = prompt("Welcome to my adventure game. Please enter your name: ");
  window.confirm("Welcome, " + user + "! Are you ready?");
  tool = prompt(
    "To begin your adventure, select a tool: Shovel, Ladder, or Flashlight"
  );
  let room = prompt(
    "You walk through the dungeon, and hear bones a'rattling from a room around the corner. Do you Enter or Leave?"
  );

  if (room.toLowerCase() == "leave") {
    leaveRoom();
  } else {
    enterRoom();
  }
}
