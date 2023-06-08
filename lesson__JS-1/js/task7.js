/*
let number = 0;
let string = word;
let boolean = true;
let undefined =  ;
let object = {};
*/
// Задача 1
//   Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
// Региструємо місця у памяті
let firstRandomNumber;
let secondRandomNumber;
let generalSum;
const firstRandomMin = 1;
const firstRandomMax = 12;
const secondRandomMin = 0;
const secondRandomMax = 6;
let result;
// Отримуємо числа котрі треба розрахувати у прикладах
firstRandomNumber = parseInt(
  Math.random() * (firstRandomMax - firstRandomMin) + firstRandomMin
);
secondRandomNumber = parseInt(
  Math.random() * (secondRandomMax - secondRandomMin) + secondRandomMin
);
// Знаходимо суму
generalSum = parseInt(firstRandomNumber + secondRandomNumber);

// Виводимо результат у консолі
console.log(
  `firstRandomNumber = ${firstRandomNumber} secondRandomNumber = ${secondRandomNumber} generalSum = ${generalSum}`
);

// Виводимо до html
result = `<div class="check-block">
  <p class="result">Перше рандомне число ${firstRandomNumber}</p>
  <p class="result">Друге рандомне число ${secondRandomNumber}</p>
  <p class="result">Сума тих чисол ${generalSum}</p>
 </div>`;

// Отримуємо ДОМ
document.getElementById("b_res").innerHTML = result;
