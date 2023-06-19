// Задача 16
/*
Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів.
 Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня
*/
// Крок перший оголошуэмо потрібні константи та змінні
const weekDayNum = 7
const weekNum = parseInt(prompt("Введіть кількість тижнів", 2))
let result = ""
let sumSalary = 0
let userWeekSalary = 0
// Проходимо циклом по кількості тижнів
for (i = 1; i <= weekNum; i++) {
  // обнуляємо лічильник прибутку за тиждень на кожній наступній ітерації
  userWeekSalary = 0
  // проходимо циклом кількість днів у тижні
  for (j = 1; j <= weekDayNum; j++) {
    let daySalary = parseFloat(
      prompt(`Введіть суму прибутку за ${i} тиждень та за ${j} день`, 100)
    )
    // перевіряємо щоб прибуток не був НаН
    if (!isNaN(daySalary)) {
      userWeekSalary += daySalary
    } else userWeekSalary += 0
  }
  // Отримуємо результат за кожен тиждень
  result += `<p style="margin-bottom:10px;">Кількість прибутку за ${i} тиждень склала ${userWeekSalary}</p>`
  // знаходимо загальну суму прибутку
  sumSalary += userWeekSalary
}
result += `<p>Загальна кількість прибутку ${sumSalary}</p>`
// Вивід результату
document.getElementById("b_res").innerHTML = result
