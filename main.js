"use strick";
const btnDropDown = document.querySelectorAll(".dropdownEffect");
const drop1 = document.querySelector(".dropdown");
const drop2 = document.querySelector(".addDropDown1");
const close1 = document.querySelector(".closMenue");
const item1 = document.querySelector(".writtenPart");
const item2 = document.querySelector("nav");
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

const mobiledropOpen = function (e) {
  item2.classList.remove("active");
  item1.classList.add("isActive");
  close1.classList.remove("active");
};
open1.addEventListener("click", mobiledropOpen);
const removingMenu = function (e) {
  item2.classList.add("active");
  item1.classList.remove("isActive");
  close1.classList.add("active");
};
close1.addEventListener("click", removingMenu);
