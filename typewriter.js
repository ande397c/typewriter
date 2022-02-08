"use strict";

const element = document.querySelector(".typewritten");
const stringText = element.textContent;
let i = -1;
let randomNr = Math.floor(Math.random() * 3) + 1;

let speed = 500;

document.querySelector("#text").innerHTML = "Click to initiate!";

window.addEventListener("load", init);

function init() {
  element.innerHTML = "";

  window.addEventListener("click", typeWriter);
}

function sound() {
  if (stringText.charAt(i) === " ") {
    // console.log("Space");
    document.querySelector("#typespace").play();
    document.querySelector("#typespace").currentTime = 0;
  } else {
    // console.log("Type");
    randomNr = Math.floor(Math.random() * 2) + 1;
    if (randomNr == 1) {
      document.querySelector("#typekey1").play();
      document.querySelector("#typekey1").currentTime = 0;
    } else {
      document.querySelector("#typekey2").play();
      document.querySelector("#typekey2").currentTime = 0;
    }
  }
}

function randomSpeed() {
  if (randomNr === 1) {
    speed = 100;
  } else if (randomNr === 2) {
    speed = 400;
  } else if (randomNr === 3) {
    speed = 200;
  }
}

function typeWriter() {
  document.querySelector("#text").innerHTML = "";
  i++;
  if (i < stringText.length) {
    element.innerHTML += stringText.charAt(i);
    randomSpeed();
    sound();
    setTimeout(typeWriter, speed);
    window.removeEventListener("click", typeWriter);
  } else {
    document.querySelector("#typelast").play();
  }
}
