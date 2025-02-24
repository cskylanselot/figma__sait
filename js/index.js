const active = document.querySelector(".burger");

const element = document.getElementById("elementBody");

const navOpen = document.getElementById("burger__id");

const burgerOpen = document.getElementById("burger__id__click");

burgerOpen.addEventListener("click", function () {
  active.classList.toggle("active");
  if (active.classList.contains("active")) {
    navOpen.style.top = "5.625rem";
    element.style.overflowY = "hidden";
  } else {
    navOpen.style.top = "-30rem";
    element.style.overflowY = "visible";
  }
});
