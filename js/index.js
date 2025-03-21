export default generateRandomString;

// Для нормальной роботы якоря

document
  .querySelector(".modal__Login")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = window.location.pathname;
  });
document
  .querySelector(".modal__Register")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = window.location.pathname;
  });

//

// Функция для открытия бургер меню

const active = document.querySelector(".burger__menu");

const element = document.getElementById("elementBody");

const navOpen = document.getElementById("burger__id");

// active.addEventListener("click", function () {
//   active.classList.toggle("active");
//   if (imgLog.classList.contains("LogInActive")) {
//     imgLog.classList.remove("LogInActive");
//     LogInOpen.style.top = "-9rem";
//   }
//   if (active.classList.contains("active")) {
//     navOpen.style.top = "5.625rem";
//     element.style.overflowY = "hidden";
//   } else {
//     navOpen.style.top = "-30rem";
//     element.style.overflowY = "visible";
//   }
// });

active.addEventListener("click", burgerMenu);
function burgerMenu() {
  active.classList.toggle("active");
  if (imgLog.classList.contains("LogInActive")) {
    imgLog.classList.remove("LogInActive");
    LogInOpen.style.top = "-9rem";
  }
  if (active.classList.contains("active")) {
    navOpen.style.top = "5.625rem";
    element.style.overflowY = "hidden";
  } else {
    navOpen.style.top = "-30rem";
    element.style.overflowY = "visible";
  }
}
//Функция для открытия бургер меню конец

// LogIn menu
const LogInOpen = document.querySelector(".LogIn");
const LogOutBtn = document.querySelector(".LogOutBtn");
const imgLog = document.querySelector(".imgLogMenu");

LogOutBtn.addEventListener("click", function () {
  localStorage.setItem("keyEnter", 0);
  location.reload();
});

imgLog.addEventListener("click", function () {
  if (localStorage.getItem("keyEnter") == 1) {
    imgLog.classList.toggle("LogInActive");
    if (active.classList.contains("active")) {
      active.classList.remove("active");
      navOpen.style.top = "-30rem";
    }
    if (imgLog.classList.contains("LogInActive")) {
      myProfileOpen.style.top = "5rem";
    } else {
      myProfileOpen.style.top = "-9rem";
    }
  } else {
    imgLog.classList.toggle("LogInActive");
    if (active.classList.contains("active")) {
      active.classList.remove("active");
      navOpen.style.top = "-30rem";
    }
    if (imgLog.classList.contains("LogInActive")) {
      LogInOpen.style.top = "5rem";
    } else {
      LogInOpen.style.top = "-9rem";
    }
  }
});
// Конец LogIn menu

// My profile menu

const MyProfileClick = document.querySelectorAll(".MyProfileClick");
const MyProfile = document.querySelector(".modal__profile");
const myProfileOpen = document.querySelector(".LogOut");
const closeBtn = document.querySelector(".close__btn");

MyProfileClick.forEach(function (buyy) {
  buyy.addEventListener("click", function () {
    buyy.classList.toggle("MyProfileClickActive");
    containerGray.style.visibility = "visible";
    containerGray.style.opacity = "0.8";
    if (buyy.classList.contains("MyProfileClickActive")) {
      MyProfile.style.visibility = "visible";
      MyProfile.style.opacity = "1";
    } else {
      MyProfile.style.opacity = "0";
      MyProfile.style.visibility = "hidden";
    }
    if (buyy.classList.contains("MyProfileClickActive")) {
      myProfileOpen.style.top = "-9rem";
    }
  });
});

closeBtn.addEventListener("click", function () {
  containerGray.style.visibility = "hidden";
  containerGray.style.opacity = "0";

  closeBtn.classList.toggle("closeBtnActive");

  if (closeBtn.classList.contains("closeBtnActive")) {
    removeClasslist();
  }
});

// Конец My profile menu

// Coppy Card number My profile menu

const cardnamber2 = document.querySelector(".card__number2");
const coppyBtn = document.querySelector(".coppyBtn");

coppyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(cardnamber2.textContent);
});

// End Coppy Card number My profile menu

// Генератор случайных числе coppyBtn

const cardnamber3 = document.querySelector(".card__number2");

function generateRandomString(sumString) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  let randomString = "";

  const firstCharIndex = Math.floor(Math.random() * letters.length);
  randomString += letters[firstCharIndex];

  for (let i = 1; i < sumString; i++) {
    const numberIndex = Math.floor(Math.random() * numbers.length);
    randomString += numbers[numberIndex];
  }
  return randomString;
}
window.addEventListener("load", () => {
  const randomString = generateRandomString(8);
  cardnamber3.textContent = randomString;
});

