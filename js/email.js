"use strict";

const button = document.getElementById("button__submit");

button.addEventListener("click", function () {
  event.preventDefault();
  const input = document.getElementById("input__email").value;
  const validationMessage = document.getElementById("validationMessage");
  function emailValidation() {
    //Check the email with a regExp
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regExp.test(input)
      ? window.location.reload()
      : (validationMessage.textContent = "Oops! Please check your email");
  }

  emailValidation();
});

