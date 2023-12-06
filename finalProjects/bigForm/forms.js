function validateForm() {
  let validForm = true;
  document.getElementsByClassName("errorText").innerText = "";
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

  //Validate Password
  let passwordVal = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("passwordCon").value;
  let validPass = /^.{8,10}$/;
  if (!validPass.test(passwordVal)) {
    validForm = false;
    document.getElementById("passwordError").innerText =
      "Your password must be between 8 and 10 characters";
  } else {
    document.getElementById("passwordError").innerText = "";
    if (passwordVal === passwordConfirm) {
      document.getElementById("passwordConError").innerText = "";
    } else {
      validForm = false;
      document.getElementById("passwordConError").innerText =
        "Your passwords must match";
    }
  }

  //Validate State
  let validStates =
    /^(?:AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)$/i;
  let stateVal = document.getElementById("state").value;
  if (!validStates.test(stateVal)) {
    validForm = false;
    document.getElementById("stateError").innerText =
      "Please use proper state abbreviations";
  } else {
    document.getElementById("stateError").innerText = "";
  }
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
  let validPhone = /^([0-9]{3})+[-](\d{3})+[-](\d{4})$/;
  if (!validPhone.test(phoneVal)) {
    document.getElementById("phoneError").innerText =
      "Please enter your phone number in this format: XXX-XXX-XXXX";
    validForm = false;
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  //Validate Card Type
  let cardType = document.getElementById("cardType").value;
  // console.log(cardType)
  if (cardType == "") {
    validForm = false;
    document.getElementById("cardTypeError").innerText =
      "Please select a card type";
  }
  //Validate Card Number
  let cardNum = document.getElementById("cardNum").value;
  let validCard = /^([0-9]{4})+[-](\d{4})+[-](\d{4})+[-](\d{4})$/;
  if (!validCard.test(cardNum)) {
    validForm = false;
    document.getElementById("cardError").innerText =
      "Please use the following format: XXXX-XXXX-XXXX";
  }
  // Validate Experation Date
  let expDate = document.getElementById("expDate").value;
  let validExp = /^[0-1]+[0-9]+\/+[0-9]{4}/;
  if (!validExp.test(expDate)) {
    validForm = false;
    document.getElementById("expError").innerText = "Please use mm/yyyy format";
  }

  //Check For Remaining Values
  let firstNameVal = document.getElementById("firstName").value;
  let lastNameVal = document.getElementById("lastName").value;
  let addressVal = document.getElementById("address").value;
  let cityVal = document.getElementById("city").value;

  if (
    firstNameVal == "" ||
    lastNameVal == "" ||
    cityVal == "" ||
    addressVal == ""
  ) {
    validForm = false;
    console.log("Name, Address, or City value empty");
  }
}

document.getElementsByTagName("form")[0].addEventListener(
  "submit",
  function (event) {
    //Stop Form Default
    event.preventDefault();
    //Validation
    validateForm();
  },
);
