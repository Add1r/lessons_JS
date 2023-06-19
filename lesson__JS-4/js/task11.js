// Задача 11
/*
Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
*/
// Перший крок отримуємо числа від юзера
const userFirstNumber = parseInt(prompt("Введіть перше число", 1))
const userSecondNumber = parseInt(prompt("Введіть друге число", 10))
// Региструємо змінні
let unpairedNumberSum = 0
let count = 0
let maxNum
let minNum
let result = ""
// Крок другий знаходимо яке з чисел меньше чи більше
if (userFirstNumber > userSecondNumber) {
  maxNum = userFirstNumber
  minNum = userSecondNumber
} else {
  maxNum = userSecondNumber
  minNum = userFirstNumber
}
// Крок третій проходимо циклом між числами
step: for (i = minNum; i <= maxNum; i++) {
  // знаходимо непарні числа
  if (i % 2 !== 0) {
    count++
    //  знаходимо суму перших 5ти
    while (count <= 5) {
      unpairedNumberSum += i
      continue step
    }
  }
}
result += unpairedNumberSum
// Вивід результату
document.getElementById("b_res").innerHTML = result
