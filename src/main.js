const alunos = [
    { nome: "Maria", nota: 9 },
    { nome: "Andre", nota: 4 },
    { nome: "Paulo", nota: 6 },
    { nome: "Vanessa", nota: 7 },
    { nome: "Cleber", nota: 8 }
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);