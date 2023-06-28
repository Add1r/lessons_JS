// Задача 0
/*  Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць. */
// Перший крок з отримуємо пору року
const monthSelectedToShow = parseInt(prompt('Choose the number to check a season', 3))
// Робимо функцію яка поверне пору року
function showSeason(monthNumber) {
    let result = '<p>'
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            result += 'Зима'
            break
        case 3:
        case 4:
        case 5:
            result += 'Весна'
            break
        case 6:
        case 7:
        case 8:
            result += 'Літо'
            break
        case 9:
        case 10:
        case 11:
            result += 'Осінь'
            break

        default:
            result += ' '
            break
    }
    result += '</p>'
    return result
}
// Вивід результату
let render = showSeason(monthSelectedToShow)
document.getElementById('b_res').innerHTML = render
