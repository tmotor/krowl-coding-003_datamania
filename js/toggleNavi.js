"use strict";

const body = document.body
const naviButton = document.getElementById("navi-button");

naviButton.addEventListener("click", function () {
  body.classList.toggle("js-navi-open");
});