// Конец генератора случайных чисел

// Log menu и Register menu

const LogInClick = document.querySelectorAll(".LogInClick");
const LogInClick2 = document.querySelector(".LogInClick2");
const modalLogin = document.querySelector(".modal__Login");
const RegisterClick = document.querySelectorAll(".RegisterClick");
const RegisterClick2 = document.querySelector(".RegisterClick2");
const modalRegister = document.querySelector(".modal__Register");
const krestik = document.querySelector(".krestik");
const krestikk = document.querySelector(".krestikk");
const krestikkk = document.querySelector(".krestikkk");
const buyBooks = document.querySelectorAll(".favorites__button");
const containerGray = document.querySelector(".containerGray");
const containerGrayEnd = document.querySelector(".containerGrayEnd");

function removeClasslist() {
  krestikk.classList.remove("krestikActive");
  imgLog.classList.remove("LogInActive");
  krestik.classList.remove("krestikActive");
  LogInClick.forEach(function (LogIn) {
    LogIn.classList.remove("LogInClickActive");
  });
  RegisterClick.forEach(function (Register) {
    Register.classList.remove("RegisterClickActive");
  });
  containerGrayEnd.classList.remove("containerGrayEndActive");
  closeBtn.classList.remove("closeBtnActive");
  MyProfileClick.forEach(function (buyy) {
    buyy.classList.remove("MyProfileClickActive");
  });
  buyBooks.forEach(function (buy) {
    buy.classList.remove("buyActive");
  });
  modalBuyACard.style.visibility = "hidden";
  modalBuyACard.style.opacity = "0";
  MyProfile.style.visibility = "hidden";
  MyProfile.style.opacity = "0";
  modalRegister.style.visibility = "hidden";
  modalRegister.style.opacity = "0";
  modalLogin.style.visibility = "hidden";
  modalLogin.style.opacity = "0";
  containerGray.style.visibility = "hidden";
  containerGray.style.opacity = "0";
}

LogInClick.forEach(function (LogIn) {
  LogIn.addEventListener("click", function () {
    LogIn.classList.toggle("LogInClickActive");
    containerGray.style.visibility = "visible";
    containerGray.style.opacity = "0.8";
    if (LogIn.classList.contains("LogInClickActive")) {
      modalLogin.style.visibility = "visible";
      modalLogin.style.opacity = "1";
    } else {
      modalLogin.style.opacity = "0";
      modalLogin.style.visibility = "hidden";
    }
    if (LogIn.classList.contains("LogInClickActive")) {
      LogInOpen.style.top = "-9rem";
    }
  });
});

LogInClick2.addEventListener("click", function () {
  LogInClick2.classList.toggle("LogInClickActive");
  containerGray.style.visibility = "visible";
  containerGray.style.opacity = "0.8";
  if (LogInClick2.classList.contains("LogInClickActive")) {
    modalLogin.style.visibility = "visible";
    modalLogin.style.opacity = "1";
    modalRegister.style.visibility = "hidden";
    modalRegister.style.opacity = "0";
    LogInOpen.style.top = "-9rem";
  } else {
    modalLogin.style.opacity = "0";
    modalLogin.style.visibility = "hidden";
  }
  RegisterClick2.classList.remove("RegisterClickActive");
});
RegisterClick.forEach(function (Register) {
  Register.addEventListener("click", function () {
    Register.classList.toggle("RegisterClickActive");
    containerGray.style.visibility = "visible";
    containerGray.style.opacity = "0.8";
    if (Register.classList.contains("RegisterClickActive")) {
      modalRegister.style.visibility = "visible";
      modalRegister.style.opacity = "1";
    } else {
      modalRegister.style.visibility = "hidden";
      modalRegister.style.opacity = "0";
    }
    if (Register.classList.contains("RegisterClickActive")) {
      LogInOpen.style.top = "-9rem";
    }
  });
});
RegisterClick2.addEventListener("click", function () {
  RegisterClick2.classList.toggle("RegisterClickActive");
  containerGray.style.visibility = "visible";
  containerGray.style.opacity = "0.8";
  if (RegisterClick2.classList.contains("RegisterClickActive")) {
    modalRegister.style.visibility = "visible";
    modalRegister.style.opacity = "1";
    modalLogin.style.opacity = "0";
    modalLogin.style.visibility = "hidden";
    LogInOpen.style.top = "-9rem";
  } else {
    modalRegister.style.visibility = "hidden";
    modalRegister.style.opacity = "0";
  }
  LogInClick2.classList.remove("LogInClickActive");
});

