// Задача 8
/*
Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання,
куди переходимо при кліку на зображення (тег img повине знаходитись у
середині тега a: <a> <img src=”шлях”> </a>
*/
// функція для рендеру банера ( задаємо стандартні значення )
function bannerDrawer(
    imgSrc = './img/google.png',
    headTitle = 'Google search',
    link = 'https://www.google.com/'
) {
    // готуємо банер
    let result = `<h1>${headTitle}</h1><a href="${link}" target="blank"><img src="${imgSrc}"</a>`

    return result
}
// Вивід результату
let render = bannerDrawer()
document.getElementById('b_res').innerHTML = render
