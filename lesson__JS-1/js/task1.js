/*
let number = 0;
let string = word;
let boolean = true;
let undefined =  ;
let object = {};
*/
// Задача 1
// Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
// Региструємо місця у памяті
let setNumberA;
let setNumberB;
let mathematicResult1;
let mathematicResult2;
let mathematicResult3;
let result;
const zeroDivine = `нуль не ділиться`;

// Отримуємо числа котрі треба розрахувати у прикладах
setNumberA = parseFloat(prompt("Please set first number", 1));
setNumberB = parseFloat(prompt("Please set second number", 2));

// Отримуємо перший результат суму
mathematicResult1 = setNumberA + setNumberB;

// Отримуємо другий результат добуток
mathematicResult2 = setNumberA * setNumberB;

// Отримуємо третій результат частку
// Перевірка
if (setNumberA === 0 || setNumberB === 0) {
  mathematicResult3 = zeroDivine;
} else {
  mathematicResult3 = (setNumberA / setNumberB).toFixed(2);
}

// Виводимо результат у консолі
console.log(
  `first result = ${mathematicResult1} \nsecond result = ${mathematicResult2} \nthird result = ${mathematicResult3}`
);
// Виводимо до html
result = `<table>
<tbody class="res-table">
  <tr>
    <th>Шуканий Результат</th>
    <th>Отримане значення</th>
  </tr>
  <tr>
    <th>Сума</th>
    <td>${mathematicResult1}</td>
  </tr>
  <tr>
    <th>Добуток</th>
    <td>${mathematicResult2}</td>
  </tr>
  <tr>
    <th>Частка</th>
    <td>${mathematicResult3} </td>
  </tr>
  
</tbody>
</table>`;

// Отримуємо ДОМ
document.getElementById("b_res").innerHTML = result;