krestik.addEventListener("click", function () {
  containerGray.style.visibility = "hidden";
  containerGray.style.opacity = "0";

  buyBooks.forEach((item) => {
    item.classList.remove("buyActive");
  });
  krestik.classList.toggle("krestikActive");
  if (krestik.classList.contains("krestikActive")) {
    removeClasslist();
  }
});
krestikk.addEventListener("click", function () {
  containerGray.style.visibility = "hidden";
  containerGray.style.opacity = "0";

  krestikk.classList.toggle("krestikActive");

  if (krestikk.classList.contains("krestikActive")) {
    removeClasslist();
  }
});

krestikkk.addEventListener("click", function () {
  removeClasslist();
});

containerGrayEnd.addEventListener("click", function () {
  containerGray.style.visibility = "hidden";
  containerGray.style.opacity = "0";

  containerGrayEnd.classList.toggle("containerGrayEndActive");

  if (containerGrayEnd.classList.contains("containerGrayEndActive")) {
    removeClasslist();
  }
});
// Конец Log menu и Register menu

// Первая буква заглавная в регистр меню

const input = document.querySelectorAll(".inputRegister");

input.forEach(function (inputName) {
  inputName.addEventListener("input", function () {
    this.value = this.value.replace(/\s/g, "");
    if (this.value.length > 0) {
      this.value =
        this.value[0].toUpperCase() + this.value.slice(1).toLowerCase();
    }
  });
});

//Конец функции для первой заглавной буквы

// Поле password

const PasswordReg = document.getElementById("PasswordReg");
const passwordLogIn = document.getElementById("passwordLogIn");
const errorMessage = document.querySelector(".errorMessage");
const errorMessage1 = document.querySelector(".errorMessage1");

modalRegister.addEventListener("submit", function () {
  localStorage.setItem("keyBooks", 0);
  if (PasswordReg.value.length < 8) {
    errorMessage.style.display = "block";
  }
});

// Конец поля password

// Проверка существования пользователя через localStorage
const EMailOrReadersCardLS = document.getElementById("EMailOrReadersCard");
const passwordLogInLS = document.getElementById("passwordLogIn");
const LogInMenuClickk = document.querySelector(".LogInMenuClick");

LogInMenuClickk.addEventListener("click", function (event) {
  if (
    EMailOrReadersCardLS.value == localStorage.getItem("EMail") &&
    passwordLogInLS.value == localStorage.getItem("Password")
  ) {
  } else {
    errorMessage1.style.display = "block";
    event.preventDefault();
  }
});

// Конец Проверки существования пользователя через localStorage

// Поле только е-маил

const emailForm = document.querySelector(".modal__Register");
const EMail = document.getElementById("EMail");

emailForm.addEventListener("submit", function () {
  const emailPattern = /.+@example.com/;
  if (!emailPattern.test(EMail.value)) {
  }
});

// Конец поля только е-маил

// Функция для перелистывания времен года по книгам
const winterOpen = document.getElementById("myInputWinter");
const springOpen = document.getElementById("myInputSpring");
const summerOpen = document.getElementById("myInputSummer");
const autumnOpen = document.getElementById("myInputAutumn");
const zeroBlock = document.querySelector(".partZero");
const firstBlock = document.querySelector(".partOne");
const secondBlock = document.querySelector(".partToo");
const thirdBlock = document.querySelector(".partThree");

