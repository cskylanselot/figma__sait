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
//

// LogIn menu
const LogInOpen = document.querySelector(".LogIn");

const imgLog = document.querySelector(".imgLogMenu");

imgLog.addEventListener("click", function () {
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
});
// Конец LogIn menu

// Log menu и Register menu

const LogInClick = document.querySelector(".LogInClick");
const modalLogin = document.querySelector(".modal__Login");
const RegisterClick = document.querySelector(".RegisterClick");
const modalRegister = document.querySelector(".modal__Register");
const krestik = document.querySelector(".krestikk");

LogInClick.addEventListener("click", function () {
  LogInClick.classList.toggle("LogInClickActive");

  if (LogInClick.classList.contains("LogInClickActive")) {
    modalLogin.style.top = "15rem";
  } else {
    modalLogin.style.top = "-20rem";
  }
  if (LogInClick.classList.contains("LogInClickActive")) {
    LogInOpen.style.top = "-9rem";
  }
});
RegisterClick.addEventListener("click", function () {
  RegisterClick.classList.toggle("RegisterClickActive");

  if (RegisterClick.classList.contains("RegisterClickActive")) {
    modalRegister.style.top = "15rem";
  } else {
    modalRegister.style.top = "-25rem";
  }
  if (RegisterClick.classList.contains("RegisterClickActive")) {
    LogInOpen.style.top = "-9rem";
  }
});

krestik.addEventListener("click", function () {
  krestik.classList.toggle("krestikActive");

  if (krestik.classList.contains("krestikActive")) {
    modalRegister.style.top = "-25rem";
  }
});

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
