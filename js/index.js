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

// SlIDER мобильная версия
// const images = document.querySelectorAll(".slider-img");
// const svgScript = document.querySelectorAll(".svgScript");
// const controlls = document.querySelectorAll(".controlls");
// let imageIndex = 0;
// let svgScriptIndex = 0;

// function show(index) {
//   images[imageIndex].classList.remove("active");
//   images[index].classList.add("active");
//   svgScript[svgScriptIndex].classList.remove("active");
//   svgScript[index].classList.add("active");
//   imageIndex = index;
//   svgScriptIndex = index;
// }

// controlls.forEach((e) => {
//   e.addEventListener("click", () => {
//     if (event.target.classList.contains("carret__left")) {
//       let index = imageIndex - 1;
//       if (index < 0) {
//         index = images.length - 1;
//       }
//       show(index);
//     } else if (event.target.classList.contains("carret__right")) {
//       let index = imageIndex + 1;
//       if (index >= images.length) {
//         index = 0;
//       }
//       show(index);
//     }
//   });
// });
// show(imageIndex);

// конец слайдер мобильная версия

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

// const svgOneOpen = document.querySelector(".svgOne");
// const svgTooOpen = document.querySelector(".svgToo");
// const svgThreeOpen = document.querySelector(".svgThree");
// const zeroImages = document.querySelector(".png1");
// const firstImages = document.querySelector(".png2");
// const secondImages = document.querySelector(".png3");
// const thirdImages = document.querySelector(".png4");
// const fourthImages = document.querySelector(".png5");
// svgOneOpen.addEventListener("click", function () {
//   svgOneOpen.classList.toggle("svgOneOpen");
//   svgOneOpen.classList.toggle("active");
//   svgTooOpen.classList.remove("svgTooOpen", "active");
//   svgThreeOpen.classList.remove("svgThreeOpen", "active");
//   if (svgOneOpen.classList.contains("svgOneOpen")) {
//     setTimeout(() => {
//       zeroImages.style.display = "flex";
//       firstImages.style.display = "flex";
//       secondImages.style.display = "flex";
//     }, 500);
//     setTimeout(() => {
//       zeroImages.style.opacity = "1";
//       firstImages.style.opacity = "1";
//       secondImages.style.opacity = "1";
//       thirdImages.style.display = "none";
//       fourthImages.style.display = "none";
//     }, 1000);
//     thirdImages.style.opacity = "0";
//     fourthImages.style.opacity = "0";
//   }
// });
// svgTooOpen.addEventListener("click", function () {
//   svgTooOpen.classList.toggle("svgTooOpen");
//   svgTooOpen.classList.toggle("active");
//   svgOneOpen.classList.remove("svgOneOpen", "active");
//   svgThreeOpen.classList.remove("svgThreeOpen", "active");
//   if (svgTooOpen.classList.contains("svgTooOpen")) {
//     setTimeout(() => {
//       thirdImages.style.display = "flex";
//       firstImages.style.display = "flex";
//       secondImages.style.display = "flex";
//     }, 500);
//     setTimeout(() => {
//       thirdImages.style.opacity = "1";
//       firstImages.style.opacity = "1";
//       secondImages.style.opacity = "1";
//       zeroImages.style.display = "none";
//       fourthImages.style.display = "none";
//     }, 1000);
//     zeroImages.style.opacity = "0";
//     fourthImages.style.opacity = "0";
//   }
// });
// svgThreeOpen.addEventListener("click", function () {
//   svgThreeOpen.classList.toggle("svgThreeOpen");
//   svgThreeOpen.classList.toggle("active");
//   svgOneOpen.classList.remove("svgOneOpen", "active");
//   svgTooOpen.classList.remove("svgTooOpen", "active");
//   if (svgThreeOpen.classList.contains("svgThreeOpen")) {
//     setTimeout(() => {
//       thirdImages.style.display = "flex";
//       fourthImages.style.display = "flex";
//       secondImages.style.display = "flex";
//     }, 500);
//     setTimeout(() => {
//       thirdImages.style.opacity = "1";
//       fourthImages.style.opacity = "1";
//       secondImages.style.opacity = "1";
//       zeroImages.style.display = "none";
//       firstImages.style.display = "none";
//     }, 1000);
//     zeroImages.style.opacity = "0";
//     firstImages.style.opacity = "0";
//   }
// });

// Slider max-width: 90rem

