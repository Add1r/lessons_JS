// Задача 1
/* 1. Використовуючи цикли вивести на екран 20 символів «о». */
// Крок 1 за допомогою циклу виводимо 20 символів о
const symbolToDraw = 'o'
let result = ''
for (let i = 0; i <= 20; i++) {
    result += symbolToDraw
}
// let result = symbolToDraw.repeat(20)     :) XD ;)
// Вивід результату
document.getElementById('b_res').innerHTML = result
