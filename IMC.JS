let peso = parseFloat(prompt('Digite seu peso (Em KG) '));
let altura = parseFloat(prompt('Digite sua altura (Em Metros) '));

const imc = peso / (altura*altura);

if (imc < 18.5) {
    console.log("Magreza");
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal");
}
else if (imc > 25.00 && imc <= 29.9) {
    console.log("Sobrepeso ");
}
else if (imc > 30.00 && imc <= 39.9) {
    console.log("Obesidade Grau II");
}
else if (imc > 40) {
    console.log("Obesidade Grave!");
}

