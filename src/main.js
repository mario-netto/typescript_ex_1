"use strict";
// Utilizando o TypeScript e a tipagem escreva duas funções: 
// uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, 
// e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
// No repositório do curso crie uma branch chamada exercicio_ts e armaze o código TS escrito nesta branch
function multiplicacao(valor1, valor2) {
    return valor1 * valor2;
}
function saudacao(nome) {
    return `Olá, ${nome}`;
}
console.log(multiplicacao(10, 10));
console.log(saudacao('mario'));
