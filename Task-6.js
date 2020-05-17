let input;
let total = 0;

while (true) {
  input = prompt("Введите число!");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  }

  input = Number(input);

  const notNumber = Number.isNaN(input);

  if (notNumber) {
    console.log("Было введено не число, попробуйте еще раз");
    continue;
  }

  total += input;
}
console.log("Общая сумма чисел равна ", total);
