const active = document.querySelector(".burger__menu");

const element = document.getElementById("elementBody");

const navOpen = document.getElementById("burger__id");

// Функция для открытия бургер меню
active.addEventListener("click", function () {
  active.classList.toggle("active");
  if (active.classList.contains("active")) {
    navOpen.style.top = "5.625rem";
    element.style.overflowY = "hidden";
  } else {
    navOpen.style.top = "-30rem";
    element.style.overflowY = "visible";
  }
});
//

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
