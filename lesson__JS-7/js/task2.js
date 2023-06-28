// Задача 2
/*  Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим. */
// Перший крок з отримуємо день
const dayToCheck = parseInt(prompt('Choose the number of day you wanna check to', 3))
// Робимо функцію яка перевірить день
function dayOffChecker(checkDay) {
    let result = '<p>'
    switch (checkDay) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            result += 'Робочий'
            break
        case 6:
        case 7:
            result += 'Вихідний'
            break
        default:
            result += ' '
            break
    }
    result += '</p>'
    return result
}
// Вивід результату
let render = dayOffChecker(dayToCheck)
document.getElementById('b_res').innerHTML = render