winterOpen.addEventListener("click", function () {
  winterOpen.classList.toggle("winterOpen");
  springOpen.classList.remove("springOpen");
  summerOpen.classList.remove("summerOpen");
  autumnOpen.classList.remove("autumnOpen");
  if (winterOpen.classList.contains("winterOpen")) {
    setTimeout(() => {
      zeroBlock.style.display = "flex";
    }, 500);
    setTimeout(() => {
      zeroBlock.style.opacity = "1";
      firstBlock.style.display = "none";
      secondBlock.style.display = "none";
      thirdBlock.style.display = "none";
    }, 1000);
    firstBlock.style.opacity = "0";
    secondBlock.style.opacity = "0";
    thirdBlock.style.opacity = "0";
  }
});
springOpen.addEventListener("click", function () {
  springOpen.classList.toggle("springOpen");
  summerOpen.classList.remove("summerOpen");
  autumnOpen.classList.remove("autumnOpen");
  winterOpen.classList.remove("winterOpen");
  if (springOpen.classList.contains("springOpen")) {
    setTimeout(() => {
      firstBlock.style.display = "flex";
    }, 500);
    setTimeout(() => {
      firstBlock.style.opacity = "1";
      zeroBlock.style.display = "none";
      secondBlock.style.display = "none";
      thirdBlock.style.display = "none";
    }, 1000);
    zeroBlock.style.opacity = "0";
    secondBlock.style.opacity = "0";
    thirdBlock.style.opacity = "0";
  }
});
summerOpen.addEventListener("click", function () {
  summerOpen.classList.toggle("summerOpen");
  springOpen.classList.remove("springOpen");
  autumnOpen.classList.remove("autumnOpen");
  winterOpen.classList.remove("winterOpen");
  if (summerOpen.classList.contains("summerOpen")) {
    setTimeout(() => {
      secondBlock.style.display = "flex";
    }, 500);
    setTimeout(() => {
      secondBlock.style.opacity = "1";
      zeroBlock.style.display = "none";
      firstBlock.style.display = "none";
      thirdBlock.style.display = "none";
    }, 1000);
    zeroBlock.style.opacity = "0";
    firstBlock.style.opacity = "0";
    thirdBlock.style.opacity = "0";
  }
});
autumnOpen.addEventListener("click", function () {
  autumnOpen.classList.toggle("autumnOpen");
  summerOpen.classList.remove("summerOpen");
  springOpen.classList.remove("springOpen");
  winterOpen.classList.remove("winterOpen");
  if (autumnOpen.classList.contains("autumnOpen")) {
    setTimeout(() => {
      thirdBlock.style.display = "flex";
    }, 500);
    setTimeout(() => {
      thirdBlock.style.opacity = "1";
      zeroBlock.style.display = "none";
      firstBlock.style.display = "none";
      secondBlock.style.display = "none";
    }, 1000);
    zeroBlock.style.opacity = "0";
    firstBlock.style.opacity = "0";
    secondBlock.style.opacity = "0";
  }
});
//конец функции для перелистывания времен года

// Buy books menu

let activeButton = null;

const modalBuyACard = document.querySelector(".modal__buy__a__card5");

// Сохранение состояния кнопки
function saveButtonState(button) {
  const buttonId = button.getAttribute("data-id");
  const state = {
    isDisabled: button.classList.contains("disabled"),
    text: button.textContent,
  };
  localStorage.setItem(buttonId, JSON.stringify(state));
}

