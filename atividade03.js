// se a idade de aluno for inferior a 7: não aceito
// se a idade de aluno for maior ou igual a 7: aceito

let idadeAluno = 10;
let idadeMinima = 7;
let nomeAluno = "Laura"
let categoriaMinima = "kids";
let categoriaMaxima = "avançado";
let kidsIdade = 17;
let avançadoIdade = 60;

if(idadeAluno >= idadeMinima ) {
    console.log("A matrícula de " + nomeAluno + " foi realizada com sucesso!");
}else{
    console.log("Infelizmente a matrícula de " + nomeAluno + " não foi aceita :(");
}
let categoria = " ";
if (idadeAluno >= 7 && idadeAluno <= 10) {
  categoria = "Infantil";
} else if (idadeAluno >= 11 && idadeAluno <= 14) {
  categoria = "Juvenil";
} else if (idadeAluno >= 15 && idadeAluno <= 18) {
  categoria = "Adolescente";
} else if (idadeAluno >= 19 && idadeAluno<= 30) {
  categoria = "Adulto";
} else {
    categoria = "Não se encaixa em nenhuma categoria";
}

console.log("Categoria da turma: " + categoria);
