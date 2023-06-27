// Задача 2
/*
Відобразити трикутник за допомогою символів «о»
*/
// даємо юзеру вибір по якій стороні вирівняти нашу фігуру
const userAlignChoose = prompt('Choose alighn between: center, right, left ', 'left')
// Символ для рисування
const symbolToDraw = 'o'
// задаємо у результат вибір юзера та за допомогою циклу виводимо нашу фігуру
let result = `<div style="text-align:${userAlignChoose}"`
for (let i = 0; i <= 10; i++) {
    result += `<p>${symbolToDraw.repeat(i)}</p>`
}
result += '</div>'
// Вивід результату
document.getElementById('b_res').innerHTML = result
