const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map((nota, indice) => 
    nota < 10 ? nota + 1 : nota
);

console.log(notasAtualizadas);