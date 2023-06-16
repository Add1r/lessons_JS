// Задача
/*З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей
не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються
гроші, то пропонуємо купити лотерею за 4 грн.*/
// Крок перший отримати ціну товару та кількість грошей
let goodsPrice = parseFloat(prompt(`Введіть суму товару`, 13.99));
let moneyAmount = parseFloat(prompt(`Введіть кількість грошей`, 20));
const lotteryPrice = 4;
let result;
let lotteryTicketOffer = 0;
// Крок другий порахувати чи вистачає грошей на товар, якщо ні відмовити, або якщо є залишок запропонувати лотерею
if (goodsPrice <= moneyAmount) {
  lotteryTicketOffer = Math.floor((moneyAmount - goodsPrice) / lotteryPrice);
  if (lotteryTicketOffer >= 1)
    result = `<p>Дякуємо за покупку! У вас ще вистачить на ${lotteryTicketOffer} лотерейних білетів по 4 гривні</p>`;
  else result = `<p>Дякуємо за покупку</p>`;
} else result = `<p>Не вистачає грошей</p>`;
// Вивід результату
document.getElementById("b_res").innerHTML = result;
