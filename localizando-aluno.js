const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeMedia = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        const indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return `${listaDeNotasEAlunos[0][indice]}, a sua media é ${listaDeNotasEAlunos[1][indice]}`
    } else {
        return `Aluno não foi encontrado`
    }
}

console.log(exibeMedia('Caio'));