let gameText = "";

function cowardEnding() {
  gameText +=
    "A sense of fear overwhelms you. You decide there is always tomorrow, and walk back home defeated. Maybe adventuring isn't your thing. <br><br>You Received the Coward Ending.";
  document.getElementById("gameText").innerHTML = gameText;
  alert(
    "You look into the darkness, and a sense of fear overwhelms you. You decide there is always tomorrow, and walk back home defeated. You Received the Coward Ending."
  );
} //ENDING
function cowardEndingTwo() {
  gameText +=
    "A sense of fear overwhelms you. You decide TO RUN AWAY BECAUSE SKELETONS ARE SCARY! Adventuring REALLY isn't your thing. You Received the True Coward Ending.";
  document.getElementById("gameText").innerHTML = gameText;
  alert(
    "A sense of fear overwhelms you. You decide TO RUN AWAY BECAUSE SKELETONS ARE SCARY! Adventuring REALLY isn't your thing. You Received the True Coward Ending."
  );
} //ENDING

function tryFight() {
  alert(
    "The skeletons seem confused when you rush them with your torch, and annoyed when you begin hitting them with it. “Maannn, this show has no moshing! Didn’t you see the ticket?” A skeleton (the one currently being berated by your torch) asks, showing you a tattered piece of parchment. Sure enough, it appears to be a ticket to a concert, and “NO MOSHING/VIOLENCE” is written in bold at the bottom. Two skeletons wearing black cloaks grab your arms, and throw you out of the dungeon. “Come back when you learn some manners!” One of them says, before closing the gate and locking it. You received the Bad Manners Ending."
  );
  gameText +=
    "The skeletons seem confused when you rush them with your torch, and annoyed when you begin hitting them with it. “Maannn, this show has no moshing! Didn’t you see the ticket?” A skeleton (the one currently being berated by your torch) asks, showing you a tattered piece of parchment. Sure enough, it appears to be a ticket to a concert, and “NO MOSHING/VIOLENCE” is written in bold at the bottom.<br>Two skeletons wearing black cloaks grab your arms, and throw you out of the dungeon. “Come back when you learn some manners!” One of them says, before closing the gate and locking it.<br><br>You received the Bad Manners Ending.";
  document.getElementById("gameText").innerHTML = gameText;
} //ENDING
function standGround() {
  alert(
    "The skeletons approach, and you take a defensive stance. “Weird dance moves, bro…” One of the skeletons says, fist bumping the hand you have extended towards the crowd.  “Did you not get a ticket or something? It’s okay maaan, we have open seats! Come on in!” The crowd leads you down the hallway into a giant… concert hall? The “clubs” you saw were actually instruments! You find a seat (in the front row!) and watch the performance you rudely interrupted. It is some of the best music you have ever heard, and you feel inspired in your own musical talent. Once the concert ends, the crowd disperses. You are the only person leaving the dungeon; all the skeletons shuffle deeper into the halls. These are adventures for another day, however. You receive the Spectator Ending."
  );
  gameText +=
    "The skeletons approach, and you take a defensive stance. “Weird dance moves, bro…” One of the skeletons says, fist bumping the hand you have extended towards the crowd.  “Did you not get a ticket or something? It’s okay maaan, we have open seats! Come on in!” The crowd leads you down the hallway into a giant… concert hall? The “clubs” you saw were actually instruments! <br><br>You find a seat (in the front row!) and watch the performance you rudely interrupted. It is some of the best music you have ever heard, and you feel inspired in your own musical talent. Once the concert ends, the crowd disperses. You are the only person leaving the dungeon; all the skeletons shuffle deeper into the halls. These are adventures for another day, however. You receive the Spectator Ending.";
  document.getElementById("gameText").innerHTML = gameText;
} //ENDING
function callOut() {
  let callOut = prompt(
    "“Hello?” You call down the hallway. Abruptly, the music stops. You hear the sound of rattling bones as skeletons approach you! There are a dozen or so of them walking down the hallway. Some of them are holding… clubs? It’s hard to tell in the dark… Do you… A: Attempt to fight, B: Stand your ground, or C: Run AWAYYYY!!!"
  );
  gameText +=
    "“Hello?” You call down the hallway. Abruptly, the music stops. You hear the sound of rattling bones as skeletons approach you! There are a dozen or so of them walking down the hallway. Some of them are holding… clubs? It’s hard to tell in the dark… <br><br>Do you… <br><br>A: Attempt to fight <br><br>B: Stand your ground <br><br>or <br><br>C: Run AWAYYYY!!!";
  if (callOut.toUpperCase() == "A") {
    tryFight();
  } else if (callOut.toUpperCase() == "B") {
    standGround();
  } else {
    cowardEndingTwo();
  }
} //ALL PATHS COMPLETED

