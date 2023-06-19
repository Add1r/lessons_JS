// Задача 15
/*
Користувача поступово вводить показники температури протягом року. Знайти середню температуру.
*/
// Крок перший оголошуэмо потрібні константи та змінні
const monthNumber = 12
let sum = 0
let averageTemperature = 0
let result = ""
// циклом проходимо кількість потрібних данних
for (let i = 1; i <= monthNumber; i++) {
  const monthTemperature = parseFloat(
    prompt(`Введіть температуру ${i} місяця`, 10)
  )
  // сумуємо усі показники
  sum += monthTemperature
}
// знаходимо середню температуру
averageTemperature = sum / monthNumber
result += `<p>Середня температура за рік склала ${averageTemperature.toFixed(
  2
)}</p>`
// Вивести результат
document.getElementById("b_res").innerHTML = result