// const svgOneOpen90rem = document.querySelector(".svgOne90rem");
// const svgTooOpen90rem = document.querySelector(".svgToo90rem");
// const svgThreeOpen90rem = document.querySelector(".svgThree90rem");
// const svgFourOpen90rem = document.querySelector(".svgFour90rem");
// const zeroImages90rem = document.querySelector(".png1");
// const firstImages90rem = document.querySelector(".png2");
// const secondImages90rem = document.querySelector(".png3");
// const thirdImages90rem = document.querySelector(".png4");
// const fourthImages90rem = document.querySelector(".png5");
// svgOneOpen90rem.addEventListener("click", function () {
//   svgOneOpen90rem.classList.toggle("svgOneOpen90rem");
//   svgOneOpen90rem.classList.toggle("active");
//   svgTooOpen90rem.classList.remove("svgTooOpen90rem", "active");
//   svgThreeOpen90rem.classList.remove("svgThreeOpen90rem", "active");
//   svgFourOpen90rem.classList.remove("svgFourOpen90rem", "active");
//   if (svgOneOpen90rem.classList.contains("svgOneOpen90rem")) {
//     setTimeout(() => {
//       zeroImages90rem.style.display = "flex";
//       firstImages90rem.style.display = "flex";
//     }, 500);
//     setTimeout(() => {
//       zeroImages90rem.style.opacity = "1";
//       firstImages90rem.style.opacity = "1";
//       secondImages90rem.style.display = "none";
//       thirdImages90rem.style.display = "none";
//       fourthImages90rem.style.display = "none";
//     }, 1000);
//     secondImages90rem.style.opacity = "0";
//     thirdImages90rem.style.opacity = "0";
//     fourthImages90rem.style.opacity = "0";
//   }
// });
// svgTooOpen90rem.addEventListener("click", function () {
//   svgTooOpen90rem.classList.toggle("svgTooOpen90rem");
//   svgTooOpen90rem.classList.toggle("active");
//   svgOneOpen90rem.classList.remove("svgOneOpen90rem", "active");
//   svgThreeOpen90rem.classList.remove("svgThreeOpen90rem", "active");
//   svgFourOpen90rem.classList.remove("svgFourOpen90rem", "active");
//   if (svgTooOpen90rem.classList.contains("svgTooOpen90rem")) {
//     setTimeout(() => {
//       secondImages90rem.style.display = "flex";
//       firstImages90rem.style.display = "flex";
//     }, 500);
//     setTimeout(() => {
//       secondImages90rem.style.opacity = "1";
//       firstImages90rem.style.opacity = "1";
//       zeroImages90rem.style.display = "none";
//       thirdImages90rem.style.display = "none";
//       fourthImages90rem.style.display = "none";
//     }, 1000);
//     zeroImages90rem.style.opacity = "0";
//     thirdImages90rem.style.opacity = "0";
//     fourthImages90rem.style.opacity = "0";
//   }
// });
// svgThreeOpen90rem.addEventListener("click", function () {
//   svgThreeOpen90rem.classList.toggle("svgThreeOpen90rem");
//   svgThreeOpen90rem.classList.toggle("active");
//   svgOneOpen90rem.classList.remove("svgOneOpen90rem", "active");
//   svgTooOpen90rem.classList.remove("svgTooOpen90rem", "active");
//   svgFourOpen90rem.classList.remove("svgFourOpen90rem", "active");
//   if (svgThreeOpen90rem.classList.contains("svgThreeOpen90rem")) {
//     setTimeout(() => {
//       secondImages90rem.style.display = "flex";
//       thirdImages90rem.style.display = "flex";
//     }, 500);
//     setTimeout(() => {
//       secondImages90rem.style.opacity = "1";
//       thirdImages90rem.style.opacity = "1";
//       zeroImages90rem.style.display = "none";
//       firstImages90rem.style.display = "none";
//       fourthImages90rem.style.display = "none";
//     }, 1000);
//     zeroImages90rem.style.opacity = "0";
//     firstImages90rem.style.opacity = "0";
//     fourthImages90rem.style.opacity = "0";
//   }
// });
// svgFourOpen90rem.addEventListener("click", function () {
//   svgFourOpen90rem.classList.toggle("svgFourOpen90rem");
//   svgFourOpen90rem.classList.toggle("active");
//   svgOneOpen90rem.classList.remove("svgOneOpen90rem", "active");
//   svgTooOpen90rem.classList.remove("svgTooOpen90rem", "active");
//   svgThreeOpen90rem.classList.remove("svgThreeOpen90rem", "active");
//   if (svgFourOpen90rem.classList.contains("svgFourOpen90rem")) {
//     setTimeout(() => {
//       fourthImages90rem.style.display = "flex";
//       thirdImages90rem.style.display = "flex";
//     }, 500);
//     setTimeout(() => {
//       fourthImages90rem.style.opacity = "1";
//       thirdImages90rem.style.opacity = "1";
//       zeroImages90rem.style.display = "none";
//       firstImages90rem.style.display = "none";
//       secondImages90rem.style.display = "none";
//     }, 1000);
//     zeroImages90rem.style.opacity = "0";
//     firstImages90rem.style.opacity = "0";
//     secondImages90rem.style.opacity = "0";
//   }
// });
