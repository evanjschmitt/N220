function validateForm() {
  let validForm = true;
  //Validate Zip
  let zipVal = document.getElementById("zip").value;
  let validZip = /^[0-9]{5}$/;
  if (!validZip.test(zipVal)) {
    document.getElementById("zipError").innerText =
      "Your zip code must be 5 digits.";
    validForm = false;
  } else {
    document.getElementById("zipError").innerText = "";
  }

  //Validate Phone
  let phoneVal = document.getElementById("phone").value;
  let validPhone = /^[1]?[(]?([0-9]{3})[)]?[- .]?(\d{3})[- .]?(\d{4})$/;
  if (!validPhone.test(phoneVal)) {
    document.getElementById("phoneError").innerText =
      "Please enter your phone number in this format: XXX-XXX-XXXX";
    validForm = false;
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  //Validate Email
  let emailVal = document.getElementById("myEmail").value;
  let validEmail = /^([a-zA-Z0-9!#$%.]+)@([a-zA-Z0-9-]+).([A-Za-z]{2,3})$/;
  if (!validEmail.test(emailVal)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address";
    validForm = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }
  //Check For Remaining Values
  let nameVal = document.getElementById("myName").value;
  let addressVal = document.getElementById("address").value;
  let cityVal = document.getElementById("city").value;

  if (nameVal == "" || cityVal == "" || addressVal == "") {
    validForm = false;
    console.log("Name, Address, or City value empty");
  }

  if (validForm) {
    let items = document.querySelectorAll("ul li");
    items[0].innerText += nameVal;
    items[1].innerText += addressVal;
    items[2].innerText += cityVal;
    items[3].innerText += zipVal;
    items[4].innerText += phoneVal;
    items[5].innerText += emailVal;

    document.getElementsByTagName("div")[0].style.display = "block";
  }
}

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    //Stop Form Default
    event.preventDefault();
    //Validation
    validateForm();
  });
