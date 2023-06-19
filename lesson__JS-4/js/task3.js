// Задача 3
/*
Вивести таблицю з одним рядком і  7 стовпцями.
*/

let result = "<table><tr>"
// Перший генеруємо таблицю за допомогою циклу
for (i = 1; i <= 7; i++) {
  result += `<td>${i}</td>`
}
result += "</tr></table>"
// Вивід результату
document.getElementById("b_res").innerHTML = result
