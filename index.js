const readline = require("readline-sync");

// Calculo de média de notas de um bimestre

// ENTRADA
// O usuário deve informar 4 notas 

const nota_prova_1 = readline.questionFloat("Qual a nota da prova 1?\t");
const nota_prova_2 = readline.questionFloat("Qual a nota da prova 2?\t");
const nota_prova_3 = readline.questionFloat("Qual a nota da prova 3?\t");
const nota_prova_4 = readline.questionFloat("Qual a nota da prova 4?\t");

console.log(nota_prova_1, nota_prova_2, nota_prova_3, nota_prova_4);

// PROCESSAMENTO

// somar todas as notas e armazenar o valor em uma variável

// Operadores aritméticos
// Soma (+)
// Subtração (-)
// Divisão (/)
// Multiplicação (*)

const soma_notas = nota_prova_1 + nota_prova_2 + nota_prova_3 + nota_prova_4;

console.log(soma_notas);

// calcular a média e armazenar em uma variável
const media_notas = soma_notas / 4;

// SAÍDA
// Interpolação de texto

console.log(`A média das notas é: ${media_notas}`);