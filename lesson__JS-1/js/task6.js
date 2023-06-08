/*
let number = 0;
let string = word;
let boolean = true;
let undefined =  ;
let object = {};
*/
// Задача 1
//  З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
// Региструємо місця у памяті
let productLaptopsPrice;
let productLaptopsAmount;
let LaptopPrice;
let productMousesPrice;
let productMousesAmount;
let MousePrice;
let productKeyboardsPrice;
let productKeyboardsAmount;
let KeyboardPrice;
let generalSum;
let randomCheckNumber;
const randomMin = 1;
const randomMax = 100;
let result;
const productStack = 3;
const negativeError = `<p class="result">Ведені некоректні дані, перевірте ще</p>`;
// Отримуємо числа котрі треба розрахувати у прикладах
productLaptopsPrice = parseFloat(prompt("Введіть ціну ноутбуків", "20000 грн"));
productLaptopsAmount = parseFloat(
  prompt("Введіть кількість ноутбуків", "20 ноутів")
);
productMousesPrice = parseFloat(prompt("Введіть ціну мишок", "5000 грн"));
productMousesAmount = parseFloat(prompt("Введіть кількість мишок", "20 мишок"));
productKeyboardsPrice = parseFloat(
  prompt("Введіть ціну клавіатур", "3000 грн")
);
productKeyboardsAmount = parseFloat(
  prompt("Введіть кількість клавіатур", "10 клавіатур")
);
randomCheckNumber = parseInt(
  Math.random() * (randomMax - randomMin) + randomMin
);
// Знаходимо ціну кожного товару окремо
LaptopPrice = parseFloat(productLaptopsPrice / productLaptopsAmount);
MousePrice = parseFloat(productMousesPrice / productMousesAmount);
KeyboardPrice = parseFloat(productKeyboardsPrice / productKeyboardsAmount);
// Знаходимо загальну ціну
generalSum = parseInt(
  productLaptopsPrice + productMousesPrice + productKeyboardsPrice
);

// Виводимо результат у консолі
console.log(
  `LaptopPrice = ${LaptopPrice} MousePrice = ${MousePrice} KeyboardPrice = ${KeyboardPrice} generalSum = ${generalSum}`
);
console.log(typeof LaptopPrice);
console.log(typeof MousePrice);
console.log(typeof KeyboardPrice);

// Виводимо до html
// Перевірка
if (
  productLaptopsPrice <= 0 ||
  productLaptopsAmount <= 0 ||
  productMousesPrice <= 0 ||
  productMousesAmount <= 0 ||
  productKeyboardsPrice <= 0 ||
  productKeyboardsAmount <= 0
) {
  result = negativeError;
} else {
  result = `<div class="check-block">
  <h2>ЧЕК #${randomCheckNumber}</h2>
  <p class="result">Ноутбуків ${productLaptopsAmount} шт</p>
  <p class="result">Вартість кожного ${LaptopPrice} грн</p>
  <p class="result">Загальна вартість ноутбуків ${productLaptopsPrice} грн</p>
  <p class="result">Мишок ${productMousesAmount} шт</p>
  <p class="result">Вартість кожної ${MousePrice} грн</p>
  <p class="result">Загальна вартість мишок ${productMousesPrice} грн</p>
  <p class="result">Клавіатур ${productKeyboardsAmount} шт</p>
  <p class="result">Вартість кожної ${KeyboardPrice} грн</p>
  <p class="result">Загальна вартість клавіатур ${productKeyboardsPrice} грн</p>
  <p class="result">До сплати: ${generalSum} грн</p>
 </div>`;
}

// Отримуємо ДОМ
document.getElementById("b_res").innerHTML = result;
