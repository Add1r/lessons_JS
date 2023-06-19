// Задача 12
/*
Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. 
  Вибір у кожній позиції вибирається як одне з чотирьох зображень. 
  Вивести ці зображення і повідомити виграш користувача  
  (три перших зображення 100 грн, три других – 200, три третіх –500, три четвертих зображення – 1000грн).
  Використати цикли і switch (для вибору зображення за номером)
*/
// Крок перший задіюємо кнопки
const minNumber = 1
const maxNumber = 4
// Збираємо наші кнопочки
const buttonClicked = document.querySelectorAll(
  "#firstRow, #secondRow, #thirdRow"
)
// Йдемо циклому по кількості наших кнопочок
for (let i = 0; i < buttonClicked.length; i++) {
  // чекаємо на клік
  buttonClicked[i].addEventListener("click", function () {
    // Прячемо кнопки після кліку
    buttonClicked[i].classList.add("clicked")
    // Генеруємо рандоме число яке доможе вибрати картинку
    const randomNum =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
    // Знаходимо батьківський блок
    const buttonClickedFather = buttonClicked[i].closest(".text-img")
    // Шукаємо картинки
    const buttonClickedChild = buttonClickedFather.children
    // Проходимо по картинкам циклом для того щоб обрати потрібну
    step: for (let j = 0; j < buttonClickedChild.length; j++) {
      // Свитчом вибираємо картинку даємо їй класс
      switch (randomNum) {
        case 1:
        case 2:
        case 3:
        case 4:
          buttonClickedChild[randomNum].classList.add("animated")
          break step
      }
    }
  })
}
