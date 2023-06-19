// Задача 13
/*
Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 
*/
// Крок перший отримуємо N M K від юзера
const rowNumberN = parseInt(prompt("Введіть кількість рядків", 3))
const columnNumberM = parseInt(prompt("Введіть кількість столбців", 5))
let shellsNumberK = parseInt(prompt("Введіть кількість снарядів", 2))
// Крок другий лічільник номерів поля
let counter = 1
// Крок третій знаходимо рандомне поле де стане корабель
const minNumber = 1
const maxNumber = rowNumberN * columnNumberM
const randomNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
// Крок четвертий генеруємо таблицю
let result = "<table>"
for (i = 1; i <= rowNumberN; i++) {
  result += "<tr>"
  for (j = 1; j <= columnNumberM; j++) {
    result += `<td style="cursor:pointer;" class="td-side" id="${counter}">${counter}</td>`
    counter++
  }
  result += "</tr>"
}
result += "</table>"
// Виводимо таблицю
document.getElementById("b_res").innerHTML = result
// Виводимо постріли
document.getElementById(
  "shellsNumber"
).innerHTML = `<p>Пострілів ${shellsNumberK}</p>`
// Отримуємо усі поля котрі в нас є
const fieldСells = document.querySelectorAll(".td-side")
let flagWin = false
for (let i = 0; i < fieldСells.length; i++) {
  fieldСells[i].addEventListener("click", function () {
    shellsNumberK--
    result += `<p>Кількість пострілів ${shellsNumberK}</p>`
    // Перевіряємо кількість пострілів
    if (shellsNumberK >= 0 && !flagWin) {
      // Отримуємо номер нажатого поля
      let fieldHitNumber = parseInt(fieldСells[i].id)
      // порівнюємо його з позицією кораблика
      if (fieldHitNumber === randomNumber) {
        fieldСells[i].classList.add("boom")
        // Підіймаємо прапор перемоги
        flagWin = true
        alert("Вбив")
      } else fieldСells[i].classList.add("miss")
      // Обновлюємо постріли
      document.getElementById(
        "shellsNumber"
      ).innerHTML = `<p>Пострілів ${shellsNumberK}</p>`
    } else alert("Кінець гри")
  })
}
