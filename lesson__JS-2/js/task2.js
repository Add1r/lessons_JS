// Задача
/*
Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
*/
// Перший крок генеруємо випадкове число від 1 до 5
const minNumber = 1;
const maxNumber = 5;
let randomNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
alert(`Спробуйте вгадати число від 1 до 5 з двух спроб`);
console.log(randomNumber);
let userNumber = parseInt(prompt(`Спроба перша`, 1));
let result;
if (randomNumber !== userNumber) {
  alert(`Не вгадав ще одна спроба`);
  userNumber = parseInt(prompt(`Друга спроба`, 2));
  if (randomNumber !== userNumber) result = `<p>Не гадав!!!</p>`;
  else result = `<p>Вгадав!!!</p>`;
} else result = `<p>Вгадав!!!</p>`;
// Вивід результату
document.getElementById("b_res").innerHTML = result;