function partyFoul() {
  alert(
    "You jump onto the state, and the crowd begins to boo you. I don't know what you were expecting, they didn't pay money to see YOU perform. Security quickly drags you out, and politely asks you to never pull a stunt like that again. 'You get a warning this time, but next time we won't be so kind.' You receive the Party Foul Ending."
  );
  gameText +=
    "You jump onto the state, and the crowd begins to boo you. I don't know what you were expecting, they didn't pay money to see YOU perform. Security quickly drags you out, and politely asks you to never pull a stunt like that again. 'You get a warning this time, but next time we won't be so kind.' <br><br>You receive the Party Foul Ending.";
  document.getElementById("gameText").innerHTML = gameText;
} //ENDING
function sitDown() {
  alert(
    "You find a seat (in the front row!) and watch the performance you managed to sneak into. It is some of the best music you have ever heard, and you feel inspired in your own musical talent. Once the concert ends, the crowd disperses. You are the only person leaving the dungeon; all the skeletons shuffle deeper into the halls. The skeleton sitting next to you high fives you as you part ways. 'You Gotta come back next time, maannnn!' These are adventures for another day, however. You receive the Fun Night Ending."
  );
  gameText +=
    "You find a seat (in the front row!) and watch the performance you managed to sneak into. It is some of the best music you have ever heard, and you can't wait to bring your friends next time. <br><br>Once the concert ends, the crowd disperses. You are the only person leaving the dungeon; all the skeletons shuffle deeper into the halls. The skeleton sitting next to you high fives you as you part ways. 'You Gotta come back next time, maannnn!' These are adventures for another day, however. <br><br>You receive the Fun Night Ending.";
  document.getElementById("gameText").innerHTML = gameText;
} //ENDING
function peek() {
  let peek = prompt(
    "Looking into the room, you see a band of skeletons performing for a small crowd. This room looks like it was only recently turned into a venue, and used to contain storage. In fact, the stage the band is on is created from wooden boxes. The words ‘Skully & the Bonebreakers’ are written on the front of the drum, and there are two lute players (though neither has a traditional lute, and one is much larger than the other), as well as a lead singer. The band finishes their song, to the roaring applause of the crowd. You can’t tell if that is due to the size of the crowd or the echo in the chamber. “Thank you, Thank you!” the lead singer says. “I hope you’re enjoying yourselves here at The Final Verse Tour!” “Psst!” A skeleton says in your direction. Looking over, you see him pointing towards an empty chair. A front row seat! Do you… A: Take a seat or B: Jump on stage!"
  );
  gameText =
    +"Looking into the room, you see a band of skeletons performing for a small crowd. This room looks like it was only recently turned into a venue, and used to contain storage. In fact, the stage the band is on is created from wooden boxes. The words ‘Skully & the Bonebreakers’ are written on the front of the drum, and there are two guitarists, as well as a lead singer. <br><br>The band finishes their song, to the roaring applause of the crowd. You can’t tell if that is due to the size of the crowd or the echo in the chamber. <br><br>“Thank you, Thank you!” the lead singer says. “I hope you’re enjoying yourselves here at The Final Verse Tour!” <br><br>“Psst!” A skeleton says in your direction. Looking over, you see him pointing towards an empty chair. A front row seat! <br><br>Do you… <br><br>A: Take a seat <br><br>or <br><br>B: Jump on stage!";
  if (peek.toUpperCase() == "A") {
    sitDown();
  } else {
    partyFoul();
  }
} //ALL PATHS COMPLETED

