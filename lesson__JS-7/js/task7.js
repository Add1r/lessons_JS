// Задача 7
/*
Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень
(шляхи до зображень передаються у функцію)

*/
// яка випадковим чином виводить на екран зображеня (задамо стандартно мин 1 макс 4)
function randomazerImageDraw(minNumber = 1, maxNumber = 4) {
    // отримуємо рандомне число
    const randomNumberForImg = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
    let result = ''
    // Свитч бо назва картинки може бути будь-яка
    switch (randomNumberForImg) {
        case 1:
            result += './img/0.webp'
            break
        case 2:
            result += './img/1.jpg'
            break
        case 3:
            result += './img/2.jpg'
            break
        case 4:
            result += './img/3.jpg'
            break
    }
    return result
}
// Вивід результату
let render = `<img src="${randomazerImageDraw()}  " alt="task img">`
document.getElementById('b_res').innerHTML = render
