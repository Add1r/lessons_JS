// Задача 5
/*
Створити окремі функції, які переводять:
Сантиметри у дюйми;
Кілограми у фунти;
Кілометри у милі.
 */
const userNumber = parseFloat(prompt('Вкажіть число котре будемо переводити', 10))
// Сантиметри у дюйми
let centimetersToInches = centimetr => {
    const differenceToInch = 2.54
    let result = centimetr / differenceToInch
    return result.toFixed(2)
}
// Кілограми у фунти
let kilogramsToPounds = killogram => {
    const differenceToPound = 2.205
    let result = killogram * differenceToPound
    return result.toFixed(2)
}
// Кілометри у милі
let kilometersToMiles = kilometr => {
    const differenceToMile = 0.62137
    let result = kilometr * differenceToMile
    return result.toFixed(2)
}
// Вивід результату
let render = `Ваше число: ${userNumber}</br>Сантиметри у дюйми: ${centimetersToInches(
    userNumber
)}</br> Кілограми у фунти: ${kilogramsToPounds(
    userNumber
)}</br> Кілометри у милі: ${kilometersToMiles(userNumber)}`
document.getElementById('b_res').innerHTML = render
