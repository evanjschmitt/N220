//Add Trash Can
var i = 0;
var listItems = document.querySelectorAll("#codeBox li");
var totalItems = listItems.length;
var image = document.createElement("img");
console.log(totalItems)
for (i; totalItems > i; i++) 
{console.log("hello");
  

  image.setAttribute(
    "src",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"
  );
  image.setAttribute("class", "listIcon");
  listItems[i].appendChild(image);
  console.log(image);
}
