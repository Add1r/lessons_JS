/*
let number = 0;
let string = word;
let boolean = true;
let undefined =  ;
let object = {};
*/
// Задача 0
// Необхідно обчислити математичні вирази де дано:
// Региструємо місця у памяті
let setNumberA;
let setNumberB;
let setNumberC;
let mathematicResult1;
let mathematicResult2;
let mathematicResult3;
let mathematicResult4;
let result;
const numberOne = 12;
const numberTwo = 2;
const zeroDivine = `нуль не ділиться`;

// Отримуємо числа котрі треба розрахувати у прикладах
setNumberA = parseFloat(prompt("Please set first number", 1));
setNumberB = parseFloat(prompt("Please set second number", 2));
setNumberC = parseFloat(prompt("Please set third number", 3));

// Отримуємо перший результат
mathematicResult1 = setNumberA + numberOne + setNumberB;

// Отримуємо другий результат
// Перевірка
if (setNumberA === 0) {
  mathematicResult2 = zeroDivine;
} else {
  mathematicResult2 = Math.sqrt(
    (setNumberA + setNumberB) / (numberTwo * setNumberA)
  ).toFixed(2);
}

// Отримуємо третій результат
mathematicResult3 = Math.cbrt((setNumberA + setNumberB) * setNumberC).toFixed(
  2
);

// Отримуємо четвертий результат
mathematicResult4 = Math.sin(setNumberA * -setNumberB).toFixed(2);

// Виводимо результат у консолі
console.log(
  `first result = ${mathematicResult1} \nsecond result = ${mathematicResult2} \nthird result = ${mathematicResult3}\nfourth result = ${mathematicResult4}`
);
// Виводимо до html
result = `<p class="result">Перший приклад = ${mathematicResult1}</p> 
<p class="result">Другий приклад = ${mathematicResult2}</p>
<p class="result">Третій приклад = ${mathematicResult3}</p>
<p class="result">Четвертий приклад = ${mathematicResult4}</p>`;
// Отримуємо ДОМ
document.getElementById("b_res").innerHTML = result;
