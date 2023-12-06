// Entrada de dados
let readlineSync = require('readline-sync');

let nome = readlineSync.question("Qual o seu nome?\n");
let nota1 = parseFloat(readlineSync.question("Informe a nota 1:\n"));
let nota2 = parseFloat(readlineSync.question("Informe a nota 2:\n"));

// Processamento
nome = nome.toUpperCase();

// Somar todas as notas
let soma_notas = nota1 + nota2;

// Dividir o valor da soma por 5


// Saída
console.log(`OLÁ ${nome}`);
console.log(soma_notas);
// média final