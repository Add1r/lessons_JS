// Задача 6
/*
Створити функцію, яка створює таблицю з
вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим
повідомленням).
*/
// Отримуємо числа для рядків та стовпців
const rowNumberN = parseInt(prompt('Введіть кількість рядків', 3))
const columnNumberM = parseInt(prompt('Введіть кількість столбців', 5))
// Функція для виведення таблиці
function tableDraw(rowN, colM) {
    let counter = 1
    let result = '<table>'
    for (let i = 1; i <= rowN; i++) {
        result += '<tr>'
        for (j = 1; j <= colM; j++) {
            result += `<td style="cursor:pointer;" class="td-side" id="${counter}">${counter}</td>`
            counter++
        }
        result += '</tr>'
    }
    result += '</table>'
    return result
}
// Вивід результату
let render = tableDraw(rowNumberN, columnNumberM)
document.getElementById('b_res').innerHTML = render
