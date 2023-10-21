//1. Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa vai parar quando for digitada a idade 999. No final, mostre quantos alunos existem na turma e qual é a média de idade do grupo.

const idadeAlunos = [];
let idade = undefined;
let mediaIdade = undefined;

do {
    idade = parseInt(prompt("Digite a iidade do aluno"));
    if (!isNaN(idade) && idade != 999){
        idadeAlunos.push(idade)
    }
} while (idade != 999);

mediaIdade = (idadeAlunos.reduce((accumulator, currentValue) => accumulator + currentValue, 0))/idadeAlunos.length;

document.write(`<p>O número de alunos na turma é ${idadeAlunos.length}.</p>`)
document.write(`<p>Os valores isolados são: ${idadeAlunos}.</p>`)
document.write(`<p>A média de idade é ${mediaIdade.toFixed(2)}.</p>`)