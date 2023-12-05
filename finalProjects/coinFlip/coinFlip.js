var headCount = 0;
var tailCount = 0;
var coinImg =document.getElementById("largeImg");
function flipCoin() {
  var coinVal = Math.floor(Math.random() * 2);
  var table = document.getElementById("table");
  var newRow = document.createElement("tr");
  var resultNumber = document.createElement("th");
  var result = document.createElement("th");

  console.log(coinVal);
  if (coinVal == 1) {
    console.log("Heads");
    resultNumber.textContent = table.children.length;
    result.textContent = "Heads";
    headCount++;
    coinImg.setAttribute("src", "https://m.media-amazon.com/images/I/61jgdwhpSuL._AC_UF894,1000_QL80_.jpg");
  } else {
    console.log("Tails");
    resultNumber.textContent = table.children.length;
    result.textContent = "Tails";
    tailCount++;
    coinImg.setAttribute("src", "https://m.media-amazon.com/images/I/51bcZy+HZpL.jpg");
  }
  console.log(coinImg);
  newRow.appendChild(resultNumber);
  newRow.appendChild(result);
  table.appendChild(newRow);
  document.getElementById(
    "ratio"
  ).innerHTML = `The current ratio is ${headCount} heads to  ${tailCount} tails.`;
}