function restoreButtonState(button) {
  const buttonId = button.getAttribute("data-id");
  const savedState = localStorage.getItem(buttonId);

  if (savedState) {
    const state = JSON.parse(savedState);

    if (state.isDisabled) {
      button.classList.add("disabled");
      button.disabled = true;
    } else {
      button.classList.remove("disabled");
      button.disabled = false;
    }

    if (state.text) {
      button.textContent = state.text;
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  buyedBooks.forEach(function (buyed) {
    buyed.textContent = Number(localStorage.getItem("keyBooks"));
  });
  if (localStorage.getItem("keyEnter") == 1) {
    const rememberDivArray =
      JSON.parse(localStorage.getItem("BooksRemember")) || [];
    rememberDivArray.forEach(function (buyDivArray) {
      const Li = document.createElement("li");
      Li.textContent = buyDivArray;
      RentedList.appendChild(Li);
    });
    buyBooks.forEach(function (buy) {
      restoreButtonState(buy);
      if (buy.classList.contains("disabled")) {
        buy.classList.remove("favorites__button");
      }
    });
  }
});
// Конец Обработчик отправки формы

// Submit Buy a library card
const buyedBooks = document.querySelectorAll(".buyedBooks");
const RentedList = document.querySelector(".Rented__list");

modalBuyACard.addEventListener("submit", function (event) {
  event.preventDefault();
  if (activeButton) {
    const remember = activeButton.closest("div");
    const rememberDiv = remember.querySelector(".favorites__head").textContent;
    const rememberDivArray =
      JSON.parse(localStorage.getItem("BooksRemember")) || [];
    rememberDivArray.push(rememberDiv);
    localStorage.setItem("BooksRemember", JSON.stringify(rememberDivArray));
    const Li = document.createElement("li");
    Li.textContent = rememberDiv;
    RentedList.appendChild(Li);

    localStorage.setItem(
      "keyBooks",
      Number(localStorage.getItem("keyBooks")) + 1
    );
    buyedBooks.forEach(function (buyed) {
      buyed.textContent = Number(localStorage.getItem("keyBooks"));
    });
    activeButton.textContent = "Oun";
    activeButton.classList.remove("favorites__button");
    activeButton.classList.add("disabled");
    activeButton.disabled = true;
  }
  saveButtonState(activeButton);
  removeClasslist();
});
// Конец Submit Buy a library card

// Buy a librart card меню при нажатии на buy

buyBooks.forEach(function (buy) {
  buy.addEventListener("click", function () {
    activeButton = this;
    containerGray.style.visibility = "visible";
    containerGray.style.opacity = "0.8";

    if (localStorage.getItem("keyEnter") == 1) {
      buy.classList.toggle("buyActive");
      saveButtonState(buy);

      if (buy.classList.contains("buyActive")) {
        modalBuyACard.style.visibility = "visible";
        modalBuyACard.style.opacity = "1";
      } else {
        containerGray.style.visibility = "visible";
        containerGray.style.opacity = "0.8";
        buy.classList.toggle("buyActive");
        saveButtonState(buy);
      }
    } else {
      buy.classList.toggle("buyActive");
      if (buy.classList.contains("buyActive")) {
        modalLogin.style.visibility = "visible";
        modalLogin.style.opacity = "1";
      }
      buy.textContent = "Buy";
      buy.classList.remove("disabled");
      buy.classList.add("favorites__button");
      buy.disabled = false;
      saveButtonState(buy);
    }
  });
});

// Конец Buy a librart card меню при нажатии на buy

// Digital Library Cards замена

const cards5 = document.querySelector(".cards5");
const cards = document.querySelector(".cards");

window.addEventListener("load", () => {
  if (localStorage.getItem("keyEnter") == 1) {
    cards5.style.display = "flex";
    cards.style.display = "none";
  } else {
    cards5.style.display = "none";
    cards.style.display = "flex";
  }
});
// Digital Library Cards конец

// SLIDER полная версия

let offset = 0; // смещение от левого края

const slider = document.querySelector(".slider");

function remove() {
  document
    .querySelectorAll(".svgOne, .svgToo, .svgThree, .svgFour, .svgFive")
    .forEach((button) => {
      button.classList.remove("active1");
    });
}

document.querySelector(".svgOne").addEventListener("click", function () {
  remove();
  this.classList.add("active1");
  offset = offset - 30;
  if (offset < 0) {
    offset = 0;
  } else {
    offset = 0;
  }
  slider.style.left = offset + "rem";
});
document.querySelector(".svgToo").addEventListener("click", function () {
  remove();
  this.classList.add("active1");

  offset = offset + 30;
  if (offset > 30) {
    offset = 30;
  }
  slider.style.left = -offset + "rem";
});

document.querySelector(".svgThree").addEventListener("click", function () {
  remove();
  this.classList.add("active1");
  offset = offset + 60;
  if (offset > 60) {
    offset = 60;
  }
  slider.style.left = -offset + "rem";
});
document.querySelector(".svgFour").addEventListener("click", function () {
  remove();
  this.classList.add("active1");
  offset = offset + 90;
  if (offset > 90) {
    offset = 90;
  }
  slider.style.left = -offset + "rem";
});
document.querySelector(".svgFive").addEventListener("click", function () {
  remove();
  this.classList.add("active1");
  offset = offset + 120;
  if (offset > 120) {
    offset = 120;
  }
  slider.style.left = -offset + "rem";
});

document.querySelector(".carret__right").addEventListener("click", function () {
  offset = offset + 30;
  if (offset > 120) {
    offset = 0;
  }
  slider.style.left = -offset + "rem";
  remove();
  if (offset == 0) {
    document.querySelector(".svgOne").classList.add("active1");
  }
  if (offset == 30) {
    document.querySelector(".svgToo").classList.add("active1");
  }
  if (offset == 60) {
    document.querySelector(".svgThree").classList.add("active1");
  }
  if (offset == 90) {
    document.querySelector(".svgFour").classList.add("active1");
  }
  if (offset == 120) {
    document.querySelector(".svgFive").classList.add("active1");
  }
});

document.querySelector(".carret__left").addEventListener("click", function () {
  offset = offset - 30;
  if (offset < 0) {
    offset = 120;
  }
  slider.style.left = -offset + "rem";
  remove();
  if (offset == 0) {
    document.querySelector(".svgOne").classList.add("active1");
  }
  if (offset == 30) {
    document.querySelector(".svgToo").classList.add("active1");
  }
  if (offset == 60) {
    document.querySelector(".svgThree").classList.add("active1");
  }
  if (offset == 90) {
    document.querySelector(".svgFour").classList.add("active1");
  }
  if (offset == 120) {
    document.querySelector(".svgFive").classList.add("active1");
  }
});
