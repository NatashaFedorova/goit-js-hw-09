!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r),r("iU1Pc");var i=r("iU1Pc"),u={},l=0,a={form:document.querySelector(".form"),formInput:document.querySelectorAll("input")};function c(n,t){return new Promise((function(o,r){var u=Math.random()>.3;setTimeout((function(){u?o(e(i).Notify.success(" Fulfilled promise ".concat(n," in ").concat(t,"ms"))):r(e(i).Notify.failure(" Rejected promise ".concat(n," in ").concat(t,"ms")))}),t)}))}a.form.addEventListener("input",(function(e){return e.target.value<0?e.target.value=0:u[e.target.name]=Number(e.target.value),u})),a.form.addEventListener("submit",(function(e){for(e.preventDefault(),l=1;l<=u.amount;l+=1)c(l,u.delay),console.log(l);console.log(u)}))}();
//# sourceMappingURL=03-promises.c8f8a820.js.map