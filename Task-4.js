let credits = 23580;
const pricePerDroid = 3000;
let numberOfGoods = prompt('Сколько дроидов желаете купить?');

if (numberOfGoods === null) {
    console.log('Отменено пользователем!');
} else if (numberOfGoods = credits < pricePerDroid * numberOfGoods) {
    console.log('Недостаточно средств на счету!');
} else {
    let totalPrice = credits - pricePerDroid * numberOfGoods;
    console.log('Вы купили ${nuberOfGoods} дроидов, на счету осталось ${totalPrice} кредитов.');
}
credits = totalPrice;