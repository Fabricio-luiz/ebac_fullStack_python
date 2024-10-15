//FUnção para retornar saudação ao usuário
function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};
const seuNome = "Fabricio";
const cumprimento = saudacao(seuNome);
console.log(cumprimento);


//Função para calcular massa corporal IMC
function calcularImc (peso: number, altura: number): number {
    const imc = peso * altura;
    return imc;
};
const resultado = calcularImc(80, 1.70);
console.log(resultado);