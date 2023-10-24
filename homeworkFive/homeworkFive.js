


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