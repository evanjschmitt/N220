function calcArea() {
  let num1 = document.getElementById("principle").value;
  let num2 = document.getElementById("interestRate").value;
  let num3 = document.getElementById("time").value;
  num2 = num2 / 100;
  var totalInterest = num1 * (num2) * parseFloat(num3).toFixed(2) ;

  // document.getElementById("answer").innerHTML = totalInterest;
  document.getElementById("answer").innerHTML =
    "With a principle of $" +
    num1 +
    " and an interest rate of " +
    num2 * 100 +
    "% over a period of " +
    num3 +
    " years, your total interest is $" +
    totalInterest.toFixed(2) +
    ", and your grand total is $" +
    Number(parseFloat(num1) + parseFloat(totalInterest)).toFixed(2) + "!";
}
