import generateRandomString from "./index.js";

const SingUp = document.querySelector(".SingUp");
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const EMail = document.getElementById("EMail");
const PasswordReg = document.getElementById("PasswordReg");
const LogInMenuClick = document.querySelector(".LogInMenuClick");
const EMailOrReadersCard = document.getElementById("EMailOrReadersCard");
const passwordLogIn = document.getElementById("passwordLogIn");
const nameProfile = document.querySelector(".nameProfile");
const inputName = document.querySelector(".inputName");
const avatar = document.querySelector(".avatar");
const FirstNameChar = localStorage.getItem("FirstName");
const LastNameChar = localStorage.getItem("LastName");
SingUp.addEventListener("click", function () {
  const generateRandomStringLocal = generateRandomString(8);
  localStorage.setItem("FirstName", FirstName.value);
  localStorage.setItem("LastName", LastName.value);
  localStorage.setItem("EMail", EMail.value);
  localStorage.setItem("Password", PasswordReg.value);
  localStorage.setItem("generateRandomStringLocal", generateRandomStringLocal);
  localStorage.setItem("VisitsClient", 0);
});

// Присваивание крандомного номера клиента

const cardnamber4 = document.querySelector(".card__number2");
const inputNumbers = document.querySelector(".inputNumbers");

window.addEventListener("load", () => {
  if (localStorage.getItem("keyEnter") == 0);
  else {
    cardnamber4.textContent = localStorage.getItem("generateRandomStringLocal");
    inputNumbers.placeholder = localStorage.getItem(
      "generateRandomStringLocal"
    );
    VisitsClient.textContent = Number(localStorage.getItem("VisitsClient"));
    cards__number5.textContent = Number(localStorage.getItem("VisitsClient"));
  }
});

//Конец присваивания

const VisitsClient = document.querySelector(".VisitsClient");
const cards__number5 = document.querySelector(".cards__number5");

LogInMenuClick.addEventListener("click", function () {
  if (
    EMailOrReadersCard.value == localStorage.getItem("EMail") &&
    passwordLogIn.value == localStorage.getItem("Password")
  ) {
    localStorage.setItem("keyEnter", 1);
    localStorage.setItem(
      "VisitsClient",
      Number(localStorage.getItem("VisitsClient")) + 1
    );
  }
});

// Имя и фамилия пользователя с регистрацией + 2 первые буквы

window.addEventListener("load", () => {
  if (localStorage.getItem("keyEnter") == 0);
  else {
    nameProfile.textContent =
      localStorage.getItem("FirstName") +
      " " +
      localStorage.getItem("LastName");
  }
});
window.addEventListener("load", () => {
  if (localStorage.getItem("keyEnter") == 0);
  else {
    inputName.placeholder =
      localStorage.getItem("FirstName") +
      " " +
      localStorage.getItem("LastName");
  }
});

//  конец Имя и фамилия пользователя с регистрацией

// Первые буквы имя фамилия

window.addEventListener("load", () => {
  if (localStorage.getItem("keyEnter") == 0);
  else {
    avatar.textContent = FirstNameChar.charAt(0) + LastNameChar.charAt(0);
  }
});

// Конец первые буквы имя фамилия
