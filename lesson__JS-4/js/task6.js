// Задача 6
/*
Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
*/
let counter = 1
let result = ""
// Крок перший генеруємо таблицю за допомогою циклу
for (g = 1; g <= 3; g++) {
  result += "<table style='margin-bottom:10px;'>"
  for (i = 1; i <= 3; i++) {
    result += "<tr>"
    for (j = 1; j <= 3; j++) {
      result += `<td>${counter++}</td>`
    }
    result += "</tr>"
  }
  result += "</table>"
}
// Вивести результат
document.getElementById("b_res").innerHTML = result
