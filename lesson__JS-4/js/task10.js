// Задача 10
/*
Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 
*/
// Перший крок отримуємо числа від юзера
const userFirstNumber = parseInt(prompt("Введіть перше число", 1))
const userSecondNumber = parseInt(prompt("Введіть друге число", 10))
let unpairedNumberSum = 0
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
// Крок третій проходимо циклом між числами та знаходимо суму непарних чисел
for (i = minNum; i <= maxNum; i++) {
  if (i % 2 !== 0) unpairedNumberSum += i
}
result += unpairedNumberSum
// Вивід результату
document.getElementById("b_res").innerHTML = result
