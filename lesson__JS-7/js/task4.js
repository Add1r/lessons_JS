// Задача 4
/*
Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів:
кількість парних,
кількість додатних,
кількість більших за 100. */
// Отримуємо числа
const numOne = parseFloat(prompt('Введіть цифру 1', 1))
const numTwo = parseFloat(prompt('Введіть цифру 2', 2))
const numThree = parseFloat(prompt('Введіть цифру 3', 3))
// кількість парних
let checkEvenNumber = (num1, num2, num3) => {
    let result = 0
    num1 % 2 == 0 ? result++ : (result += 0)
    num2 % 2 == 0 ? result++ : (result += 0)
    num3 % 2 == 0 ? result++ : (result += 0)
    return result
}
// кількість додатних
let checkPositiveNumber = (num1, num2, num3) => {
    let result = 0
    num1 > 0 ? result++ : (result += 0)
    num2 > 0 ? result++ : (result += 0)
    num3 > 0 ? result++ : (result += 0)
    return result
}
// кількість більших за 100
let checkLargerHundred = (num1, num2, num3) => {
    let result = 0
    num1 > 100 ? result++ : (result += 0)
    num2 > 100 ? result++ : (result += 0)
    num3 > 100 ? result++ : (result += 0)
    return result
}
// Загальна функція
let generalMath = (num1, num2, num3) => {
    return `кількість парних: ${checkEvenNumber(
        num1,
        num2,
        num3
    )}</br> кількість додатних: ${checkPositiveNumber(
        num1,
        num2,
        num3
    )}</br> кількість більших за 100: ${checkLargerHundred(num1, num2, num3)}`
}
// Вивід результату
let render = generalMath(numOne, numTwo, numThree)
document.getElementById('b_res').innerHTML = render
