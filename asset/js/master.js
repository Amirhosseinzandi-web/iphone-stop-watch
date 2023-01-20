// start clock function*************************
let $time = document.getElementById("time")

function _clock() {
  let _hour = new Date().getHours();
  let $minute = new Date().getMinutes();
  let format = "";

  if (_hour > 11) {
    _hour = _hour - 12;
    format = "PM";
  } else {
    format = "AM";
  }
  $time.innerHTML =
    _hour + ":" + $minute + " " + format;
  if (_hour <= 9) {
    $time.innerHTML =
      "0" + _hour + ":" + $minute + " " + format;
  }
  if ($minute <= 9) {
    $time.innerHTML =
      _hour + ":" + "0" + $minute + " " + format;
  }
}
setInterval(_clock, 100);

//   end clock function*************************

let mili = (second = minute = 0);
let startTimer;

_btnReset = document.querySelector(".btnReset");
_btnPause = document.querySelector(".btnPause");
_btnStart = document.querySelector(".btnStart");
_btnLapse = document.querySelector(".lapse");

_miliSecond = document.querySelector(".miliSecond");
_second = document.querySelector(".second");
_minute = document.querySelector(".minute");
_lapseBox = document.querySelector(".lapseBox");
_lapseBoxContainer = document.querySelector(".lapseBoxContainer");

_btnStart.addEventListener("click", () => {
  startTimer = setInterval(start, 10);
});

function start() {
  mili++;
  if (mili <= 9) {
    _miliSecond.innerHTML = "0" + mili;
  }
  if (mili > 9) {
    _miliSecond.innerHTML = mili;
  }
  if (mili > 59) {
    mili = 0;
    _miliSecond.innerHTML = "0" + mili;
    second++;
    _second.innerHTML = "0" + second + ":";
  }
  if (second > 9) {
    _second.innerHTML = second + ":";
  }
  if (second > 59) {
    second = 0;
    _second.innerHTML = "0" + second + ":";
    minute++;
    _minute.innerHTML = "0" + +minute + ":";
  }
  if (minute > 9) {
    _minute.innerHTML = minute + ":";
  }

  _btnStart.classList.add("disable");
  _btnPause.classList.remove("disable");
  _btnReset.classList.remove("disable");
  _btnLapse.classList.remove("disable");
}
// ***************************************************************************

_btnPause.addEventListener("click", function () {
  clearInterval(startTimer);
  this.classList.add("disable");
  _btnStart.classList.remove("disable");
});
_btnPause.classList.add("disable");
// *************************************************************************************
_btnReset.addEventListener("click", reset);
function reset() {
  _btnStart.classList.remove("disable");
  mili = 0;
  second = 0;
  minute = 0;
  _btnReset.classList.add("disable");
  _minute.innerHTML = "0" + minute + ":";
  _second.innerHTML = "0" + second + ":";
  _miliSecond.innerHTML = "0" + mili;
  clearTimeout(startTimer);
  _lapseBox.innerHTML = "";
  _btnLapse.classList.add("disable");
  _btnPause.classList.add("disable");
  _lapseBoxContainer.style.display = "none";
}
// **********************************************

_btnLapse.classList.add("disable");

_btnLapse.addEventListener("click", function () {
  _lapseBox.innerHTML +=
    `<li class="margin"> ` +
    _minute.innerHTML +
    ` ` +
    _second.innerHTML +
    ` ` +
    _miliSecond.innerHTML +
    ` </li>`;
  _lapseBoxContainer.style.display = "block";
});
// *************Button of iphone*********************************************
document
  .getElementsByClassName("circle")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("off")[0].classList.toggle("display");
    reset();
  });
