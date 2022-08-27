const refs = {
  body: document.querySelector('body'),
  dataStart: document.querySelector('[data-start]'),
  dataStop: document.querySelector('[data-stop]'),
};

let id;

refs.dataStart.addEventListener('click', onDataStartBtnClick);
refs.dataStop.addEventListener('click', onDataStopBtnClick);

function onDataStartBtnClick() {
  if (!refs.dataStart.classList.contains('is-active')) {
    return;
  }
  changeIsActive();
  id = setInterval(changeBgColor, 1000);
}

function onDataStopBtnClick() {
  changeIsActive();
  clearInterval(id);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
function changeIsActive() {
  refs.dataStart.classList.toggle('is-active');
  refs.dataStop.classList.toggle('is-active');
}
