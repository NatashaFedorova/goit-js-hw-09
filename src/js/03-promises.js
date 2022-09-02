import 'notiflix/dist/notiflix-aio-3.2.5.min.js';
import Notiflix from 'notiflix';

const form = {};
let position = 0;

const refs = {
  form: document.querySelector('.form'),
  formInput: document.querySelectorAll('input'),
};

refs.form.addEventListener('input', onInputForm);
refs.form.addEventListener('submit', onSubmitForm);

function onInputForm(e) {
  e.target.value < 0
    ? (e.target.value = 0)
    : (form[e.target.name] = Number(e.target.value));

  return form;
}

function onSubmitForm(e) {
  e.preventDefault();
  for (position = 1; position <= form.amount; position += 1) {
    createPromise(position, form.delay);
    form.delay += form.step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
    });
}

// приклад=====================================
// let result = 20000;
// function showNumber(num) {
//   result -= num;
//   console.log(result);
//   if (result === 0) {
//     clearInterval(timeId);
//   }
// }
// let timeId = setInterval(showNumber, 1000, 1000);
