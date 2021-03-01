"use strict";
//vars
let refreshCaptcha = document.querySelector("#refresh");
let formValidator = document.querySelector("#Button1");
var result = document.getElementById("result");
var txtInput = document.querySelector("#txtInput");

//events
document.addEventListener("onload", generateCaptcha);
refreshCaptcha.addEventListener("click", generateCaptcha);
formValidator.addEventListener("click", CheckValidCaptcha);

//functions
function generateCaptcha() {
  var alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var i;
  for (i = 0; i < 4; i++) {
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var code = a + "" + b + "" + "" + c + "" + d;
  document.getElementById("mainCaptcha").value = code;
  result.innerHTML = "";
  txtInput.value = "";
}

function CheckValidCaptcha() {
  var string1 = removeSpaces(document.getElementById("mainCaptcha").value);
  var string2 = removeSpaces(txtInput.value);
  if (string1 === string2) {
    result.innerHTML = "Form is validated Successfully";
    result.className = "success";
    //alert("Form is validated Successfully");
    return true;
  } else {
    result.innerHTML = "Please enter a valid captcha.";
    result.className = "error";
    //alert("Please enter a valid captcha.");
    return false;
  }
}

function removeSpaces(string) {
  return string.split(" ").join("");
}
