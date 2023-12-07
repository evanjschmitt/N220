function calculate() {
  let numOne = parseFloat(document.getElementById("numOne").value);
  let numTwo = parseFloat(document.getElementById("numTwo").value);
  let operation = document.getElementById("operation").value;
  let result;
  let operationSym;
  switch (operation) {
    case "add":
      result = numOne + numTwo;
      operationSym = " + ";
      break;
    case "sub":
      result = numOne - numTwo;
      operationSym = " - ";
      break;
    case "mult":
      result = numOne * numTwo;
      operationSym = " x ";
      break;
    case "div":
      result = numOne / numTwo;
      operationSym = " / ";
      break;
    default:
      console.log("ERROR: INVALID OPERATION");
      break;
  }
  document.getElementById(
    "resultsText"
  ).innerHTML = `${numOne}${operationSym}${numTwo} = ${result}`;
}
