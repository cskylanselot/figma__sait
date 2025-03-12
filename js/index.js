export default removeClasslist;

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
const LogInClick2 = document.querySelector(".LogInClick2");
const modalLogin = document.querySelector(".modal__Login");
const RegisterClick = document.querySelector(".RegisterClick");
const RegisterClick2 = document.querySelector(".RegisterClick2");
const modalRegister = document.querySelector(".modal__Register");
const krestik = document.querySelector(".krestik");
const krestikk = document.querySelector(".krestikk");
const buyBooks = document.querySelectorAll(".favorites__button");
const containerGray = document.querySelector(".containerGray");
const containerGrayEnd = document.querySelector(".containerGrayEnd");

function removeClasslist() {
  krestikk.classList.remove("krestikActive");
  imgLog.classList.remove("LogInActive");
  krestik.classList.remove("krestikActive");
  LogInClick.classList.remove("LogInClickActive");
  RegisterClick.classList.remove("RegisterClickActive");
  containerGrayEnd.classList.remove("containerGrayEndActive");
  MyProfileClick.classList.remove("MyProfileClickActive");
  closeBtn.classList.remove("closeBtnActive");
  MyProfileClick.classList.remove("MyProfileClickActive");
  buyBooks.forEach(function (buy) {
    buy.classList.remove("buyActive");
  });
}

LogInClick.addEventListener("click", function () {
  LogInClick.classList.toggle("LogInClickActive");
  containerGray.style.visibility = "visible";
  containerGray.style.opacity = "0.8";
  if (LogInClick.classList.contains("LogInClickActive")) {
    modalLogin.style.visibility = "visible";
    modalLogin.style.opacity = "1";
  } else {
    modalLogin.style.opacity = "0";
    modalLogin.style.visibility = "hidden";
  }
  if (LogInClick.classList.contains("LogInClickActive")) {
    LogInOpen.style.top = "-9rem";
  }
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
  } else {
    modalLogin.style.opacity = "0";
    modalLogin.style.visibility = "hidden";
  }
  if (LogInClick2.classList.contains("LogInClickActive")) {
    LogInOpen.style.top = "-9rem";
  }
  RegisterClick2.classList.remove("RegisterClickActive");
});
RegisterClick.addEventListener("click", function () {
  RegisterClick.classList.toggle("RegisterClickActive");
  containerGray.style.visibility = "visible";
  containerGray.style.opacity = "0.8";
  if (RegisterClick.classList.contains("RegisterClickActive")) {
    modalRegister.style.visibility = "visible";
    modalRegister.style.opacity = "1";
  } else {
    modalRegister.style.visibility = "hidden";
    modalRegister.style.opacity = "0";
  }
  if (RegisterClick.classList.contains("RegisterClickActive")) {
    LogInOpen.style.top = "-9rem";
  }
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
  } else {
    modalRegister.style.visibility = "hidden";
    modalRegister.style.opacity = "0";
  }
  if (RegisterClick2.classList.contains("RegisterClickActive")) {
    LogInOpen.style.top = "-9rem";
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
    modalLogin.style.visibility = "hidden";
    modalLogin.style.opacity = "0";
  }
});
krestikk.addEventListener("click", function () {
  containerGray.style.visibility = "hidden";
  containerGray.style.opacity = "0";

  krestikk.classList.toggle("krestikActive");

  if (krestikk.classList.contains("krestikActive")) {
    removeClasslist();
    modalRegister.style.visibility = "hidden";
    modalRegister.style.opacity = "0";
  }
});
containerGrayEnd.addEventListener("click", function () {
  containerGray.style.visibility = "hidden";
  containerGray.style.opacity = "0";

  containerGrayEnd.classList.toggle("containerGrayEndActive");

  if (containerGrayEnd.classList.contains("containerGrayEndActive")) {
    removeClasslist();
    modalRegister.style.visibility = "hidden";
    modalRegister.style.opacity = "0";
    modalLogin.style.visibility = "hidden";
    modalLogin.style.opacity = "0";
  }
});

buyBooks.forEach(function (buy) {
  buy.addEventListener("click", function () {
    containerGray.style.visibility = "visible";
    containerGray.style.opacity = "0.8";

    buy.classList.toggle("buyActive");
    if (buy.classList.contains("buyActive")) {
      removeClasslist();
      modalLogin.style.visibility = "visible";
      modalLogin.style.opacity = "1";
    }
  });
});

// My profile menu

const MyProfileClick = document.querySelector(".MyProfileClick");
const MyProfile = document.querySelector(".modal__profile");
const myProfileOpen = document.querySelector(".LogOut");
const closeBtn = document.querySelector(".close__btn");

MyProfileClick.addEventListener("click", function () {
  MyProfileClick.classList.toggle("MyProfileClickActive");
  containerGray.style.visibility = "visible";
  containerGray.style.opacity = "0.8";
  if (MyProfileClick.classList.contains("MyProfileClickActive")) {
    MyProfile.style.visibility = "visible";
    MyProfile.style.opacity = "1";
  } else {
    MyProfile.style.opacity = "0";
    MyProfile.style.visibility = "hidden";
  }
  if (MyProfileClick.classList.contains("MyProfileClickActive")) {
    myProfileOpen.style.top = "-9rem";
  }
});
closeBtn.addEventListener("click", function () {
  containerGray.style.visibility = "hidden";
  containerGray.style.opacity = "0";

  closeBtn.classList.toggle("closeBtnActive");

  if (closeBtn.classList.contains("closeBtnActive")) {
    removeClasslist();
    MyProfile.style.visibility = "hidden";
    MyProfile.style.opacity = "0";
    myProfileOpen.style.top = "9rem";
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
