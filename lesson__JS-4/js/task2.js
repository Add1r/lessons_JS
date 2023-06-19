// Задача 2
/*
Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
*/
// Перший крок генеруємо випадкові числа від 1 до 1000
let result = ""
let pairedNumberCounter = 0
let unpairedNumberCounter = 0
const minNumber = 1
const maxNumber = 1000
for (i = 1; i <= 100; i++) {
  let randomNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
  if (randomNumber % 2 === 0) pairedNumberCounter += 1
  else unpairedNumberCounter += 1
}
if (pairedNumberCounter > unpairedNumberCounter)
  result += `<p>Парних більше кількість склала ${pairedNumberCounter}</p>`
else
  result += `<p>Непарних більше кількість склала ${unpairedNumberCounter}</p>`

/*--------------------------------------------------------------------------------------------------------------------------------*/
// Задача 2.1
/*
Створити 10 елементів для введення цін продуктів
*/
// Крок перший за допомогою циклу відобразити 10 елементів для введення
result += "<form>"
for (i = 1; i <= 10; i++) {
  result += `<p style='margin-bottom:5px'>Введіть ціну товару ${i} <input type="number"></p>`
}
result += "<input class='submit' type='submit' value='Submit'></form>"
// Вивід результату
document.getElementById("b_res").innerHTML = result
