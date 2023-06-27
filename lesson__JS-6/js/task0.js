// Задача 0
/* Вивести на екран A B C D E F G H I..*/
// Перший крок з отримуємо букву на котрій стопаємся
const letterSelectedToStop = prompt('Choose the letter of alphbet to stop', 'I')
// наший алфавіт
const ALPHBET = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'V',
    'X',
    'Y',
    'Z',
]
// Крок другий регеструємо змінну результату та лічільника
let result = '<p>'
let counter = 0
// Крок третій за допомогою циклу проходимо наший алфавіт з кожним циклом додаємо лічільник
for (let i = 0; i < ALPHBET.length; i++) {
    counter++
    // добавляємо до результату наші букви
    result += `${ALPHBET[i]} `
    // перевірка на стоп від юзера
    if (ALPHBET[i] === letterSelectedToStop.toUpperCase()) {
        break
    }
    // виводимо по 5 літер у рядок за допомогою </br>
    if (counter === 5) {
        result += '</br>'
        // Обнуляємо лічільник та скидуємо наший індекс щоб почати с наступної літери
        counter = 0
        i = i - 4
    }
}
result += `</p>`
// Вивід результату
document.getElementById('b_res').innerHTML = result
