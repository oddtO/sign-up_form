let password = document.querySelector("#password");

let passwordConfirm = document.querySelector("#password-confirm");
password.addEventListener("focus", function (event) {
  passwordConfirm.value = "";
  passwordConfirm.classList.remove("password-not-match");
});

passwordConfirm.addEventListener("input", () => {
  if (
    passwordConfirm.value != password.value &&
    !passwordConfirm.validity.valueMissing
  ) {
    passwordConfirm.classList.add("password-not-match");
    passwordConfirm.setCustomValidity("passwords do not match");
    password.classList.add("password-not-match");
  } else {
    passwordConfirm.classList.remove("password-not-match");
    passwordConfirm.setCustomValidity("");
    password.classList.remove("password-not-match");
  }
});
