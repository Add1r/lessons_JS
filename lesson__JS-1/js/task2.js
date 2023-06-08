/*
let number = 0;
let string = word;
let boolean = true;
let undefined =  ;
let object = {};
*/
// Задача 1
// Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років
// Региструємо місця у памяті
let birthYear;
let mathematicResult;
let result;
const birthYearError = `неможлива дата, перевірте ще`;
const currentDay = new Date();
const currentYear = parseInt(currentDay.getFullYear());

// Отримуємо числа котрі треба розрахувати у прикладах
birthYear = parseInt(prompt("Write your birthday year, please", "1991"));

// Отримуємо перший результат суму
mathematicResult = currentYear - birthYear;

// Виводимо результат у консолі
console.log(`currentYear=${currentYear}`);
console.log(typeof currentYear);
console.log(typeof birthYear);

// Виводимо до html
// Перевірка
if (mathematicResult > 130 || mathematicResult <= 0) {
  result = birthYearError;
} else {
  result = `<p class="result">У цьому році вам ${mathematicResult}</p>`;
}

// Отримуємо ДОМ
document.getElementById("b_res").innerHTML = result;
