// Задача 4
/*
Вивести таблицю з 3 рядків і 7 стовпців
*/
let result = "<table>"
// Крок перший генеруємо таблицю за допомогою циклу
for (i = 1; i <= 3; i++) {
  result += "<tr>"
  for (j = 1; j <= 7; j++) {
    result += `<td>${j}</td>`
  }
  result += "</tr>"
}
result += "</table>"
// Вивести результат
document.getElementById("b_res").innerHTML = result
