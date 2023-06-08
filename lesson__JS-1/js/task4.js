/*
let number = 0;
let string = word;
let boolean = true;
let undefined =  ;
let object = {};
*/
// Задача 1
// Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
// Региструємо місця у памяті
let getCentimeter;
let getMeter;
let getKilometer;
let result;
const convertMeter = 1 / 100;
const convertKilometer = 1 / 100000;
// Отримуємо числа котрі треба розрахувати у прикладах
getCentimeter = parseFloat(
  prompt("Введіть довжену у сантиметрах", "20 сантиметрів")
);

// Переведемо у метри
getMeter = parseFloat(getCentimeter * convertMeter);
// Переведемо у кілометри
getKilometer = parseFloat(getCentimeter * convertKilometer);

// Виводимо результат у консолі
console.log(
  `Centimeter = ${getCentimeter} Meter = ${getMeter} Kilometer = ${getKilometer}`
);
console.log(typeof getCentimeter);
console.log(typeof getMeter);
console.log(typeof getKilometer);

// Виводимо до html
// Перевірка
result = `<p class="result">Введено сантиметрів ${getCentimeter}</p><p class="result">У метрах це ${getMeter}</p><p class="result">У кілометрах це ${getKilometer}</p>`;

// Отримуємо ДОМ
document.getElementById("b_res").innerHTML = result;