function make() {
  alert(
    "You manage to find a ladder, as well as a couple broken pieces of wood. You put the ladder on two crates, and you start playing it like a xylophone! The band backs you up with their instruments, and the crowd roars at your unique style. After the song, Skully pats you on the back and laughs. ‘Man, you got real talent. I wish you could jam with us more, but our band is only for bards of the past. But, till you can join us, take this.’ He slides a piece of bone into your hand, carved into a guitar pick. ‘You’re gonna be a star, now get out there and make some music!’ You Received the Rockstar Ending!"
  );
  gameText +=
    "You manage to find a ladder, as well as a couple broken pieces of wood. You put the ladder on two crates, and you start playing it like a xylophone! The band backs you up with their instruments, and the crowd roars at your unique style. <br><br>After the song, Skully pats you on the back and laughs. ‘Man, you got real talent. I wish you could jam with us more, but our band is only for bards of the past. But, till you can join us, take this.’ He slides a piece of bone into your hand, carved into a guitar pick. ‘You’re gonna be a star, now get out there and make some music!’ <br><br>You Received the Rockstar Ending! <br><br>Congrats! This is my favorite (and therefore the true) ending! I hope you liked my game :)";
  document.getElementById("gameText").innerHTML = gameText;
} //BEST ENDING
function look() {
  alert(
    "You start looking on the stage for an instrument, and you see an old lute in one of the crates. You’re proficient with the lute, so you pick it up, to the roar of the crowd. You play with the band, and things are going great! You work the lute so much that the strings snap, and you throw it out into the crowd before taking your bow. The crowd loves you, and you walk back to your seat content. “See you next week, heartbeat!” Skully shouts. Hey, ‘Heartbeat and the ribcage’’ doesn’t sound half bad… You received the Bandmate Ending!"
  );
  gameText +=
    "You start looking on the stage for an instrument, and you see an old lute in one of the crates. You’re proficient with the lute, so you pick it up, to the roar of the crowd. You play with the band, and things are going great! <br><br>You work the lute so much that the strings snap, and you throw it out into the crowd before taking your bow. The crowd loves you, and you walk back to your seat elated. “See you next week, heartbeat!” Skully shouts. Hey, ‘Heartbeat and the ribcage’’ doesn’t sound half bad… <br><br>You received the Bandmate Ending!";
  document.getElementById("gameText").innerHTML = gameText;
} //ENDING
function strut() {
  let strut = prompt(
    "You strut into the room, confidently sitting down next to a nice looking skeleton in the front row. “Have you heard of these guys before, maaan?” He asks. “They’re pretty… underground. Hehe.” This room looks like it was only recently turned into a venue, and used to contain storage. In fact, the stage the band is on is created from wooden boxes. The words ‘Skully & the Bonebreakers’ are written on the front of the drum. The band finishes their song and the singer, who you assume is Skully, points a bony finger at you. ‘Woah, dude! I haven’t seen a human in like, forever! Get up here bro, you gotta jam with us!’ You climb onto the rickety stage, and hear a round of bony applause. Skully looks at you, eyes beaming with Bardic Inspiration. ‘Hey man, you got this. You have an instrument?’ You do not… Do you… A: Look for one or B: Make one"
  );
  gameText +=
    "You strut into the room, confidently sitting down next to a nice looking skeleton in the front row. “Have you heard of these guys before, maaan?” He asks. “They’re pretty… underground. Hehe.” <br><br>This room looks like it was only recently turned into a venue, and used to contain storage. In fact, the stage the band is on is created from wooden boxes. The words ‘Skully & the Bonebreakers’ are written on the front of the drum. The band finishes their song and the singer, who you assume is Skully, points a bony finger at you. <br><br>‘Woah, dude! I haven’t seen a human in like, forever! Get up here bro, you gotta jam with us!’ You climb onto the rickety stage, and hear a round of bony applause. Skully looks at you, eyes beaming with Bardic Inspiration. ‘Hey man, you got this. You have an instrument?’ You do not… <br><br>Do you… <br><br>A: Look for one <br><br>or <br><br>B: Make one";
  if (strut.toUpperCase() == "A") {
    look();
  } else {
    make();
  }
} //ALL PATHS COMPLETED
function sneakIn() {
  let sneakIn = prompt(
    "You sneak down the hallway, with the music growing louder the deeper into the dungeon you go. Eventually, the hallway opens into a large hall, and it is clear the music is being performed there. You see rows of chairs, some of which have skeletons in them! Even worse, these piles of bones are alive! You haven’t been spotted… yet. Do you... A: Peek into the room or B: Walk in with confidence"
  );
  gameText +=
    "You sneak down the hallway, with the music growing louder the deeper into the dungeon you go. Eventually, the hallway opens into a large hall, and it is clear the music is being performed there. You see rows of chairs, some of which have skeletons in them! Even worse, these piles of bones are alive! You haven’t been spotted… yet.<br><br>Do you...<br><br> A: Peek into the room <br><br>or <br><br>B: Walk in with confidence";
  if (sneakIn.toUpperCase() == "A") {
    peek();
  } else {
    strut();
  }
} //ALL PATHS COMPLETED

