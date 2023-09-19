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
var thisMonth = (today.getMonth() + 1);
var bdayMonth = 4
if(thisMonth==bdayMonth) {
    document.getElementById('birthday').innerHTML = "It's your birthday month!"
} else {
    document.getElementById('birthday').innerHTML = "Not your birthday month QUITE yet..."
}