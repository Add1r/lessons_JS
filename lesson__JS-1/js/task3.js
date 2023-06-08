/*
let number = 0;
let string = word;
let boolean = true;
let undefined =  ;
let object = {};
*/
// Задача 1
// Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
// Региструємо місця у памяті
let priceProduct;
let quantityProduct;
let sumProduct;
let pdvProduct;
let pdvSumProduct;
let result;
const pdvPercent = 5 / 100;
const negativeAmountError = `<p class="result">Ведені некоректні дані, перевірте ще</p>`;
// Отримуємо числа котрі треба розрахувати у прикладах
priceProduct = parseFloat(prompt("Ціна продукта", "18.90 грн"));
quantityProduct = parseInt(prompt("Кількість продуктів", "13 штук"));

// Отримуємо перший результат суму
sumProduct = quantityProduct * priceProduct;
// Отримуємо результат пдв
pdvProduct = parseFloat((sumProduct * pdvPercent).toFixed(2));
// Сума з ПДВ
pdvSumProduct = sumProduct + pdvProduct;

// Виводимо результат у консолі
console.log(`Summ = ${sumProduct} pdv = ${pdvProduct}`);
console.log(typeof sumProduct);
console.log(typeof pdvProduct);

// Виводимо до html
// Перевірка
if (sumProduct >= 0) {
  result = `<p class="result">Загальна вартість продуктів ${sumProduct}</p><p class="result">ПДВ на цю суму ${pdvProduct}</p><p class="result">Сума з ПДВ ${pdvSumProduct}</p>`;
} else {
  result = negativeAmountError;
}

// Отримуємо ДОМ
document.getElementById("b_res").innerHTML = result;
