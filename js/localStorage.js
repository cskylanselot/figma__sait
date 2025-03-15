import removeClasslist from "./index.js";

const SingUp = document.querySelector(".SingUp");
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const EMail = document.getElementById("EMail");
const PasswordReg = document.getElementById("PasswordReg");
const LogInMenuClick = document.querySelector(".LogInMenuClick");
const EMailOrReadersCard = document.getElementById("EMailOrReadersCard");
const passwordLogIn = document.getElementById("passwordLogIn");

// localStorage.setItem("keyEnter", 0);
SingUp.addEventListener("click", function () {
  localStorage.setItem("FirstName", FirstName.value);
  localStorage.setItem("LastName", LastName.value);
  localStorage.setItem("EMail", EMail.value);
  localStorage.setItem("Password", PasswordReg.value);
});

LogInMenuClick.addEventListener("click", function () {
  if (
    (EMailOrReadersCard.value == localStorage.getItem("EMail"),
    passwordLogIn.value == localStorage.getItem("Password"))
  ) {
    localStorage.setItem("keyEnter", 1);
  }
});
