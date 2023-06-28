// Задача 1
/*  Створити функцію, яка за номером місяця повертає його назву. */
// Перший крок з отримуємо місяць
const monthSelectedToShow = parseInt(prompt('Choose the number to check a month', 3))
// Робимо функцію яка поверне місяць по номеру
function showMonth(monthNumber) {
    let result = '<p>'
    switch (monthNumber) {
        case 1:
            result += 'січень'
            break
        case 2:
            result += 'лютий'
            break
        case 3:
            result += 'березень'
            break
        case 4:
            result += 'квітень'
            break
        case 5:
            result += 'травень'
            break
        case 6:
            result += 'червень'
            break
        case 7:
            result += 'липень'
            break
        case 8:
            result += 'серпень'
            break
        case 9:
            result += 'вересень'
            break
        case 10:
            result += 'жовтень'
            break
        case 11:
            result += 'листопад'
            break
        case 12:
            result += 'грудень'
            break
        default:
            result += ' '
            break
    }
    result += '</p>'
    return result
}
// Вивід результату
let render = showMonth(monthSelectedToShow)
document.getElementById('b_res').innerHTML = render
