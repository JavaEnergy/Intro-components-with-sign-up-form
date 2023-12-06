const FirstNameInput = document.getElementById("FirstNameInput");
const LastNameInput = document.getElementById("LastNameInput");
const EmailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");

const FirstNameIcon = document.getElementById("FirstNameIcon");
const LastNameIcon = document.getElementById("LastNameIcon");
const EmailIcon = document.getElementById("EmailIcon");
const PasswordIcon = document.getElementById("PasswordIcon");

const FirstNameError = document.getElementById("FirstNameError");
const LastNameError = document.getElementById("LastNameError");
const EmailError = document.getElementById("EmailError");
const PasswordError = document.getElementById("PasswordError");

const Button = document.getElementById("Button");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Button.addEventListener("click", function () {
  if (FirstNameInput.value.trim() === "") {
    FirstNameIcon.style.display = "inline";
    FirstNameError.style.display = "block";
  } else {
    FirstNameIcon.style.display = "none";
    FirstNameError.style.display = "none";
  }
});

Button.addEventListener("click", function () {
  if (LastNameInput.value.trim() === "") {
    LastNameIcon.style.display = "inline";
    LastNameError.style.display = "block";
  } else {
    LastNameIcon.style.display = "none";
    LastNameError.style.display = "none";
  }
});
Button.addEventListener("click", function () {
  if (PasswordInput.value.trim() === "") {
    PasswordIcon.style.display = "inline";
    PasswordError.style.display = "block";
  } else {
    PasswordIcon.style.display = "none";
    PasswordError.style.display = "none";
  }
});

function testmail(arg) {
  if (emailRegex.test(arg.value)) {
    EmailError.style.display = "none";
    EmailIcon.style.display = "none";
  } else {
    EmailError.style.display = "block";
    EmailIcon.style.display = "inline";
  }
}
Button.addEventListener("click", function () {
  testmail(EmailInput);
});
