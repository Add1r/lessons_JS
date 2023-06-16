// Задача 0
/* З клавіатури вводяться імена двох дітей та кількість у них
цукерок. Вивести не екран ім’я тієї дитини, у якої кількість
цукерок є більшою, або вивести, що кількість однакова.*/
// Перший крок отримати імена дітей та кількість у них цукерок
let firstChildName = prompt(`Введіть імя першої дитини`, `Максим`);
let firstChildSweetsNumber = parseInt(
  prompt(`Кількість цукерок у першої дитини`, 2)
);
let secondChildName = prompt(`Введіть імя другої дитини`, "Василь");
let secondChildSweetsNumber = parseInt(
  prompt(`Кількість цукерок у другої дитини`, 2)
);
let result;
// Другий крок порівняти кількість цукерок зрозуміти у кого більше, чи порівну
if (firstChildSweetsNumber > secondChildSweetsNumber)
  result = `<p>У ${firstChildName} більше бо в нього <span>${firstChildSweetsNumber}</span> цукерок</p>`;
else if (firstChildSweetsNumber < secondChildSweetsNumber)
  result = `<p>У ${secondChildName} більше бо в нього <span>${secondChildSweetsNumber}</span> цукерок</p>`;
else
  result = `<p>У ${secondChildName} та ${secondChildName} однаково цукерок</p>`;
// вивести імя дитини у якої більше або вивести що кількість рівна
document.getElementById("b_res").innerHTML = result;
