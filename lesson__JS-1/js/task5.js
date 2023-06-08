/*
let number = 0;
let string = word;
let boolean = true;
let undefined =  ;
let object = {};
*/
// Задача 1
//  Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
// Региструємо місця у памяті
let getSeconds;
let getMinutes;
let getHours;
let result;
const convertTime = 60;
const negativeError = `<p class="result">Ведені некоректні дані, перевірте ще</p>`;
// Отримуємо числа котрі треба розрахувати у прикладах
getSeconds = parseFloat(
  prompt("Введіть кількість секунд від початку доби", "20 секунд")
);

// Переведемо у хвилини
getMinutes = parseInt(getSeconds / convertTime);
getDivisionMinutes = parseInt(getSeconds % convertTime);
// Переведемо у години
getHours = parseInt(getMinutes / convertTime);
getDivisionHours = parseInt(getMinutes % convertTime);

// Виводимо результат у консолі
console.log(`Second = ${getSeconds} Minute = ${getMinutes} Hour = ${getHours}`);
console.log(typeof getSeconds);
console.log(typeof getMinutes);
console.log(typeof getHours);

// Виводимо до html
// Перевірка
if (getSeconds < 0) {
  result = negativeError;
} else {
  result = `<p class="result">Це ${getHours} годин та ${getDivisionHours} хвилин та ${getDivisionMinutes} секунд</p>`;
}

// Отримуємо ДОМ
document.getElementById("b_res").innerHTML = result;
