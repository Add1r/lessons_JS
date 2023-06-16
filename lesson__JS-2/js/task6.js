// Задача
/*
З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
*/
const januaryNumber = 1;
const februaryNumber = 2;
const marchNumber = 3;
const aprilNumber = 4;
const mayNumber = 5;
const juneNumber = 6;
const julyNumber = 7;
const augustNumber = 8;
const septemberNumber = 9;
const octoberNumber = 10;
const novemberNumber = 11;
const decemberNumber = 12;
let result;
// Крок перший отримати номер місяца
let userMonthNumber = parseInt(prompt(`Введіть номер місяця(від 1 до 12)`, 12));
// Крок другий зрозуміти до якої пори року відноситься місяць
if (
  userMonthNumber === januaryNumber ||
  userMonthNumber === februaryNumber ||
  userMonthNumber === decemberNumber
)
  result = result = `<p>Зима</p>`;
else if (
  userMonthNumber === marchNumber ||
  userMonthNumber === aprilNumber ||
  userMonthNumber === mayNumber
)
  result = result = `<p>Весна</p>`;
else if (
  userMonthNumber === juneNumber ||
  userMonthNumber === julyNumber ||
  userMonthNumber === augustNumber
)
  result = result = `<p>Літо</p>`;
else if (
  userMonthNumber === septemberNumber ||
  userMonthNumber === octoberNumber ||
  userMonthNumber === novemberNumber
)
  result = result = `<p>Осінь</p>`;
else
  result =
    result = `<p>Шось пішло не так перевірте число повино бути від 1 до 12</p>`;
// Вивести результат
document.getElementById("b_res").innerHTML = result;
