function boxCreation() {
  let widthVal = document.getElementById("width").value;
  let heightVal = document.getElementById("height").value;
  let pixelWidth = widthVal * 10;
  let pixelHeight = heightVal * 10;
  var boxDiv = document.getElementById("box");
  let area = heightVal * widthVal;

  //Reset Box
  boxDiv.setAttribute("width", 0);
  boxDiv.setAttribute("height", 0);

  //Area Calc
  document.getElementById(
    "dimensions"
  ).innerHTML = `Your width is ${widthVal} ft, and your height is ${heightVal} ft.`;

  document.getElementById("area").innerHTML = `Your area is ${area} square feet.`
  //Process New Values
  boxDiv.style.width = pixelWidth +"px";
  boxDiv.style.height = pixelHeight +"px";
  boxDiv.style.border = "2px, solid"
}
