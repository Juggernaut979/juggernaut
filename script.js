"use strict";

//Navigation button selectors
let menuBtn = document.getElementById("menuBtn");
let menuCloseBtn = document.getElementById("menuCloseBtn");
let topNavUl = document.getElementById("topNavUl");

function show(params) {
  menuBtn.classList.toggle("show");
  menuCloseBtn.classList.toggle("show");
  topNavUl.classList.toggle("show");
}

menuBtn.addEventListener("click", show);
menuCloseBtn.addEventListener("click", show);
