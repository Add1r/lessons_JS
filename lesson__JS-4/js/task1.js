// Задача 1
/* Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем*/
// Крок перший отримати кількість випадкових чисел
const minNumber = 1
const maxNumber = 100
const userNumberLimit = parseInt(
  prompt("Введіть необхідну кількість випадкових чисел (1-100)")
)
let result = "<ul class='main-block__ul'>"
// Крок другий робимо цикл для виведення маркованого списку
if (!isNaN(userNumberLimit) && userNumberLimit > 0 && userNumberLimit <= 100) {
  for (i = 1; i <= userNumberLimit; i++) {
    result += `<li>${
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
    }</li>`
  }
} else result += "<li>Помилкове число</li>"
result += "</ul>"
/*-------------------------------------------------------------------------------------------------------------------------------------------*/
// Задача 1.1
/* Вивести на екран номери місяців весни і літа (від 3 до 8) */
// Крок перший за допомогою циклу пробіжимось по номерам місяців та виведемо тільки від 3 до 8
const monthNumber = 12
for (i = 1; i <= monthNumber; i++) {
  if (i < 3 || i > 8) {
    continue
  }
  result += `<p>${i} місяць</p>`
}
// Вивід результату
document.getElementById("b_res").innerHTML = result
