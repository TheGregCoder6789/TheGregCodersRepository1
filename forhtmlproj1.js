let count = parseInt(localStorage.getItem("count")) || 0;
const lc = document.getElementById("lc");

const clickSound = new Audio("https://thegregcoder6789.github.io/TheGregCodersRepository1/click.mp3");
const dingSound = new Audio("https://thegregcoder6789.github.io/TheGregCodersRepository1/ding.mp3");

function re() {
  lc.textContent = count;
  localStorage.setItem("count", count);
}

function dec() {
  count--;
  re();
  clickSound.play();
  flash("red");
  shakeScreen();
}
    
function inc() {
  count++;
  re();
  clickSound.play();
  flash("green");
  shakeScreen();
}

function res() {
  count = 0;
  re();
  dingSound.play();
  flash("yellow");
  shakeScreen();
}

function flash(color) {
  lc.classList.add(`flash-${color}`, `glow-${color}`);
  setTimeout(() => {
    lc.classList.remove(`flash-${color}`, `glow-${color}`);
  }, 300);
}

function shakeScreen() {
  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 400);
}

re();