"use strict";

const green = function () {
  document.querySelector("#change").style.backgroundColor = "green";
};

document.querySelector("#change").addEventListener("click", green);
