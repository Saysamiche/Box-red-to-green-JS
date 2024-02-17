"use strict";

// const green = function () {
//   document.querySelector("#change").style.backgroundColor = "green";
// };
// document.querySelector("#change").addEventListener("click", green);

const changeBackgroundColor = function () {
  if (document.querySelector("#change").style.backgroundColor === "red") {
    document.querySelector("#change").style.backgroundColor = "green";
    document.querySelector("#change").textContent = "Please click me for a 'RED' background display";
  } else if (
    document.querySelector("#change").style.backgroundColor !== "red"
  ) {
    document.querySelector("#change").style.backgroundColor = "red";
    document.querySelector("#change").textContent = "Please click me for a 'GREEN' background display";
  }
};
document
  .querySelector("#change")
  .addEventListener("click", changeBackgroundColor);
