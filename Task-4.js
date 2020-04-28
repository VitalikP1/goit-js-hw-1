let credits = 23580;
const pricePerDroid = 3000;
let numberOfGoods = prompt("Сколько дроидов желаете купить?");

if (numberOfGoods === null) {
  console.log("Отменено пользователем!");
} else if (Number(numberOfGoods) * pricePerDroid > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  let totalPrice = credits - pricePerDroid * Number(numberOfGoods);
  console.log(
    `Вы купили ${numberOfGoods} дроидов, на счету осталось ${totalPrice} кредитов.`
  );
}
