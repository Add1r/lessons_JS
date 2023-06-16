// Задача
/*
З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
*/
let result;
// Крок перший отримати номер дня від юзера
let userWeekNumber = parseInt(prompt(`Введіть номер тижня від 1 до 7`, 1));
// Крок другий відштовхуючись від числа яке ввів юзер вивести день тижня
switch (userWeekNumber) {
  case 1:
    result = `<p>понеділок</p>`;
    break;
  case 2:
    result = `<p>вівторок</p>`;
    break;
  case 3:
    result = `<p>середа</p>`;
    break;
  case 4:
    result = `<p>четвер</p>`;
    break;
  case 5:
    result = `<p>п'ятниця</p>`;
    break;
  case 6:
    result = `<p>субота</p>`;
    break;
  case 7:
    result = `<p>неділя</p>`;
    break;
  default:
    result = `<p>Перевірте чи попали ви у інтервал від 1 до 7</p>`;
}
// Вивести результат
document.getElementById("b_res").innerHTML = result;
