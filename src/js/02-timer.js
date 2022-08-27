import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
const refs = {
  datetimePickerInput: document.querySelector('[datetime-picker]'),
  dataStartBtn: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
};

flatpickr('[datetime-picker]');
