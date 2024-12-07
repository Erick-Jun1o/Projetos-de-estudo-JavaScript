console.log(
    "[1] = Celsius para Fahrenheit\n",
    "[2] = Fahrenheit para Celsius\n",
    "[3] = Celsius para Kelvin\n",
    "[4] = Kelvin para Celsius\n",
    "[5] = Fahrenheit para Kelvin\n",
    "[6] = Kelvin para Fahrenheit"
);

let escala = parseInt(prompt("Para qual escala termometrica voce deseja converter? "));

switch(escala) {
  case 1: {
    let celsius1 = parseFloat(prompt("Informe a temperatura em celsius "));
    let fahrenheit1 = (celsius1 * 1.8) + 32;
    console.log("A temperatura é igual a: ", fahrenheit1.toFixed(2), "Fahrenheit");
    break;
  }
  case 2: {
    let fahrenheit2 = parseFloat(prompt("Informe a temperatura em Fahrenheit "));
    let celsius2 = (fahrenheit2 - 32) / 1.8;
    console.log("A temperatura é igual a: ", celsius2.toFixed(2), "Celsius");
    break;
  }
  case 3: {
    let celsius3 = parseFloat(prompt("Informe a temperatura em Celsius "));
    let kelvin1 = celsius3 + 273.15;
    console.log("A temperatura é igual a: ", kelvin1.toFixed(2), "Kelvin");
    break;
  }
  case 4: {
    let kelvin2 = parseFloat(prompt("Informe a temperatura em Kelvin "));
    let celsius4 = kelvin2 - 273.15;
    console.log("A temperatura é igual a: ", celsius4.toFixed(2), "Celsius");
    break;
  }
  case 5: {
    let fahrenheit3 = parseFloat(prompt("Informe a temperatura em Fahrenheit "));
    let kelvin3 = (fahrenheit3 - 32) * 5/9 + 273.15;
    console.log("A temperatura é igual a: ", kelvin3.toFixed(2), "Kelvin");
    break;
  }
 case 6: {
    let kelvin4 = parseFloat(prompt("Informe a temperatura em Kelvin "));
    let fahrenheit4 = (kelvin4 - 273.15) * 9/5 + 32;
    console.log("A temperatura é igual a: ", fahrenheit4.toFixed(2), "Fahrenheit");
    break;
}
  default: {
    console.log("Opção inválida. Por favor, escolha um número entre 1 e 6.");
    break;
  }
}
