"use strick";
const btnDropDown = document.querySelectorAll(".dropdownEffect");
const drop1 = document.querySelector(".dropdown");
const drop2 = document.querySelector(".addDropDown1");

btnDropDown.forEach(function (b, i) {
  console.log(b.textContent, i);
  b.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target === b && i == 0) {
      drop1.style.display = drop1.style.display === "none" ? "block" : "none";
    } else {
      drop2.style.display = drop2.style.display === "none" ? "block" : "none";
    }
  });
});
