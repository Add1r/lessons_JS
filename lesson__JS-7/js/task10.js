// Задача 10
/*
Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти
середнє значення для додатних показів температури.
*/
// Функція яка дозволить знайти середнє значення для додатних показів температури.
function averagePositiveValue() {
    // яка випадковим чином виводить на екран зображеня
    const numberTemprtIndicators = parseInt(prompt('Введіть кількість показників температури', 3))
    // лічільник
    let counter = 0
    // Сума показників(додаткових)
    let positiveSum = 0
    // цикл в котрому вводимо температури задану кількість разів
    for (let i = 1; i <= numberTemprtIndicators; i++) {
        const temperatureIndicators = parseFloat(prompt('Введіть показник температури', 5))
        // підраховуємо додаткові показники температури та їх суму
        if (temperatureIndicators > 0) {
            counter++
            positiveSum += temperatureIndicators
        }
    }
    // рахуємо середнє значення
    let averageValue = positiveSum / counter
    // Готуємо результат функції
    let result = `Cереднє значення для додатних показів температури: ${averageValue.toFixed(
        2
    )}</br> Всього додатних: ${counter}`
    return result
}
// Вивід результату
let render = averagePositiveValue()
document.getElementById('b_res').innerHTML = render
