// Задача 9
/*
Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
*/
const minNumber = 1
const maxNumber = 100
document.querySelector("#submit").onclick = function () {
  // Намагаємось вгадати з 3 спроб число
  for (i = 1; ; i++) {
    let tryGuess = confirm(
      `${
        Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
      } вгада?`
    )

    if (tryGuess === true) {
      alert("Ура!")
      break
    }
    alert("Прикро")
  }
}
