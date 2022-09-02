import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-aio-3.2.5.min.js';
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

let selecteDateMs;
let intervId = null;
let diff = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    saveSelecteDate(selectedDates[0]);
  },
};

const refs = {
  datetimePickerInput: document.querySelector('#datetime-picker'),
  dataStartBtn: document.querySelector('[data-start]'),
  dataDaysSpan: document.querySelector('[data-days]'),
  dataHoursSpan: document.querySelector('[data-hours]'),
  dataMinutesSpan: document.querySelector('[data-minutes]'),
  dataSecondsSpan: document.querySelector('[data-seconds]'),
};

refs.dataStartBtn.setAttribute('autocomplete', 'disabled');

flatpickr('#datetime-picker', options);

function saveSelecteDate(date) {
  selecteDateMs = date.getTime();

  if (selecteDateMs <= Date.now()) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  } else {
    addDataStartBtnListener();
    dataStartBtnIsActive();
  }
}

function addDataStartBtnListener() {
  refs.dataStartBtn.addEventListener('click', onDataStartBtnClick);
}

function dataStartBtnIsActive() {
  refs.dataStartBtn.removeAttribute('autocomplete', 'disabled');
}

function onDataStartBtnClick() {
  dataStartBtnNotActive();
  if (!intervId) {
    intervId = setInterval(showTime, 1000);
  }
}

function dataStartBtnNotActive() {
  refs.dataStartBtn.setAttribute('autocomplete', 'disabled');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return createTimer({ days, hours, minutes, seconds });
}

function createTimer({ days, hours, minutes, seconds }) {
  refs.dataDaysSpan.textContent = addLeadingZero(days);
  refs.dataHoursSpan.textContent = addLeadingZero(hours);
  refs.dataMinutesSpan.textContent = addLeadingZero(minutes);
  refs.dataSecondsSpan.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function showTime() {
  diff = selecteDateMs - Date.now();
  convertMs(diff);
  if (diff < 1000) {
    clearInterval(intervId);
  }
}
