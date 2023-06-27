// Задача 4
/*
Побудувати ялинку
*/
// даємо юзеру вибір ціла ялика або ж половина
const userTreeChoose = prompt('Choose between: half, all', 'half')
// Символ для рисування
const symbolToDraw = 'o'
let result = ''
// задаємо у результат вибір юзера та за допомогою циклу виводимо нашу фігуру
if (userTreeChoose === 'half') {
    result += '<div style="text-align:left"'
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 5; j++) {
            result += `<p>${symbolToDraw.repeat(j)}</p>`
        }
    }
} else {
    result += '<div style="text-align:center"'
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 5; j++) {
            result += `<p>${symbolToDraw.repeat(j)}</p>`
        }
    }
}
result += '</div>'
// Вивід результату
document.getElementById('b_res').innerHTML = result
