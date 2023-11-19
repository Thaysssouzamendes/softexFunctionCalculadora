// Função tradicional sem parâmetros
function saudacao() {
    console.log("Olá! Bem-vindo à calculadora.");
}

// Função tradicional com parâmetros e retorno de valor
function somar(a, b) {
    return a + b;
}

// Arrow function com parâmetros e retorno de valor
const multiplicar = (a, b) => a * b;

// Utilizando as funções
saudacao();

let numero1 = 10;
let numero2 = 5;

let resultadoSoma = somar(numero1, numero2);
console.log(`A soma de ${numero1} e ${numero2} é: ${resultadoSoma}`);

let resultadoMultiplicacao = multiplicar(numero1, numero2);
console.log(`A multiplicação de ${numero1} e ${numero2} é: ${resultadoMultiplicacao}`);
