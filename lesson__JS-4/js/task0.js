// Задача 0
/* Вивести на екран 8 кнопок з написом “Hello”..*/
// Перший крок з допомогою циклу зробити вивід 8 кнопок
let result = ""
for (i = 1; i <= 8; i++) {
  result += `<p class="main-block__button js-button">Hello i'm button number ${i}</p>`
}
document.getElementById("b_res").innerHTML = result
