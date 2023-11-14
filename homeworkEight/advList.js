//Add Trash Can
var listItems = document.querySelectorAll("codeList li");
var totalItems = listItems.length;
let i = 0;
for (i; totalItems > i; i++) {
  var image = document.createElement("img");
  image.setAttribute(
    'src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"'
  );
  image.classList.add("listIcon");
  listItems[i].appendChild(image);
  console.log(image);
  console.log("hello");
}
