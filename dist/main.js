"use strict";

var alunos = [{
  nome: "Maria",
  nota: 9
}, {
  nome: "Andre",
  nota: 4
}, {
  nome: "Paulo",
  nota: 6
}, {
  nome: "Vanessa",
  nota: 7
}, {
  nome: "Cleber",
  nota: 8
}];
function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);