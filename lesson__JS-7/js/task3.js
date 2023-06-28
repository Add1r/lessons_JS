// Задача 3
/*
Створити окремі функції, які для 4 чисел знаходять:
1)суму;
2)добуток;
3)середнє арифметичне;
4)мінімальне значення.
*/
// Отримуємо числа
const numOne = parseFloat(prompt('Введіть цифру 1', 1))
const numTwo = parseFloat(prompt('Введіть цифру 2', 2))
const numThree = parseFloat(prompt('Введіть цифру 3', 3))
const numFour = parseFloat(prompt('Введіть цифру 4', 4))
// суму
let sumValue = (num1, num2, num3, num4) => {
    return num1 + num2 + num3 + num4
}
// добуток
let productValue = (num1, num2, num3, num4) => {
    return num1 * num2 * num3 * num4
}
// середнє арифметичне
let averageValue = (num1, num2, num3, num4) => {
    return (num1 + num2 + num3 + num4) / 4
}
// мінімальне значення
let minValue = (num1, num2, num3, num4) => {
    let firstDuoMin = num1 < num2 ? num1 : num2
    let secondDuoMin = num3 < num4 ? num1 : num2
    return firstDuoMin < secondDuoMin ? firstDuoMin : secondDuoMin
}
// Вивід результату
let render = `Сума тих чисел ${sumValue(
    numOne,
    numTwo,
    numThree,
    numFour
)};</br> Добуток тих чисел ${productValue(
    numOne,
    numTwo,
    numThree,
    numFour
)};</br>  Мінімальне значення тих чисел ${minValue(
    numOne,
    numTwo,
    numThree,
    numFour
)};</br>  Середнє арифметичне тих чисел ${averageValue(numOne, numTwo, numThree, numFour)};</br> `
document.getElementById('b_res').innerHTML = render
