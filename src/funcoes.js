"use strict";
//FUnção para retornar saudação ao usuário
function saudacao(nome) {
    return `Olá ${nome}`;
}
;
const seuNome = "Fabricio";
const comprimento = saudacao(seuNome);
console.log(comprimento);
//Função para calcular massa corporal IMC
function calcularImc(peso, altura) {
    const imc = peso * altura;
    return imc;
}
;
const resultado = calcularImc(80, 1.70);
console.log(resultado);
