let cost;
let countryForDelivery = prompt("В какую страну доставить Ваш товар?");

switch (countryForDelivery.toLowerCase()) {
  case "китай":
    cost = 100;
    alert(`Доставка в ${countryForDelivery} будет стоить ${cost} кредитов`);
    break;

  case "чили":
    cost = 250;
    alert(`Доставка в ${countryForDelivery} будет стоить ${cost} кредитов`);
    break;

  case "австралия":
    cost = 170;
    alert(`Доставка в ${countryForDelivery} будет стоить ${cost} кредитов`);
    break;

  case "индия":
    cost = 80;
    alert(`Доставка в ${countryForDelivery} будет стоить ${cost} кредитов`);
    break;

  case "ямайка":
    cost = 120;
    alert(`Доставка в ${countryForDelivery} будет стоить ${cost} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
