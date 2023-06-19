// Задача 5
/*
Вивести таблицю
*/
let counter = 1
let result = "<table>"
// Крок перший генеруємо таблицю за допомогою циклу
for (i = 1; i <= 3; i++) {
  result += "<tr>"
  for (j = 1; j <= 3; j++) {
    result += `<td>${counter++}</td>`
  }
  result += "</tr>"
}
result += "</table>"
// Вивести результат
document.getElementById("b_res").innerHTML = result
