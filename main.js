"use strick";
const btnDropDown = document.querySelectorAll(".dropdownEffect");
const drop1 = document.querySelector(".dropdown");
const drop2 = document.querySelector(".addDropDown1");
const close1 = document.querySelector(".closMenue");
const item1 = document.querySelector("nav");
const open1 = document.querySelector(".menuscreen");
console.log(open1);
btnDropDown.forEach(function (b, i) {
  b.addEventListener("click", function (e) {
    e.preventDefault();
    if (i === 0) {
      drop1.style.display = drop1.style.display === "none" ? "block" : "none";
    } else {
      drop2.style.display = drop2.style.display === "none" ? "block" : "none";
    }
  });
});

open1.addEventListener("click", function () {
  console.log("click");
  item1.style.display = "block";
  close1.style.opacity = 1;
  open1.style.zIndex = 1000000000000;
});

close1.addEventListener("click", function () {
  item1.style.display = "none";
  close1.style.opacity = 0;
  close1.style.zIndex = 100;
});
