// Задача 9
/*
Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість
від’ємних показів температури.
*/
// Функція яка знаходить від’ємні показники
function negativeTemperatureCounter() {
    // кількість введень температур
    const numberTemprtIndicators = parseInt(prompt('Введіть кількість показників температури', 3))
    // лічільник
    let counter = 0
    // цикл в котрому вводимо температури задану кількість разів
    for (let i = 1; i <= numberTemprtIndicators; i++) {
        const temperatureIndicators = parseFloat(prompt('Введіть показник температури', 5))
        // підрахування від’ємних показів
        temperatureIndicators < 0 ? counter++ : (counter += 0)
    }
    // Готуємо результат функції
    let result = `Кількість показів температури: ${numberTemprtIndicators}</br> з них від’ємних: ${counter}`
    return result
}
// Вивід результату
let render = negativeTemperatureCounter()
document.getElementById('b_res').innerHTML = render
