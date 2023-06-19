// Задача 7
/*
Вивести на екран N абзаців (N вводиться користувачем)
*/
let result = ""
// Крок перший отримуємо від користувача число скільки абзаців треба
const userParagraphNumber = parseInt(prompt("Введіть кількість абзаців"))
// Крок другий генеруємо абзаці за допомогою циклу
for (i = 1; i <= userParagraphNumber; i++) {
  result += `<h1>Заголовок ${i}</h1>`
  for (j = 1; j <= userParagraphNumber; j++) {
    result += `<p>Розділ ${i}, параграф ${j}</p>`
  }
  result += "<hr>"
}

// Вивести результат
document.getElementById("b_res").innerHTML = result
