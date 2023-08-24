const Alunos = ['Lucas', 'Alzira', 'Bernadetti', 'Alfredo', 'jandira'];
function gerarNotaAleatoria() {
  return Math.floor(Math.random() * 10 + 1);
}
const AlunosCNotas = Alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: gerarNotaAleatoria()
  };
});
console.log(AlunosCNotas);
function ValidaAluno(AlunosCNotas) {
  return AlunosCNotas.nota >= 6;
}
const FiltraAlunoAprovado = AlunosCNotas.filter(ValidaAluno);
console.log(FiltraAlunoAprovado);