function enterDungeon() {
  let enterDungeon = prompt(
    "You grab your torch (did I mention you had a torch?) and begin the descent into the dungeon. With every step, you feel the natural rhythm of the dungeon; your steps reverberating into the dark hall in front of you. You hear instruments down the hall? Or maybe it’s just your imagination. After all, you should be the only one down here… Do you… A: Call out down the hallway B: Creep sneakily down the hall or C: Run out of the dungeon"
  );
  gameText +=
    "You grab your torch (did I mention you had a torch?) and begin the descent into the dungeon. With every step, you feel the natural rhythm of the dungeon; your steps reverberating into the dark hall in front of you. You hear instruments down the hall? Or maybe it’s just your imagination. After all, you should be the only one down here… Do you… <br><br>A: Call out down the hallway <br><br>B: Creep sneakily down the hall<br><br> or<br><br>C: Run out of the dungeon<br><br>";
  if (enterDungeon.toUpperCase() == "A") {
    callOut();
  } else if (enterDungeon.toUpperCase() == "B") {
    sneakIn();
  } else {
    cowardEnding();
  }
}

function startGame() {
  if (gameText!="") {
    gameText = ""
  }
  var user = prompt("Welcome to my adventure game. Please enter your name: ");
  window.confirm("Welcome, " + user + "! Are you ready?");
  gameText +=
    "<br><br>" +
    user +
    "'s Baric Adventure! <br><br>You find yourself at the ancient, rusted gate of a dungeon. Legends have told of apprentice bards entering, and leaving the dungeon masterful musicians. However, many years have passed since anyone dared brave the decrepit halls, as the last group to enter the dungeon never returned. You peer through the gate, and see nothing but darkness and a crumbling stone staircase. The gate opens easily, and you hesitate at the top of the stairs… <br><br>Do you… <br><br>A: Enter the dungeon <br><br>or <br><br>B: Leave (Like a Coward)<br><br>";
  let start = prompt(
    "You find yourself at the ancient, rusted gate of a dungeon. Legends have told of apprentice bards entering, and leaving the dungeon masterful musicians. However, many years have passed since anyone dared brave the decrepit halls, as the last group to enter the dungeon never returned. You peer through the gate, and see nothing but darkness and a crumbling stone staircase. The gate opens easily, and you hesitate at the top of the stairs… Do you… A: Enter the dungeon or B: Leave (Like a Coward) [Type A or B to confirm your answer]"
  );

  if (start.toUpperCase() == "B") {
    cowardEnding();
  } else {
    enterDungeon();
  }
}
